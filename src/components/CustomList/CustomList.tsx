import { FlashList } from "@shopify/flash-list";
import React from "react";
import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { TikTokCard } from "../Cards";
import { Column } from "../Containers";

const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const CustomList = () => {
  // Hooks
  const insets = useSafeAreaInsets();
  const { height } = useWindowDimensions();

  // Local state
  const [activeCardIndex, setActiveCardIndex] = React.useState(0);

  const tabBarHeight = 56 + insets.bottom;
  const cardHeight = height - tabBarHeight;

  const renderItem = React.useCallback(
    ({ item, index }: { item: any; index: number }) => {
      const isActive = activeCardIndex === index;
      return <TikTokCard height={cardHeight} isActive={isActive} />;
    },
    [activeCardIndex]
  );

  const onViewableItemsChanged = React.useCallback(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveCardIndex(viewableItems[0].index);
    }
  }, []);

  return (
    <Column flex={1} style={{ width: "100%" }}>
      <FlashList
        data={DATA}
        renderItem={renderItem}
        extraData={activeCardIndex}
        estimatedItemSize={cardHeight}
        pagingEnabled={true}
        scrollEventThrottle={32}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 80 }} // Triggers when at least 80% of a card is visible
        onViewableItemsChanged={onViewableItemsChanged}
      />
    </Column>
  );
};

export default CustomList;
