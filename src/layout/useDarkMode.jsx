import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [darkmode, setDarkMode] = useState(() => localStorage.mode === "dark");
  const toggleDarkMode = () => {
    setDarkMode(!darkmode);
  };
  useEffect(() => {
    const wrapper = window.document.documentElement;
    const off = darkmode ? "light" : "dark";
    const on = darkmode ? "dark" : "light";
    wrapper.classList.remove(off);
    wrapper.classList.add(on);
    localStorage.setItem("mode", on);
  }, [darkmode]);
  return [darkmode, toggleDarkMode];
};
