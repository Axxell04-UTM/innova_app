import { useAppTheme } from "@/hooks/useAppTheme";
import { MoodTypes } from "@/types";
import { Text, TouchableOpacity } from "react-native";

interface Props {
  emoji: string;
  mood: string;
  currentMood: string;
  updateCurrentMood: (mood: MoodTypes) => void;
}

export function MoodCard({
  emoji,
  mood,
  currentMood,
  updateCurrentMood,
}: Props) {
  const theme = useAppTheme();

  const isSelected = mood.toLowerCase() === currentMood;

  return (
    <TouchableOpacity
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: theme.spacing.sm,
        borderWidth: 1,
        borderColor: isSelected ? theme.colors.primary : theme.colors.border,
        padding: theme.spacing.md,
        backgroundColor: isSelected
          ? theme.colors.backgroundSelected
          : "transparent",
        borderRadius: theme.radius.lg,
        minWidth: 80,
        width: 100,
      }}
      onPress={() => updateCurrentMood(mood.toLocaleLowerCase() as MoodTypes)}
    >
      <Text style={{ fontSize: 24 }}>{emoji}</Text>
      <Text
        style={{
          color: theme.colors.textSecondary,
          fontSize: 10,
          fontFamily: "DMSans_600SemiBold",
        }}
      >
        {mood}
      </Text>
    </TouchableOpacity>
  );
}
