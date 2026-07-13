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
    violet2: "#a855f7",
    yellow: "#f59e0b",
    green: "#22c55e",
    bgRed: "#dc262622",
    bgGreen: "#22c55e22",
    bgGreen2: "#22c55e1f",
    bgViolet: "#a855f71f",
    bgViolet2: "#a855f722",
    bgYellow: "#f59e0b1f",
    bgYellow2: "#f59e0b22",
    bgBorderYellow: "#f59e0b33",
    bgBorderViolet: "#a855f733",
    bgBorderGreen: "#22c55e33",
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
