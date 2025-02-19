import { useEvent } from "expo";
import { useFocusEffect } from "expo-router";
import { VideoView, useVideoPlayer } from "expo-video";
import React from "react";
import { StyleSheet } from "react-native";

import { Column } from "@src/components/Containers";

import CardContent from "./CardContent";

const videoSource =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const TikTokCard = ({
  height,
  isActive,
}: {
  height: number;
  isActive: boolean;
}) => {
  // Video
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
  });

  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });

  useFocusEffect(
    React.useCallback(() => {
      // Card is not active in screen
      // Pause player
      if (!isActive) {
        player.pause();
        return;
      }

      // Card is focused auto play video
      player.play();

      return () => {
        // Card is unfocused paused video
        player.pause();
      };
    }, [isActive])
  );

  const onPlayPauseVideo = () => {
    if (isPlaying) {
      return player.pause();
    }

    player.play();
  };

  const isPaused = !isPlaying && player.status !== "loading";

  return (
    <Column backgroundColor="#000" style={{ height, width: "100%" }}>
      {/* Video */}
      <VideoView
        player={player}
        nativeControls={false}
        contentFit="cover"
        style={styles.video}
      />

      <CardContent isPaused={isPaused} onPress={onPlayPauseVideo} />
    </Column>
  );
};

export default TikTokCard;

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});
