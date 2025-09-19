// import { useEffect, useState } from "react"

// export function useIsDarkMode() {
//     const [isDarkMode, setIsDarkMode] = useState(() => {
//         if (typeof window === "undefined") return false

//         return window.matchMedia("(prefers-color-scheme: dark)").matches
//     })

//     useEffect(() => {
//         const controller = new AbortController()
//         window.matchMedia("(prefers-color-scheme: dark)").addEventListener(
//             "change",
//             e => {
//                 setIsDarkMode(e.matches)
//             },
//             { signal: controller.signal }
//         )

//         return () => {
//             controller.abort()
//         }
//     }, [])

//     return isDarkMode
// }

import { useEffect, useState } from "react";

export function useIsDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const mql = window.matchMedia("(prefers-color-scheme: dark)");
        setIsDarkMode(mql.matches);

        const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
        mql.addEventListener("change", handler);

        return () => mql.removeEventListener("change", handler);
    }, []);

    return isDarkMode;
}
