import { useAppTheme } from "@/hooks/useAppTheme";
import { AndroidSymbol, SymbolView } from "expo-symbols";
import { Text, View } from "react-native";

interface Props {
  name: string;
  icon: AndroidSymbol;
  value: string;
  unit: string;
  selected?: boolean;
}

export function MetricCard({ name, icon, value, unit, selected }: Props) {
  const theme = useAppTheme();
  return (
    <View
      style={{
        gap: theme.spacing.xs,
        backgroundColor: selected
          ? theme.colors.backgroundSelected
          : theme.colors.backgroundSecondary,
        borderRadius: theme.radius.lg,
        padding: theme.spacing.md,
        borderWidth: 1,
        borderColor: selected ? theme.colors.primary : theme.colors.border,
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: theme.spacing.xs,
          alignItems: "center",
        }}
      >
        <SymbolView
          name={{ android: icon }}
          tintColor={theme.colors.textSecondary}
          size={theme.size.sm}
        />
        <Text
          style={{
            color: theme.colors.textSecondary,
            fontFamily: "DMSans_600SemiBold",
            fontSize: theme.size.xs - 2,
          }}
        >
          {name.toUpperCase()}
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: theme.colors.text,
            fontFamily: "BarlowCondensed_900Black",
            fontSize: theme.size.xl2,
          }}
        >
          {value}{" "}
          <Text
            style={{
              color: theme.colors.textSecondary,
              fontFamily: "DMSans_600SemiBold",
              fontSize: theme.size.xs,
            }}
          >
            {unit.toLowerCase()}
          </Text>
        </Text>
      </View>
    </View>
  );
}
