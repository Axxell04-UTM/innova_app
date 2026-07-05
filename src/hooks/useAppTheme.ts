import { AppTheme } from "@/theme/types";
import { useTheme } from "expo-router";

export function useAppTheme() {
  return useTheme() as AppTheme;
}
