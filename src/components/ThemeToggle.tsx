"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="px-4 py-2  rounded-lg transition hover:cursor-pointer">
            {theme === "dark" ? <FaSun size={20} className="text-primary" /> : <FaMoon className="" />}
        </button>
    );
}
