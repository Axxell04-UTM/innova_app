import { OneLineCard } from "@/components/OneLineCard";
import { useAppTheme } from "@/hooks/useAppTheme";
import { AppTheme } from "@/theme";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { ListCard } from "@/components/ListCard";
import { MainCard } from "@/components/MainCard";
import { ACTIVITY_TYPES, ActivityTypes, TierTypes } from "@/types";

interface TrainItemInterface {
  type: ActivityTypes;
  name: string;
  tier: TierTypes;
  duration: number;
  calories: number;
}

const trainingList: TrainItemInterface[] = [
  {
    type: "ciclismo",
    name: "CICLISMO DE MONTAÑA",
    tier: "avanzado",
    duration: 75,
    calories: 680,
  },
  {
    type: "natación",
    name: "NATACIÓN OLÍMPICA",
    tier: "intermedio",
    duration: 45,
    calories: 440,
  },
  {
    type: "fuerza",
    name: "FUERZA FUNCIONAL",
    tier: "principiante",
    duration: 40,
    calories: 320,
  },
  {
    type: "hiit",
    name: "HIIT EXPLOSIVO",
    tier: "avanzado",
    duration: 30,
    calories: 510,
  },
];

export default function Entrena() {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const [category, setCategory] = useState<"TODOS" | ActivityTypes>("TODOS");

  function selectCategory(text: string) {
    setCategory(text as "TODOS" | ActivityTypes);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.title_small}>PARA TI HOY</Text>
          <Text style={styles.title_large}>ENTRENAMIENTOS RECOMENDADOS</Text>
        </View>
        <ScrollView
          style={{
            display: "flex",
            flexDirection: "row",
            gap: theme.spacing.sm,
          }}
          horizontal
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: theme.spacing.sm,
            }}
          >
            {["TODOS", ...ACTIVITY_TYPES].map((c) => (
              <OneLineCard
                key={c}
                text={c}
                select={selectCategory}
                selected={category}
              />
            ))}
          </View>
        </ScrollView>
        <MainCard category={category} />
        <View style={{ gap: theme.spacing.md }}>
          {trainingList.map((t) => (
            <ListCard
              activityName={t.name}
              activityType={t.type}
              tier={t.tier}
              duration={t.duration}
              calories={t.calories}
              key={t.type + t.name + t.tier + t.duration}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const createStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: "#0c0c0f",
      display: "flex",
      flexDirection: "column",
      flex: 1,
      gap: theme.spacing.lg,
      // gap: 50,
    },
    section_container: {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing.sm,
    },
    title_small: {
      color: theme.colors.primary,
      fontSize: 12,
      fontWeight: "bold",
      fontFamily: "DMSans_600SemiBold",
    },
    title_large: {
      fontSize: 36,
      fontWeight: "heavy",
      color: theme.colors.text,
      fontFamily: "BarlowCondensed_900Black",
    },
    section_title: {
      fontFamily: "DMSans_600SemiBold",
      fontSize: 12,
      color: theme.colors.textSecondary,
    },
  });
