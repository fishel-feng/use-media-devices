export type StreamHandler = (stream: MediaStream) => void;
export type ErrorHandler = (error: any) => void;

export type Config = {
  onStream?: StreamHandler;
  onError?: ErrorHandler;
};
