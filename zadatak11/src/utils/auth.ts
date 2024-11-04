export interface User {
  username: string;
  email: string;
  password: string;
}
export interface Auth {
  users: User[];
}

export const register = (user: User) => {
  let authString = localStorage.getItem("auth");

  if (authString) {
    let auth = JSON.parse(authString) as Auth;
    auth.users.push(user);
    localStorage.setItem("auth", JSON.stringify(auth));
  } else {
    const auth: Auth = { users: [] };
    auth.users.push(user);
    localStorage.setItem("auth", JSON.stringify(auth));
  }
  localStorage.setItem("user", JSON.stringify(user));
  console.log("register sucessfull");
  window.location.href = "/welcome";
};
export const login = (email: string, password: string) => {
  let authString = localStorage.getItem("auth");
  if (authString) {
    let auth = JSON.parse(authString) as Auth;

    // Find the user with the matching email
    let user = auth.users.find((c) => c.email === email);

    if (user && user.password === password) {
      // Store the user in localStorage if email and password match
      localStorage.setItem("user", JSON.stringify(user));
      console.log("login successful");

      // Redirect to the welcome page
      window.location.href = "/welcome";
    } else {
      alert("login failed");
    }
  }
};

export const logout = () => {
  // Remove user from localStorage
  localStorage.removeItem("user");

  // Redirect to the home page
  window.location.href = "/";
  console.log("Logout successful");
};

export const isLoggedIn = (): boolean => {
  const user = localStorage.getItem("user");
  if (user) return true;
  return false;
};

export const getUser = (): User | null => {
  let userString = localStorage.getItem("user");
  if (userString) {
    let user = JSON.parse(userString) as User;
    return user;
  }

  return null;
};
