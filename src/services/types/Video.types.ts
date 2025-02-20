export type VideoUser = {
  id: number;
  name: string;
  url: string;
};

export type VideoFile = {
  file_type: string;
  fps: number;
  height: number;
  id: number;
  link: string;
  quality: string;
  size: number;
  width: number;
};

export type VideoPicture = {
  id: number;
  nr: number;
  picture: string;
};

export type Video = {
  avg_color: string | null;
  duration: number;
  full_res: string | null;
  height: number;
  id: number;
  image: string;
  tags: string[];
  url: string;
  user: VideoUser;
  video_files: VideoFile[];
  video_pictures: VideoPicture[];
  width: number;
};

export type VideoResult = {
  next_page: string;
  page: number;
  per_page: number;
  total_results: number;
  url: string;
  videos: Video[];
};
