import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Demo"
>;

const DemoScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView className="bg-[#f49324] flex-1">
      <TouchableOpacity
        className="flex-row items-center p-5"
        onPress={navigation.goBack}
      >
        <Ionicons name="arrow-back" size={50} color="white" />
        <Text className="text-white">Go Back</Text>
      </TouchableOpacity>

      <View className="flex-1 items-center justify-center px-10">
        <Text className="text-white text-2xl font-extrabold">Hooray!</Text>
        <Text className="text-white text-2xl font-extrabold mb-20">
          You have access to this feature
        </Text>
        <Ionicons name="build-outline" size={200} color={"white"} />
        <View className="-mt-16 -ml-8">
          <Ionicons name="checkmark-circle-sharp" size={60} color={"#96f550"} />
        </View>
        <Text className="text-white mt-10 flex-1 font-bold text-center">
          Feature is coming soon. Please check back later =D
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default DemoScreen;
