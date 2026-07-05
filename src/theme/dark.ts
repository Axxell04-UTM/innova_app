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
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
  },

  radius: {
    sm: 6,
    md: 12,
    lg: 18,
  },
};
