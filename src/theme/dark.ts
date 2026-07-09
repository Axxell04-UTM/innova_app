// theme/dark.ts
import { DarkTheme } from "expo-router";
import { AppTheme } from "./types";

export const DarkCustomTheme: AppTheme = {
  ...DarkTheme,

  colors: {
    ...DarkTheme.colors,

    primary: "#fc4c02",
    background: "#0c0c0f",
    backgroundSecondary: "#1c1c26",
    backgroundSelected: "#fc4c021f",
    placeholderColor: "#3a3a50",
    border: "#ffffff12",
    text: "#f0f0f4",
    textSecondary: "#7878a0",
    success: "#16A34A",
    warning: "#F59E0B",
    blue: "#2563eb",
    blue2: "#0891b2",
    red: "#dc2626",
    violet: "#7c3aed",
    green: "#22c55e",
    bgRed: "#dc262622",
    bgGreen: "#22c55e22",
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
  },
  size: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    xl2: 24,
    xl3: 30,
    xl4: 36,
    xl5: 48,
  },

  radius: {
    sm: 6,
    md: 12,
    lg: 18,
  },
};
