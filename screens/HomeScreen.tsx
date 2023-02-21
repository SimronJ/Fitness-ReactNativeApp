import {
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import ActionRow from "../Components/ActionRow";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";
import useRevenueCat from "../hooks/useRevenueCat";

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { currentOffering, customerInfo, isProMember } = useRevenueCat();
  console.log("DEBUG", currentOffering);

  return (
    <SafeAreaView className="flex-1 bg-gray-100 relative">
      <ScrollView>
        {/* Pro/Upgrade Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Paywall")}
          className="absolute z-50 top-0 right-3 items-center"
        >
          <Ionicons name="person-circle" size={30} color="#f49324" />
          <Text className="text-center text-[#f49324]">
            {isProMember ? "PRO" : "UPGRADE"}
          </Text>
        </TouchableOpacity>

        {/* Image */}
        <Image
          source={{
            uri: "https://i.postimg.cc/0xBw6KRF/Pngtree-fitness-gym-logo-png-7964069.png",
          }}
          className="w-auto h-64"
        />

        <View className="mx-5">
          {/* ActionRow */}
          <View className="flex-row justify-between space-x-2">
            <ActionRow
              title="Track Workout"
              screen="Demo"
              color="#f49324"
              icon="fitness"
              vertical
            />

            <ActionRow
              title="Browse Workouts"
              screen="Demo"
              color="#1982c4"
              icon="library"
              vertical
            />
          </View>

          <ActionRow
            title="Connect with Friends"
            screen="Demo"
            color="#f44174"
            icon="share-social"
          />

          <ActionRow
            title="Add an Exercise"
            screen="Demo"
            color="#8ac926"
            icon="add-circle"
            requiresPro
          />

          <ActionRow
            title="Create a Routine"
            screen="Demo"
            color="#c03221"
            icon="md-time"
            requiresPro
          />

          <ActionRow
            title="Join Challenges"
            screen="Demo"
            color="#23967f"
            icon="trophy"
            requiresPro
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
