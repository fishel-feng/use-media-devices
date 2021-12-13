# use-media-devices

React hooks for capture video and screen. Powered by navigator.mediaDevices API.

## Install

use npm:

```
npm install use-media-devices
```

use yarn:

```
yarn add use-media-devices
```

use pnpm:

```
pnpm i use-media-devices
```

## Usage

useUserMedia:

```tsx
import { useUserMedia } from 'use-media-devices';

function App() {
  const previewRef = useUserMedia({
    onStream: (stream) => {
      //
    },
    onError: (error) => {
      //
    }
  });

  return (
    <video ref={previewRef} width={300}></video>
  );
}
```

useDeviceMedia:

```tsx
import { useDeviceMedia } from 'use-media-devices';

function App() {
  const previewRef = useDeviceMedia({
    onStream: (stream) => {
      //
    },
    onError: (error) => {
      //
    }
  }, { audio: true });

  return (
    <video ref={previewRef} width={300}></video>
  );
}
```
