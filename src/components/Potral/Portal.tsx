import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

const Portal: FC<PortalProps> = ({ children }) => {
  const portal = document.getElementById('portal') as HTMLDivElement;
  return createPortal(<>{children}</>, portal);
};

export default Portal;
