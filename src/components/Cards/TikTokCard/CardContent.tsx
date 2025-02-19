import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Column } from "@src/components/Containers";
import Text from "@src/components/Text";

interface CardOptionButtonProps {
  iconName: "heart" | "chatbubble-ellipses" | "arrow-redo";
  value: string | number;
  onPress?: () => void;
}

const CardOptionButton = ({
  iconName,
  value,
  onPress,
}: CardOptionButtonProps) => {
  return (
    <TouchableOpacity style={styles.cardOptionButton} onPress={onPress}>
      <Ionicons name={iconName} size={40} color="#fff" />

      <Text fontSize="xs" fontWeight="bold" color="#fff" numberOfLines={1}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};

const CardContent = () => {
  return (
    <Column alignItems="center" gap={16} style={styles.container}>
      {/* Right card options */}
      <Column gap={24} style={{ alignSelf: "flex-end" }}>
        {/* User image/avatar */}
        <Column
          backgroundColor="#fff"
          borderWidth={1}
          borderColor="#dddddd"
          style={styles.avatar}
        />

        {/* Likes */}
        <CardOptionButton iconName="heart" value={1234} />

        {/* Comments */}
        <CardOptionButton iconName="chatbubble-ellipses" value={200} />

        {/* Share button */}
        <CardOptionButton iconName="arrow-redo" value="Share" />
      </Column>

      <Column gap={16} style={{ width: "100%", height: 56 }}>
        <Text fontSize="sm" fontWeight="bold" color="#fff">
          @userhandle
        </Text>

        <Text fontSize="xs" fontWeight="500" color="#fff">
          #hashtag1 #hashtag2
        </Text>
      </Column>
    </Column>
  );
};

export default CardContent;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 24,
  },
  cardOptionButton: {
    alignItems: "center",
    gap: 4,
    maxWidth: 48,
  },
});
