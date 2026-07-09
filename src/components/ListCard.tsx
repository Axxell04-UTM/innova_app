import { useAppTheme } from "@/hooks/useAppTheme";
import { ActivityTypes, colorTier, colorType, TierTypes } from "@/types";
import { SymbolView } from "expo-symbols";
import { Text, TouchableOpacity, View } from "react-native";

// type ActivityType = "ciclismo" | "natación" | "fuerza" | "hiit";
// type Tier = "avanzado" | "intermedio" | "principiante";

interface Props {
  tier: TierTypes;
  activityType: ActivityTypes;
  activityName: string;
  duration: number;
  calories: number;
}

export function ListCard({
  tier,
  activityName,
  activityType,
  duration,
  calories,
}: Props) {
  const theme = useAppTheme();

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: theme.colors.backgroundSecondary,
        borderRadius: theme.radius.lg,
        borderWidth: 1,
        borderColor: theme.colors.border,
        overflow: "hidden",
      }}
    >
      {/* IMAGEN */}
      <View
        style={{
          width: 90,
          backgroundColor: colorType[activityType],
          opacity: 0.6,
        }}
      ></View>
      {/* CONTENEDOR HORIZONTAL */}
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          gap: theme.spacing.md,
          justifyContent: "space-between",
          alignItems: "center",
          padding: theme.spacing.md,
        }}
      >
        {/* CONTENIDO CENTRAL TEXTO */}
        <View
          style={{
            gap: theme.spacing.xs,
          }}
        >
          {/* CONTENEDOR HORIZONTAL */}
          <View
            style={{
              flexDirection: "row",
              gap: theme.spacing.sm,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "DMSans_600SemiBold",
                fontSize: theme.size.xs - 2,
                color: colorType[activityType],
              }}
            >
              {activityType.toUpperCase()}
            </Text>
            <Text
              style={{
                fontFamily: "DMSans_600SemiBold",
                fontSize: theme.size.xs - 2,
                padding: theme.spacing.xs,
                borderRadius: theme.radius.lg,
                color: colorTier[tier][0],
                backgroundColor: colorTier[tier][1],
              }}
            >
              {tier[0].toUpperCase() + tier.slice(1)}
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "BarlowCondensed_900Black",
              fontSize: theme.size.lg,
              color: theme.colors.text,
            }}
          >
            {activityName}
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: theme.spacing.sm,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: theme.spacing.xs,
              }}
            >
              <Text>
                <SymbolView
                  name={{ android: "schedule" }}
                  tintColor={theme.colors.textSecondary}
                  size={theme.size.xs + 3}
                />
              </Text>
              <Text
                style={{
                  color: theme.colors.textSecondary,
                  fontFamily: "DMSans_600SemiBold",
                  fontSize: theme.size.xs,
                }}
              >
                {duration} min
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: theme.spacing.xs,
              }}
            >
              <Text>
                <SymbolView
                  name={{ android: "local_fire_department" }}
                  tintColor={theme.colors.textSecondary}
                  size={theme.size.xs + 5}
                />
              </Text>
              <Text
                style={{
                  color: theme.colors.textSecondary,
                  fontFamily: "DMSans_600SemiBold",
                  fontSize: theme.size.xs,
                }}
              >
                {calories} kcal
              </Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: theme.colors.border,
              borderRadius: 99999,
              padding: theme.spacing.sm,
            }}
          >
            <Text>
              <SymbolView
                name={{ android: "star" }}
                tintColor={theme.colors.textSecondary}
                size={theme.size.xl + 2}
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
