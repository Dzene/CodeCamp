import { FC, useState } from "react";

const CheckboxComponent : FC = () => {
    const [isChecked, setIsChecked] = useState(false)

    const handleChecked = () => {
        setIsChecked(!isChecked);
    }

    return(
    <>
        <input
            type="checkbox"
            checked={isChecked}
            onChange={handleChecked}
        />
        {isChecked && <p>Checked</p>}
        {!isChecked && <p>Not Checked</p>}
    </>
    );
}
export default CheckboxComponent;