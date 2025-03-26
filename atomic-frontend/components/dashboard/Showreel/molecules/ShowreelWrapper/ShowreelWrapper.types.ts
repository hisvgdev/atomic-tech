interface VideoData {
  title: string;
  description: string;
  videoId: string;
  video: {
    url: string;
  };
}

export interface ShowreelWrapperProps {
  videoData?: VideoData
}