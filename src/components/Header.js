import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";

export const Header = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Taskmate logo" />
        <span>Taskmate</span>
      </div>
      <div className="themeSelector">
        <span
          className={`light ${theme === "light" ? "activeTheme" : ""}`}
          onClick={() => setTheme("light")}
        ></span>
        <span
          className={`medium ${theme === "medium" ? "activeTheme" : ""}`}
          onClick={() => setTheme("medium")}
        ></span>
        <span
          className={`dark ${theme === "dark" ? "activeTheme" : ""}`}
          onClick={() => setTheme("dark")}
        ></span>
        <span
          className={`gradientOne ${
            theme === "gradientOne" ? "activeTheme" : ""
          }`}
          onClick={() => setTheme("gradientOne")}
        ></span>
        <span
          className={`gradientTwo ${
            theme === "gradientTwo" ? "activeTheme" : ""
          }`}
          onClick={() => setTheme("gradientTwo")}
        ></span>
        <span
          className={`gradientThree ${
            theme === "gradientThree" ? "activeTheme" : ""
          }`}
          onClick={() => setTheme("gradientThree")}
        ></span>
      </div>
    </header>
  );
};
