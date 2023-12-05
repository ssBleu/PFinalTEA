import { useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

const DarkModeBtn = () => {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        console.log(newTheme)

        // Cambiar el atributo data-theme en la etiqueta HTML 
        document.documentElement.setAttribute("data-theme", newTheme);

    };
    return (
        <>
            <button className="btn-theme"
                onClick={toggleTheme}>
                {theme === "light" ?
                    <BiSun style={{ width: "30px", height: "30px" }} /> :
                    <BiMoon style={{ width: "30px", height: "30px" }} />}</button>
        </>
    );
}

export default DarkModeBtn