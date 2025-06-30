import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface SearchBarProps {
  onPress: () => void;
  placeholder?: string;
}
export default function SearchBar({
  placeholder = "Search blogs",
  onPress,
}: SearchBarProps) {
  return (
    <View className="m-2 max-h-10 flex-1 items-center justify-center">
      <Image source={icons.search} className="absolute left-4 size-5" />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        className="w-80 h-10 flex-1 rounded-full border border-gray-300 bg-white px-6 text-base text-black"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
      />
    </View>
  );
}
