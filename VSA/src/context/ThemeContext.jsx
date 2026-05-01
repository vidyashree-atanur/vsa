import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  // ✅ Load theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") === "dark";

    setDark(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme);
  }, []);

  // ✅ Toggle theme (test-safe + clean)
  const toggleTheme = () => {
    setDark((prev) => {
      const newTheme = !prev;

      document.documentElement.classList.toggle("dark", newTheme);
      localStorage.setItem("theme", newTheme ? "dark" : "light");

      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ✅ Safe hook (no extra file, same file only)
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
};