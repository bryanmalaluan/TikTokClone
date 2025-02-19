import React from "react";

import logger from "@src/utils/logger";

/** Counts the number of times the component has re-rendered */
const useRenderCount = (title: string) => {
  const renderCount = React.useRef(0);
  renderCount.current += 1;
  logger.info(`${title} Render Count: ${renderCount.current}`);
};

export default useRenderCount;
