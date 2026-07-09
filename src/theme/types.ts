// theme/types.ts
import { Theme } from "expo-router/build/react-navigation";

export interface AppTheme extends Theme {
  colors: Theme["colors"] & {
    textSecondary: string;
    backgroundSecondary: string;
    backgroundSelected: string;
    placeholderColor: string;
    success: string;
    warning: string;
    blue: string;
    blue2: string;
    red: string;
    violet: string;
    green: string;
    bgRed: string;
    bgGreen: string;
  };

  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
  };

  size: {
    xs: number;
    sm: number;
    base: number;
    lg: number;
    xl: number;
    xl2: number;
    xl3: number;
    xl4: number;
    xl5: number;
  };

  radius: {
    sm: number;
    md: number;
    lg: number;
  };
}
