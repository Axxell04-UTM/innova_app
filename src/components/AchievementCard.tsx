import { useAppTheme } from "@/hooks/useAppTheme";
import { AndroidSymbol, SymbolView } from "expo-symbols";
import { useMemo } from "react";
import { ColorValue, Text, View } from "react-native";

interface Props {
  color: "yellow" | "violet" | "green";
  icon: AndroidSymbol;
  title: string;
  subtitle: string;
}

export function AchievementCard({ color, icon, title, subtitle }: Props) {
  const theme = useAppTheme();

  interface Colors {
    border: string | ColorValue;
    Icon: string | ColorValue;
    bg: string | ColorValue;
    bgIcon: string | ColorValue;
  }

  const colors: Colors = useMemo(() => {
    if (color === "yellow") {
      return {
        border: theme.colors.bgBorderYellow,
        Icon: theme.colors.yellow,
        bg: theme.colors.bgYellow,
        bgIcon: theme.colors.bgYellow2,
      };
    }
    if (color === "violet") {
      return {
        border: theme.colors.bgBorderViolet,
        Icon: theme.colors.violet,
        bg: theme.colors.bgViolet,
        bgIcon: theme.colors.bgViolet2,
      };
    }
    return {
      border: theme.colors.bgBorderGreen,
      Icon: theme.colors.green,
      bg: theme.colors.bgGreen,
      bgIcon: theme.colors.bgGreen2,
    };
  }, [color, theme]);

  return (
    <View
      style={{
        flexDirection: "row",
        gap: theme.spacing.md,
        padding: theme.spacing.md,
        backgroundColor: colors.bg,
        borderColor: colors.border,
        borderRadius: theme.radius.lg,
        alignItems: "center",
        borderWidth: 1,
      }}
    >
      {/* Icono */}
      <View
        style={{
          padding: theme.spacing.sm,
          borderRadius: theme.radius.lg,
          backgroundColor: colors.bgIcon,
        }}
      >
        <Text>
          <SymbolView
            name={{ android: icon }}
            tintColor={colors.Icon}
            size={theme.size.xl3}
          />
        </Text>
      </View>
      {/* Contenedor Vertical Texto */}
      <View style={{ gap: theme.spacing.xs }}>
        <Text
          style={{
            fontFamily: "DMSans_600SemiBold",
            fontSize: theme.size.sm,
            color: theme.colors.text,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontFamily: "DMSans_600SemiBold",
            fontSize: theme.size.xs,
            color: theme.colors.textSecondary,
          }}
        >
          {subtitle}
        </Text>
      </View>
      <Text style={{ marginLeft: "auto" }}>
        <SymbolView
          name={{ android: "check_circle" }}
          tintColor={colors.Icon}
        />
      </Text>
    </View>
  );
}
