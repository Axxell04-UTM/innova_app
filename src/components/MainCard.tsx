import { useAppTheme } from "@/hooks/useAppTheme";
import { ActivityTypes, colorType } from "@/types";
import { SymbolView } from "expo-symbols";
import { useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface Props {
  category: "TODOS" | ActivityTypes;
}

export function MainCard({ category }: Props) {
  const theme = useAppTheme();

  category = useMemo(
    () => (category === "TODOS" ? "carrera" : category),
    [category],
  );

  return (
    <View
      style={{
        height: 240,
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: theme.colors.backgroundSecondary,
        borderRadius: theme.radius.lg,
        padding: theme.spacing.md,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            paddingVertical: theme.spacing.xs,
            paddingHorizontal: theme.spacing.md,
            backgroundColor: colorType[category],
            borderRadius: theme.radius.lg,
            color: theme.colors.text,
            fontFamily: "DMSans_500Medium",
            fontSize: 11,
            alignSelf: "flex-start",
          }}
        >
          {category.toUpperCase()}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: theme.colors.border,
            borderRadius: 99999,
            padding: theme.spacing.sm,
          }}
        >
          <Text>
            <SymbolView
              name={{ android: "star" }}
              tintColor={theme.colors.text}
              size={theme.size.xl + 2}
            />
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            gap: theme.spacing.xs,
            // flex: 1,
          }}
        >
          <Text
            style={{
              color: theme.colors.text,
              fontFamily: "BarlowCondensed_900Black",
              fontSize: theme.size.xl2,
            }}
          >
            RESISTENCIA 10K
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
                55 min
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
                520 kcal
              </Text>
            </View>
            <Text
              style={{
                fontFamily: "DMSans_600SemiBold",
                fontSize: theme.size.xs,
                color: theme.colors.primary,
                backgroundColor: theme.colors.backgroundSelected,
                padding: theme.spacing.xs - 2,
                paddingHorizontal: theme.spacing.sm,
                borderRadius: theme.radius.lg,
                alignSelf: "center",
              }}
            >
              Intermedio
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: theme.colors.primary,
              padding: theme.spacing.sm,
              borderRadius: 999,
            }}
          >
            <Text>
              <SymbolView
                name={{ android: "keyboard_arrow_right" }}
                tintColor={theme.colors.text}
                size={theme.size.xl2}
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
