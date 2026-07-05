import { useAppTheme } from "@/hooks/useAppTheme";
import { ActivityTypes } from "@/types";
import AccessibilityNew from "@expo/material-symbols/accessibility_new.xml";
import DirectionsBike from "@expo/material-symbols/directions_bike.xml";
import ElectricBolt from "@expo/material-symbols/electric_bolt.xml";
import Exercise from "@expo/material-symbols/exercise.xml";
import Pool from "@expo/material-symbols/pool.xml";
import VitalSigns from "@expo/material-symbols/vital_signs.xml";
import { Host, Icon } from "@expo/ui";
import { Text, TouchableOpacity } from "react-native";

interface Props {
  activity: "race" | "cycling" | "swimming" | "force" | "yoga" | "hit";
  currentActivity: ActivityTypes;
  updateCurrentActivity: (activity: ActivityTypes) => void;
}

export function ActivityCard({
  activity,
  currentActivity,
  updateCurrentActivity,
}: Props) {
  const theme = useAppTheme();

  const isSelected = activity === currentActivity;

  const icons = {
    race: VitalSigns,
    cycling: DirectionsBike,
    swimming: Pool,
    force: Exercise,
    yoga: AccessibilityNew,
    hit: ElectricBolt,
  } as const;

  return (
    <TouchableOpacity
      style={{
        backgroundColor: isSelected
          ? theme.colors.backgroundSelected
          : theme.colors.backgroundSecondary,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: theme.spacing.sm,
        borderWidth: 1,
        borderColor: isSelected ? theme.colors.primary : theme.colors.border,
        padding: theme.spacing.md,
        borderRadius: theme.radius.lg,
        minWidth: 80,
        width: 100,
        flexGrow: 1,
      }}
      onPress={() => updateCurrentActivity(activity)}
    >
      <Host matchContents>
        <Icon name={icons[activity]} color={theme.colors.textSecondary} />
      </Host>

      <Text
        style={{
          color: theme.colors.textSecondary,
          fontSize: 10,
          fontFamily: "DMSans_600SemiBold",
        }}
      >
        {activity[0].toUpperCase() + activity.slice(1)}
      </Text>
    </TouchableOpacity>
  );
}
