"use client";

import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { ReactNode } from "react";
import { theme } from "@/styles/theme";

export function ThemeProvider({ children }: { children: ReactNode }) {
    return (
        <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    );
}
