import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";
import useRevenueCat from "../hooks/useRevenueCat";

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

type Props = {
  title: string;
  screen: any;
  color: string;
  requiresPro?: boolean;
  icon?: any;
  vertical?: boolean;
};

const ActionRow = ({
  title,
  screen,
  color,
  requiresPro,
  icon,
  vertical,
}: Props) => {
  const navigation = useNavigation<NavigationProp>();
  const { isProMember } = useRevenueCat();

  const lockedForProMembers = requiresPro && !isProMember;

  return (
    <TouchableOpacity
      onPress={() =>
        lockedForProMembers
          ? navigation.navigate("Paywall")
          : navigation.navigate(screen)
      }
      className={`flex m-2 flex-1 justify-center items-center py-6 rounded-lg space-x-2 ${
        vertical ? "flex-col" : "flex-row"
      }`}
      style={{ backgroundColor: lockedForProMembers ? "gray" : color }}
    >
      {lockedForProMembers && (
        <View className="absolute top-4 right-4 rotate-12 items-center">
          <Ionicons name="lock-closed" size={20} color="white" />
          <Text className="text-white font-extrabold">Pro</Text>
        </View>
      )}

      <Ionicons name={icon} size={30} color="white" />
      <Text className="text-white font-bold text-lg">{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionRow;
