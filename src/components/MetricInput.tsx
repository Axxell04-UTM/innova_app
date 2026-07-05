import { useAppTheme } from "@/hooks/useAppTheme";
import { Host, Icon } from "@expo/ui";
import { Text, TextInput, View } from "react-native";

interface Props {
  icon: number;
  name: string;
  unit: string;
}

export function MetricInput({ icon, name, unit }: Props) {
  const theme = useAppTheme();
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: theme.colors.backgroundSecondary,
        padding: theme.spacing.md,
        borderRadius: theme.radius.lg,
        borderWidth: 1,
        borderColor: theme.colors.border,
        alignItems: "center",
        gap: theme.spacing.sm,
      }}
    >
      <Host matchContents>
        <Icon name={icon} color={theme.colors.primary} />
      </Host>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: theme.spacing.xs,
          flex: 1,
        }}
      >
        <Text
          style={{
            color: theme.colors.textSecondary,
            fontFamily: "DMSans_600SemiBold",
            fontSize: 10,
          }}
        >
          {name}
        </Text>
        <TextInput
          style={{
            fontFamily: "DMSans_600SemiBold",
            color: theme.colors.text,
            padding: -1,
          }}
          placeholder="0.0"
          placeholderTextColor={theme.colors.placeholderColor}
          inputMode="numeric"
        />
      </View>
      <Text
        style={{
          color: theme.colors.textSecondary,
          fontFamily: "DMSans_400Regular",
          fontSize: 14,
        }}
      >
        {unit}
      </Text>
    </View>
  );
}
