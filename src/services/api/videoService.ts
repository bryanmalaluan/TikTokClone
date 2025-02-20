import { get } from "../requestInterceptor";

export const fetchPopularVideos = async (page: number) => {
  const url = `https://api.pexels.com/videos/popular?page=${page}&per_page=8`;

  const response = await get({ url });
  return response;
};
