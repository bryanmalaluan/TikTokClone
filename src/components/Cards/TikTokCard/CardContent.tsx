import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, TouchableOpacity } from "react-native";

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

interface CardContentProps {
  isPaused: boolean;
  onPress?: () => void;
}

/**
 * Component for TikTok Card that has the details and options
 *
 */
const CardContent = ({ isPaused, onPress }: CardContentProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {/* Card options */}
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

      {/* Card info/details */}
      <Pressable style={{ width: "100%", gap: 16 }}>
        <Text fontSize="sm" fontWeight="bold" color="#fff">
          @userhandle
        </Text>

        <Text fontSize="xs" fontWeight="500" color="#fff">
          #hashtag1 #hashtag2
        </Text>
      </Pressable>

      {/* Show play icon if video is paused */}
      {isPaused && (
        <Ionicons name="play" size={80} color="#fff" style={styles.playIcon} />
      )}
    </Pressable>
  );
};

export default CardContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    gap: 16,
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
  playIcon: {
    alignSelf: "center",
    position: "absolute",
    top: "50%",
    opacity: 0.5,
  },
});
