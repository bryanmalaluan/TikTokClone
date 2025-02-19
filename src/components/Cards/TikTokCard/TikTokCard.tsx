import { Ionicons } from "@expo/vector-icons";
import React from "react";

import { Column } from "@src/components/Containers";
import Text from "@src/components/Text";

const TikTokCard = () => {
  return (
    <Column flex={1} backgroundColor="#000" style={{ width: "100%" }}>
      {/* Right options */}
      <Column
        alignItems="center"
        gap={24}
        style={{
          paddingRight: 4,
          position: "absolute",
          right: 0,
          bottom: 40,
        }}
      >
        <Column
          backgroundColor="#fff"
          borderWidth={1}
          borderColor="#dddddd"
          style={{ height: 40, width: 40, borderRadius: 24 }}
        />

        <Column alignItems="center" gap={4} style={{ maxWidth: 48 }}>
          <Ionicons name="heart" size={40} color="#fff" />
          <Text fontSize="xs" fontWeight="bold" color="#fff" numberOfLines={1}>
            1234
          </Text>
        </Column>

        <Column alignItems="center" gap={4} style={{ maxWidth: 48 }}>
          <Ionicons name="chatbubble-ellipses" size={40} color="#fff" />
          <Text fontSize="xs" fontWeight="bold" color="#fff" numberOfLines={1}>
            280
          </Text>
        </Column>

        <Column alignItems="center" gap={4}>
          <Ionicons name="arrow-redo" size={40} color="#fff" />
          <Text fontSize="xs" color="#fff">
            Share
          </Text>
        </Column>
      </Column>
    </Column>
  );
};

export default TikTokCard;
