import { RefObject, useEffect } from 'react';

type RefType = RefObject<HTMLElement>;

function useOutsideClick(
  ref: RefType,
  handleClick: (clickedInside: boolean) => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (event.target instanceof HTMLElement) {
        if (ref.current && !ref.current.contains(event.target)) {
          handleClick(false);
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handleClick]);
}

export default useOutsideClick;
