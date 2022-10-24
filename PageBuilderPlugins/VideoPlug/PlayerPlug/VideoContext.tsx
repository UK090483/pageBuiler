import React, { useContext } from "react";

const VideoContext = React.createContext<{
  playingVideo: string | null;
  setPlayingVideo: (id: string) => void;
}>({ playingVideo: null, setPlayingVideo: () => {} });
export const VideoContextWrap: React.FC<{}> = ({ children }) => {
  const [playingVideo, _setPlayingVideo] = React.useState<string | null>(null);

  const setPlayingVideo = React.useCallback((id: string) => {
    _setPlayingVideo(id);
  }, []);

  return (
    <VideoContext.Provider value={{ playingVideo, setPlayingVideo }}>
      {children}
    </VideoContext.Provider>
  );
};
export const useVideoContext = () => {
  return useContext(VideoContext);
};
