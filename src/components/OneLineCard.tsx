import { useAppTheme } from "@/hooks/useAppTheme";
import { useMemo } from "react";
import { Text, TouchableOpacity } from "react-native";

interface Props {
  text: string;
  selected: string;
  select: (text: string) => void;
}

export function OneLineCard({ text, select, selected }: Props) {
  const theme = useAppTheme();

  const isSelected = useMemo(() => selected === text, [selected]);

  return (
    <TouchableOpacity
      style={{
        backgroundColor: isSelected
          ? theme.colors.primary
          : theme.colors.backgroundSecondary,
        borderRadius: theme.radius.lg,
        paddingVertical: theme.spacing.sm,
        paddingHorizontal: theme.spacing.lg,
        borderWidth: 1,
        borderColor: theme.colors.border,
      }}
      onPress={() => select(text)}
    >
      <Text
        style={{
          fontFamily: "DMSans_600SemiBold",
          fontSize: theme.size.xs,
          color: isSelected ? theme.colors.text : theme.colors.textSecondary,
        }}
      >
        {text.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
}
