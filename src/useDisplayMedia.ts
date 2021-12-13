import { useEffect, useRef } from "react";
import { Config } from "./types";

export function useDisplayMedia(
  config: Config = {},
  constraints?: MediaStreamConstraints
) {
  const previewRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    navigator.mediaDevices
      .getDisplayMedia(constraints)
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
