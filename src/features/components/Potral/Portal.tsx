import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  children: ReactNode;
}

export const Portal: FC<PortalProps> = ({ children }) => {
  const portal = document.getElementById('portal') as HTMLDivElement;
  return createPortal(<>{children}</>, portal);
};
