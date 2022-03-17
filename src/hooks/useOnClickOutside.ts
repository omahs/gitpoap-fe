import { MutableRefObject, useEffect } from 'react';

export function useOnClickOutside<T extends HTMLElement>(
  ref: MutableRefObject<T | null> | MutableRefObject<T | null>[],
  handler: (evt: unknown) => void,
) {
  useEffect(() => {
    const listener: EventListener = (event) => {
      const source = Array.isArray(ref) ? ref : [ref];

      const hit = source.some(({ current }) => {
        if (!(event.target instanceof HTMLElement)) {
          return false;
        }

        if (!current || current.contains(event.target)) {
          return true;
        }

        return false;
      });

      if (hit) {
        return;
      }

      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, []);
}
