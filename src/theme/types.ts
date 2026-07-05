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
  };

  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
  };

  radius: {
    sm: number;
    md: number;
    lg: number;
  };
}
