import { FlashList } from "@shopify/flash-list";
import React from "react";
import { Pressable, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { TikTokCard } from "@src/components/Cards";
import { Column, Container, Row } from "@src/components/Containers";
import Text from "@src/components/Text";

const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const HomeScreen = () => {
  // Hooks
  const insets = useSafeAreaInsets();
  const { height } = useWindowDimensions();

  // Local state
  const [activeCardIndex, setActiveCardIndex] = React.useState(0);

  const onViewableItemsChanged = React.useCallback(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveCardIndex(viewableItems[0].index);
    }
  }, []);

  const renderItem = React.useCallback(
    ({ item, index }: { item: any; index: number }) => {
      const isActive = activeCardIndex === index;
      return <TikTokCard height={cardHeight} isActive={isActive} />;
    },
    [activeCardIndex]
  );

  const tabBarHeight = 56 + insets.bottom;
  const cardHeight = height - tabBarHeight;

  return (
    <Container alignItems="center">
      <Column style={{ flex: 1, width: "100%" }}>
        <FlashList
          data={DATA}
          renderItem={renderItem}
          extraData={activeCardIndex}
          estimatedItemSize={height / 2}
          pagingEnabled={true}
          scrollEventThrottle={32}
          viewabilityConfig={{ viewAreaCoveragePercentThreshold: 80 }} // Triggers when at least 80% of a card is visible
          onViewableItemsChanged={onViewableItemsChanged}
        />
      </Column>

      {/* Header for filters */}
      <Row
        alignItems="center"
        gap={16}
        style={{ position: "absolute", top: insets.top + 16 }}
      >
        <Pressable style={{ gap: 4 }}>
          <Text fontSize="sm" fontWeight="500" color="white">
            Following
          </Text>
        </Pressable>

        <Row backgroundColor="white" style={{ width: 1, height: "70%" }} />

        <Pressable>
          <Text fontSize="sm" color="white">
            For You
          </Text>
        </Pressable>
      </Row>
    </Container>
  );
};

export default HomeScreen;
