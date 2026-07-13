import { AchievementCard } from "@/components/AchievementCard";
import { MetricCard } from "@/components/MetricCard";
import { useAppTheme } from "@/hooks/useAppTheme";
import { AppTheme } from "@/theme";
import { SymbolView } from "expo-symbols";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { LineChart, lineDataItem } from "react-native-gifted-charts";

export default function Resumen() {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  const [contLineChartWidth, setContLineChartWidth] = useState(0);

  const date = new Date();
  const weekday = date.toLocaleDateString("es-Ec", { weekday: "long" });
  const month = date.toLocaleDateString("es-Ec", { month: "short" });

  const data: lineDataItem[] = [
    { value: 5.8, label: "0" },
    { value: 5.4, label: "1" },
    { value: 5.2, label: "2" },
    { value: 5, label: "3" },
    { value: 5.3, label: "4" },
    { value: 5.1, label: "5" },
    { value: 4.9, label: "6" },
    { value: 5, label: "7" },
    { value: 5.2, label: "8" },
    { value: 4.8, label: "9" },
    { value: 4.6, label: "10" },
  ];
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* HEADER */}
        <View
          style={{
            backgroundColor: theme.colors.backgroundSelected,
            padding: theme.spacing.md,
            borderRadius: theme.radius.lg,
            gap: theme.spacing.sm,
          }}
        >
          {/* Contenedor Horizontal */}
          <View
            style={{
              flexDirection: "row",
              // alignItems: "center",
              // backgroundColor: "lime",
              // justifyContent: "space-between"
            }}
          >
            {/* Contenedeor Vertical */}
            <View
              style={{
                flex: 1,
                flexShrink: 1,
                gap: theme.spacing.sm,
              }}
            >
              {/* Titulo Pequeño */}
              <Text style={styles.title_small}>
                {weekday.toUpperCase()} · {date.getDate()}{" "}
                {month.toUpperCase().replace(".", "")} {date.getFullYear()} ·{" "}
                {date
                  .toLocaleTimeString("es-Ec", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                  .toUpperCase()}
              </Text>
              {/* Titulo Grande */}
              <Text style={styles.title_large}>RESUMEN DE ENTRENAMIENTO</Text>
            </View>
            {/* Logo */}
            <View
              style={{
                padding: theme.spacing.sm,
                backgroundColor: theme.colors.backgroundSelected,
                borderRadius: theme.radius.lg,
                alignSelf: "flex-start",
              }}
            >
              <Text>
                <SymbolView
                  name={{ android: "vital_signs" }}
                  tintColor={theme.colors.primary}
                  size={theme.size.xl3}
                />
              </Text>
            </View>
          </View>
          {/* Frase motivacional */}
          <View
            style={{
              padding: theme.spacing.sm,
              backgroundColor: theme.colors.border,
              borderRadius: theme.radius.md,
            }}
          >
            <Text
              style={{
                color: theme.colors.text,
                fontFamily: "DMSans_500Medium",
                fontSize: theme.size.xs - 2,
              }}
            >
              🔥 "El esfuerzo de hoy es el resultado de mañana."
            </Text>
          </View>
        </View>
        {/* Sección Metricas */}
        <View style={{ gap: theme.spacing.sm }}>
          <View style={{ flexDirection: "row", gap: theme.spacing.sm }}>
            <MetricCard
              name="distancia"
              icon="location_on"
              value="10.4"
              unit="km"
              selected
            />
            <MetricCard name="duración" icon="timer" value="52:18" unit="min" />
          </View>
          <View style={{ flexDirection: "row", gap: theme.spacing.sm }}>
            <MetricCard
              name="vel. media"
              icon="speed"
              value="11.9"
              unit="km/h"
            />
            <MetricCard
              name="calorías"
              icon="local_fire_department"
              value="618"
              unit="kcal"
            />
            <MetricCard
              name="fc media"
              icon="favorite"
              value="168"
              unit="bpm"
            />
          </View>
          {/* <View style={{ flexDirection: "row", gap: theme.spacing.sm }}>
            <MetricCard
              name="desnivel"
              icon="trending_up"
              value="+124"
              unit="m"
            />
            <MetricCard
              name="ritmo medio"
              icon="air"
              value="5:02"
              unit="min/km"
            />
            <MetricCard
              name="cadencia"
              icon="electric_bolt"
              value="178"
              unit="spm"
            />
          </View> */}
        </View>
        {/* Sección Gráfica */}
        <View
          style={{
            backgroundColor: theme.colors.backgroundSecondary,
            padding: theme.spacing.md,
            borderRadius: theme.radius.lg,
            overflow: "hidden",
            gap: theme.spacing.sm,
          }}
          onLayout={(e) => setContLineChartWidth(e.nativeEvent.layout.width)}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "BarlowCondensed_900Black",
                fontSize: theme.size.base,
                color: theme.colors.text,
              }}
            >
              RENDIMIENTO POR KILÓMETRO
            </Text>
            <View style={{ flexDirection: "row", gap: theme.spacing.xs }}>
              <TouchableOpacity
                style={{
                  paddingVertical: theme.spacing.xs,
                  paddingHorizontal: theme.spacing.sm,
                  backgroundColor: theme.colors.primary,
                  borderRadius: theme.radius.lg,
                }}
              >
                <Text
                  style={{
                    color: theme.colors.text,
                    fontFamily: "DMSans_600SemiBold",
                    fontSize: theme.size.xs - 2,
                  }}
                >
                  RITMO
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  paddingVertical: theme.spacing.xs,
                  paddingHorizontal: theme.spacing.sm,
                  backgroundColor: theme.colors.backgroundSecondary,
                  borderRadius: theme.radius.lg,
                }}
              >
                <Text
                  style={{
                    color: theme.colors.text,
                    fontFamily: "DMSans_600SemiBold",
                    fontSize: theme.size.xs - 2,
                  }}
                >
                  FC
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <LineChart
            data={data}
            initialSpacing={5}
            endSpacing={5}
            color={theme.colors.primary as string}
            dataPointsColor={theme.colors.text as string}
            hideDataPoints
            areaChart1
            yAxisTextStyle={{
              color: theme.colors.textSecondary as string,
              fontFamily: "DMSans_500Medium",
              fontSize: theme.size.xs - 2,
              marginLeft: -10,
            }}
            xAxisLabelTextStyle={{
              color: theme.colors.textSecondary as string,
              fontFamily: "DMSans_500Medium",
              fontSize: theme.size.xs - 2,
            }}
            thickness={2}
            width={contLineChartWidth - 40 - theme.spacing.md * 2}
            // hideRules
            rulesConfigArray={[
              { rulesColor: theme.colors.primary, dashGap: 5 },
              { rulesColor: theme.colors.textSecondary, dashGap: 5 },
              { rulesColor: theme.colors.textSecondary, dashGap: 5 },
            ]}
            // yAxisLabelTexts={["4.4", "5", "5.6", "6.2"]}
            yAxisThickness={0}
            xAxisThickness={0}
            noOfSections={3}
            yAxisOffset={4.4}
            maxValue={6.2 - 4.4}
            // stepValue={0.6}
            // spacing={23.5}
            spacing={(contLineChartWidth - 40 - theme.spacing.md * 2) / 10.5}
            showFractionalValues
            startFillColor1={theme.colors.backgroundSelected as string}
            endFillColor={theme.colors.backgroundSecondary}
            startOpacity={0.5}
            endOpacity={0.1}
            curved
            // isAnimated
            // animationDuration={1800}
            // width={50}
          />
        </View>
        {/* Sección Logros */}
        <View style={{ gap: theme.spacing.sm }}>
          {/* Titulo de sección */}
          <Text
            style={{
              color: theme.colors.text,
              fontFamily: "BarlowCondensed_900Black",
              fontSize: theme.size.base,
            }}
          >
            LOGROS DESBLOQUEADOS
          </Text>
          {/* Lista de logros */}
          <View style={{ gap: theme.spacing.sm }}>
            <AchievementCard
              title="Récord personal"
              subtitle="10k más rápido"
              color="yellow"
              icon="trophy"
            />
            <AchievementCard
              title="Racha activa"
              subtitle="7 días seguidos"
              color="violet"
              icon="electric_bolt"
            />
            <AchievementCard
              title="100 km totales"
              subtitle="Este mes"
              color="green"
              icon="workspace_premium"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const createStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: theme.colors.background,
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
