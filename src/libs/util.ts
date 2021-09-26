import { onDestroy } from "svelte";

function padNum2(n: number): string {
  return n.toString().padStart(2, "0");
}

export function secondsToHHMMSS(totalSeconds: number): string {
  var hours = Math.floor(totalSeconds / 3600);
  var minutes = Math.floor((totalSeconds / 60) % 60);
  var seconds = Math.floor(totalSeconds % 60);
  return `${padNum2(hours)}:${padNum2(minutes)}:${padNum2(seconds)}`;
}

export function getFileNameFromPath(path: string): string {
  const lastIndex = path.lastIndexOf("/");
  if (lastIndex !== -1) {
    return path.substr(lastIndex + 1);
  }
  return path;
}

export async function fetchContentLengthBytes(
  url: RequestInfo
): Promise<number | null> {
  try {
    const response = await fetch(url, {
      method: "HEAD",
    });
    if (!response.ok) {
      return null;
    }
    const bytes = parseInt(response.headers.get("Content-Length"));
    if (isNaN(bytes)) {
      return null;
    }
    return bytes;
  } catch {
    return null;
  }
}

export function newAudioContext(): AudioContext | null {
  if (window.AudioContext) {
    return new window.AudioContext();
  }

  const _window: any = window;
  if (_window.webkitAudioContext) {
    return new _window.webkitAudioContext();
  }

  return null;
}

export function randomInt(minInclusive: number, maxExclusive: number): number {
  return Math.floor(Math.random() * (maxExclusive - minInclusive));
}

export function randomElement<T>(arr: ArrayLike<T>): T {
  return arr[randomInt(0, arr.length)];
}

export function addWindowEventListener(
  type: string,
  listener: EventListenerOrEventListenerObject
) {
  window.addEventListener(type, listener);
  onDestroy(() => window.removeEventListener(type, listener));
}
