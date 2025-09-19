"use client"

import { ClerkProvider as OriginalClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";
import { dark } from "@clerk/themes";
import { useIsDarkMode } from "@/hooks/useIsDarkMode";

export function ClerkProvider({ children }: { children: ReactNode }) {
    const isDarkMode = useIsDarkMode();

    // Wait until we know the system preference
    if (isDarkMode === null) return null;

    return (
        <OriginalClerkProvider
            appearance={{ baseTheme: isDarkMode ? dark : undefined }}
        >
            {children}
        </OriginalClerkProvider>
    );
}
