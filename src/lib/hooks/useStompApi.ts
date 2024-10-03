import { messageCallbackType } from '@stomp/stompjs';
import { useSubscribe } from './useStomp';

export function useLiveStreaming(
  hospitalId: number,
  cameraId: number,
  callback: messageCallbackType,
) {
  useSubscribe(
    `/ws/topic/image/hospitals/${hospitalId}/cameras/${cameraId}`,
    callback,
  );
}

export function useAccidentAlarm(
  hospitalId: number,
  cameraId: number,
  callback: messageCallbackType,
) {
  useSubscribe(
    `/ws/topic/accident/hospitals/${hospitalId}/cameras/${cameraId}`,
    callback,
  );
}
