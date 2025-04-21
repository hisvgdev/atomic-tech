interface VideoData {
  Title: string;
  Description: string;
  VideoId: string;
  Video: {
    URL: string;
  };
}

export interface ShowreelWrapperProps {
  videoData?: VideoData
}