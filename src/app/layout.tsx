"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import { MeasurementProvider } from "@/context/MeasurementContext";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider>
                    <MeasurementProvider>{children}</MeasurementProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
