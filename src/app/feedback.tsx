import { ActivityCard } from "@/components/ActivityCard";
import { MetricInput } from "@/components/MetricInput";
import { MoodCard } from "@/components/MoodCard";
import { useAppTheme } from "@/hooks/useAppTheme";
import { AppTheme } from "@/theme";
import { ActivityTypes, MoodTypes } from "@/types";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// ICONS
import Favorite from "@expo/material-symbols/favorite.xml";
import Fire from "@expo/material-symbols/local_fire_department.xml";
import Location from "@expo/material-symbols/location_on.xml";
import Speed from "@expo/material-symbols/speed.xml";
import Timer from "@expo/material-symbols/timer.xml";

import { Host, Icon } from "@expo/ui";
import { Slider } from "@expo/ui/community/slider";

export default function FeedBack() {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  const date = new Date();
  const weekday = date.toLocaleDateString("es-Ec", { weekday: "long" });
  const month = date.toLocaleDateString("es-Ec", { month: "short" });

  const [currentMood, setCurrentMood] = useState<MoodTypes | "">("");
  const [currentActivity, setCurrentActivity] = useState<ActivityTypes | "">(
    "",
  );

  const [effort, setEffort] = useState(1);

  // Keyboard
  const [keyboardVerticalOffset, setKeyboardVerticalOffset] = useState(0);

  function updateCurrentMood(mood: MoodTypes) {
    setCurrentMood(mood);
  }

  function updateCurrentActivity(activity: ActivityTypes) {
    setCurrentActivity(activity);
  }

  useEffect(() => {
    // console.log("Creando KeyboardListeners");
    const showSub = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVerticalOffset(40);
      // console.log("Teclado Arriba");
    });
    const hideSub = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVerticalOffset(0);
      // console.log("Teclado Abajo");
    });
    return () => {
      // console.log("Limpiando KeyboardListeners");
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.date}>
              {weekday.toUpperCase()}, {date.getDate()}{" "}
              {month.toUpperCase().replace(".", "")} {date.getFullYear()}
            </Text>
            <Text style={styles.question}>¿CÓMO FUE TU ENTRENAMIENTO?</Text>
          </View>
          <View style={[styles.section_container]}>
            <Text style={styles.section_title}>ESTÁDO DE ÁNIMO</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: theme.spacing.sm,
              }}
            >
              <MoodCard
                currentMood={currentMood}
                updateCurrentMood={updateCurrentMood}
                emoji="😤"
                mood="BRUTAL"
              />
              <MoodCard
                currentMood={currentMood}
                updateCurrentMood={updateCurrentMood}
                emoji="💪"
                mood="FUERTE"
              />
              <MoodCard
                currentMood={currentMood}
                updateCurrentMood={updateCurrentMood}
                emoji="😊"
                mood="BIEN"
              />
              <MoodCard
                currentMood={currentMood}
                updateCurrentMood={updateCurrentMood}
                emoji="😐"
                mood="REGULAR"
              />
              <MoodCard
                currentMood={currentMood}
                updateCurrentMood={updateCurrentMood}
                emoji="😓"
                mood="DURO"
              />
            </View>
          </View>
          <View style={[styles.section_container]}>
            <Text style={styles.section_title}>TIPO DE ACTIVIDAD</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: theme.spacing.sm,
              }}
            >
              <ActivityCard
                currentActivity={currentActivity}
                updateCurrentActivity={updateCurrentActivity}
                activity="carrera"
              />
              <ActivityCard
                currentActivity={currentActivity}
                updateCurrentActivity={updateCurrentActivity}
                activity="ciclismo"
              />
              <ActivityCard
                currentActivity={currentActivity}
                updateCurrentActivity={updateCurrentActivity}
                activity="natación"
              />
              <ActivityCard
                currentActivity={currentActivity}
                updateCurrentActivity={updateCurrentActivity}
                activity="fuerza"
              />
              <ActivityCard
                currentActivity={currentActivity}
                updateCurrentActivity={updateCurrentActivity}
                activity="yoga"
              />
              <ActivityCard
                currentActivity={currentActivity}
                updateCurrentActivity={updateCurrentActivity}
                activity="hiit"
              />
            </View>
          </View>
          <View style={[styles.section_container]}>
            <Text style={styles.section_title}>MÉTRICAS</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                gap: theme.spacing.sm,
              }}
            >
              <MetricInput icon={Location} name="DISTANCIA" unit="km" />
              <MetricInput icon={Speed} name="VELOCIDAD PROMEDIO" unit="km/h" />
              <MetricInput icon={Timer} name="DURACIÓN" unit="min" />
              <MetricInput icon={Favorite} name="FREC. CARDIACA" unit="bpm" />
            </View>
          </View>
          <View style={[styles.section_container]}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: theme.spacing.md,
                alignItems: "center",
              }}
            >
              <Text style={styles.section_title}>ESFUERZA PERCIBIDO</Text>
              <Text
                style={{
                  marginLeft: "auto",
                  fontFamily: "BarlowCondensed_900Black",
                  fontSize: 20,
                  color: theme.colors.primary,
                }}
              >
                {effort}/10
              </Text>
            </View>
            <View style={[styles.section_container]}>
              <Slider
                value={effort}
                onValueChange={(v) => setEffort(Math.round(v))}
                minimumValue={1}
                maximumValue={10}
                step={1}
                thumbTintColor={theme.colors.primary}
                minimumTrackTintColor={theme.colors.primary}
                maximumTrackTintColor={theme.colors.backgroundSecondary}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {Array.from({ length: 10 }, (_, i) => (
                  <Text
                    style={{
                      color:
                        i + 1 <= effort
                          ? theme.colors.primary
                          : theme.colors.placeholderColor,
                      fontFamily: "DMSans_400Regular",
                      fontSize: 10,
                    }}
                    key={i + 1}
                  >
                    {i + 1}
                  </Text>
                ))}
              </View>
            </View>
          </View>
          <View style={[styles.section_container]}>
            <Text style={styles.section_title}>NOTAS</Text>
            <TextInput
              style={{
                backgroundColor: theme.colors.backgroundSecondary,
                fontFamily: "DMSans_600SemiBold",
                color: theme.colors.text,
                borderRadius: theme.radius.lg,
                padding: theme.spacing.md,
                // height: 100,
              }}
              placeholder="¿Algo especial que quieras recordar?"
              placeholderTextColor={theme.colors.placeholderColor}
              multiline
              numberOfLines={4}
            />
          </View>
          <TouchableOpacity>
            <LinearGradient
              colors={[theme.colors.primary, "#e63900"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                padding: theme.radius.lg,
                flex: 1,
                borderRadius: theme.radius.lg,
                display: "flex",
                flexDirection: "row",
                gap: theme.spacing.md,
                // backgroundColor: theme.colors.primary,
                justifyContent: "center",
                // padding: theme.spacing.md,
              }}
            >
              <Host matchContents>
                <Icon name={Fire} color={theme.colors.text} />
              </Host>
              <Text
                style={{
                  color: theme.colors.text,
                  fontFamily: "BarlowCondensed_900Black",
                  fontSize: 18,
                }}
              >
                GUARDAR ENTRENAMIENTO
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
    date: {
      color: theme.colors.primary,
      fontSize: 12,
      fontWeight: "bold",
      fontFamily: "DMSans_600SemiBold",
    },
    question: {
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
