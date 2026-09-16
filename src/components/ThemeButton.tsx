import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeButton() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("ekologiya-theme");
    const enabled = saved === "dark";
    document.documentElement.classList.toggle("dark", enabled);
    setDark(enabled);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("ekologiya-theme", next ? "dark" : "light");
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme} aria-label={dark ? "Kunduzgi rejim" : "Tungi rejim"} title={dark ? "Kunduzgi rejim" : "Tungi rejim"}>
      {dark ? <Sun /> : <Moon />}
    </Button>
  );
}