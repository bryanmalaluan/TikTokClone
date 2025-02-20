import { useEvent } from "expo";
import { VideoView, useVideoPlayer } from "expo-video";
import React from "react";
import { StyleSheet } from "react-native";

import { Column } from "@src/components/Containers";

import CardContent from "./CardContent";

interface TikTokCardProps {
  url: string;
  height: number;
  isActive: boolean;
}

const TikTokCard = ({ url, height, isActive }: TikTokCardProps) => {
  // Video
  const player = useVideoPlayer(url, (player) => {
    player.loop = true;
  });

  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });

  React.useEffect(() => {
    // Card is active, auto play video
    if (isActive) {
      player.play();
    } else {
      player.pause();
    }
  }, [isActive]);

  const onPlayPauseVideo = () => {
    if (isPlaying) {
      return player.pause();
    }
    player.play();
  };

  const isPaused = !isPlaying && player.status === "readyToPlay";

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
