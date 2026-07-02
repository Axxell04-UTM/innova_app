import { NativeTabs } from "expo-router/unstable-native-tabs";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NativeTabs tintColor="#fc4c02" indicatorColor={"transparent"}>
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
      <StatusBar />
    </SafeAreaView>
  );
}
