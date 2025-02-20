import { FlashList } from "@shopify/flash-list";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useFocusEffect } from "expo-router";
import React from "react";
import { ActivityIndicator, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { fetchPopularVideos } from "@src/services/api/videoService";
import { Video, VideoResult } from "@src/services/types/Video.types";

import { TikTokCard } from "../Cards";
import { Column } from "../Containers";
import Text from "../Text";

const CustomList = () => {
  // Hooks
  const insets = useSafeAreaInsets();
  const { height } = useWindowDimensions();

  // Local state
  const [activeCardIndex, setActiveCardIndex] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [popularVideos, setPopularVideos] = React.useState<Video[]>([]);

  // Refs
  const activeCardIndexRef = React.useRef(activeCardIndex);
  const isFetchingMore = React.useRef(false);

  // Query
  const { data: popularVideosData, isPending } = useQuery<VideoResult, Error>({
    queryKey: ["popularVideos", page],
    queryFn: () => fetchPopularVideos(page),
    placeholderData: keepPreviousData,
  });

  const tabBarHeight = 56 + insets.bottom;
  const cardHeight = height - tabBarHeight;

  React.useEffect(() => {
    if (popularVideosData?.videos) {
      setPopularVideos([...popularVideos, ...popularVideosData.videos]);
      isFetchingMore.current = false;
    }
  }, [popularVideosData?.videos]);

  useFocusEffect(
    React.useCallback(() => {
      setActiveCardIndex(activeCardIndexRef.current);
      return () => setActiveCardIndex(-1); // Pause when screen is unfocused
    }, [])
  );

  const renderItem = React.useCallback(
    ({ item, index }: { item: Video; index: number }) => {
      const url = item.video_files[0]?.link ?? "";
      const isActive = activeCardIndex === index;
      return <TikTokCard url={url} height={cardHeight} isActive={isActive} />;
    },
    [activeCardIndex]
  );

  const onViewableItemsChanged = React.useCallback(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      const index = viewableItems[0].index;
      activeCardIndexRef.current = index;
      setActiveCardIndex(index);
    }
  }, []);

  const listFooterComponent = React.useCallback(() => {
    return (
      <ActivityIndicator
        size="small"
        color="#dddddd"
        style={{ paddingVertical: 24 }}
      />
    );
  }, []);

  const onEndReached = () => {
    if (isFetchingMore.current) {
      return;
    }

    isFetchingMore.current = true;
    const nextPage = page + 1;
    setPage(nextPage);
  };

  // Query is still fetching data
  if (isPending && !popularVideos.length) {
    return (
      <Column
        flex={1}
        alignItems="center"
        justifyContent="center"
        gap={24}
        style={{ width: "100%" }}
      >
        <ActivityIndicator size="large" color="#dddddd" />

        <Text fontSize="sm" fontWeight="500">
          Fetching videos...
        </Text>
      </Column>
    );
  }

  return (
    <Column flex={1} backgroundColor="#000" style={{ width: "100%" }}>
      <FlashList
        data={popularVideos}
        renderItem={renderItem}
        extraData={activeCardIndex}
        estimatedItemSize={cardHeight}
        pagingEnabled={true}
        scrollEventThrottle={32}
        viewabilityConfig={{ itemVisiblePercentThreshold: 40 }} // Triggers when at least 40% of a card is visible
        ListFooterComponent={listFooterComponent}
        onViewableItemsChanged={onViewableItemsChanged}
        // onEndReachedThreshold={}
        onEndReached={onEndReached}
      />
    </Column>
  );
};

export default CustomList;
