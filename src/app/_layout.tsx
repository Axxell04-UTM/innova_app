import { ThemeProvider } from "expo-router";
import { NativeTabs } from "expo-router/unstable-native-tabs";
import { StatusBar, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useFonts } from "expo-font";

import {
  BarlowCondensed_400Regular,
  BarlowCondensed_600SemiBold,
  BarlowCondensed_700Bold,
  BarlowCondensed_800ExtraBold,
  BarlowCondensed_900Black,
} from "@expo-google-fonts/barlow-condensed";

import { DarkCustomTheme } from "@/theme";
import {
  DMSans_300Light,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_600SemiBold,
} from "@expo-google-fonts/dm-sans";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const theme = colorScheme === "dark" ? DarkCustomTheme : DarkCustomTheme;

  const [loaded] = useFonts({
    BarlowCondensed_400Regular,
    BarlowCondensed_600SemiBold,
    BarlowCondensed_700Bold,
    BarlowCondensed_800ExtraBold,
    BarlowCondensed_900Black,

    DMSans_300Light,
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_600SemiBold,
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <NativeTabs
          tintColor={theme.colors.primary}
          indicatorColor={"transparent"}
          backgroundColor={theme.colors.backgroundSecondary}
        >
          <NativeTabs.Trigger name="feedback">
            <NativeTabs.Trigger.Label>FeedBack</NativeTabs.Trigger.Label>
            <NativeTabs.Trigger.Icon md="favorite" />
          </NativeTabs.Trigger>
          <NativeTabs.Trigger name="entrena">
            <NativeTabs.Trigger.Label>Entrena</NativeTabs.Trigger.Label>
            <NativeTabs.Trigger.Icon md="local_fire_department" />
          </NativeTabs.Trigger>
          <NativeTabs.Trigger name="registro">
            <NativeTabs.Trigger.Label>Registro</NativeTabs.Trigger.Label>
            <NativeTabs.Trigger.Icon md="trophy" />
          </NativeTabs.Trigger>
        </NativeTabs>
        <StatusBar
          backgroundColor={theme.colors.background}
          barStyle={"default"}
        />
      </SafeAreaView>
    </ThemeProvider>
  );
}
