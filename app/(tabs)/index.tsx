import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <ScrollView
        className="w-full flex-1 px-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="mx-auto mb-4 h-16 w-20" />
        <Text className="mx-auto text-2xl text-black">
          Welcome to Safe Blogger
        </Text>
        <Text className="mx-auto mt-2 text-base text-gray-600">
          A safe blogging platform for everyone
        </Text>

        <SearchBar
          onPress={() => {
            router.push("/search");
          }}
          placeholder="Search Blogs"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
