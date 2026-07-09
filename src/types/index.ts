import { DarkCustomTheme } from "@/theme";

export const MOOD_TYPES = [
  "brutal",
  "fuerte",
  "bien",
  "regular",
  "duro",
] as const;

export type MoodTypes = (typeof MOOD_TYPES)[number];

export const ACTIVITY_TYPES = [
  "carrera",
  "ciclismo",
  "natación",
  "fuerza",
  "yoga",
  "hiit",
] as const;

export type ActivityTypes = (typeof ACTIVITY_TYPES)[number];

export const TIER_TYPES = ["principiante", "intermedio", "avanzado"] as const;

export type TierTypes = (typeof TIER_TYPES)[number];

export const colorType: Record<ActivityTypes, string> = {
  ciclismo: DarkCustomTheme.colors.blue,
  natación: DarkCustomTheme.colors.blue2,
  fuerza: DarkCustomTheme.colors.violet,
  hiit: DarkCustomTheme.colors.red,
  carrera: DarkCustomTheme.colors.primary as string,
  yoga: DarkCustomTheme.colors.green,
};

export const colorTier: Record<TierTypes, [string, string]> = {
  avanzado: [DarkCustomTheme.colors.red, DarkCustomTheme.colors.bgRed],
  intermedio: [
    DarkCustomTheme.colors.primary as string,
    DarkCustomTheme.colors.backgroundSelected,
  ],
  principiante: [DarkCustomTheme.colors.green, DarkCustomTheme.colors.bgGreen],
};
