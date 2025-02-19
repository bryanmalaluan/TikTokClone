import React from "react";

import { Column } from "@src/components/Containers";

import CardContent from "./CardContent";

const TikTokCard = () => {
  return (
    <Column
      flex={1}
      justifyContent="flex-end"
      backgroundColor="#000"
      style={{ width: "100%" }}
    >
      <CardContent />
    </Column>
  );
};

export default TikTokCard;
