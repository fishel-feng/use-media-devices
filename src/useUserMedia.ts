import { useEffect, useRef } from "react";
import { Config } from "./types";

export function useUserMedia(
  config: Config = {},
  constraints: MediaStreamConstraints = { video: true, audio: true }
) {
  const previewRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        if (previewRef.current) {
          previewRef.current.srcObject = stream;
          previewRef.current.play();
        }
        config.onStream?.(stream);
      })
      .catch((error) => {
        config.onError?.(error);
      });
  }, []);
  return previewRef;
}
