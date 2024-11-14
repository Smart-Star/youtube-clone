import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

type SideBarContextType = {
  isLargeOpen: boolean;
  isSmallOpen: boolean;
  toggle: () => void;
  close: () => void;
};

type SideBarProviderType = {
  children: ReactNode;
};

const SideBarContext = createContext<SideBarContextType | null>(null);

export const SideBarProvider = ({ children }: SideBarProviderType) => {
  const [isSmallOpen, setIsSmallOpen] = useState(false);
  const [isLargeOpen, setIsLargeOpen] = useState(true);

  const isScreenSmall = window.innerWidth < 1024;

  const toggle = () => {
    if (isScreenSmall) {
      setIsSmallOpen((large) => !large);
      // console.log('isSmallOpen', isSmallOpen);
    } else {
      setIsLargeOpen((small) => !small);
      // console.log('isLargeOpen', isLargeOpen);
    }
  };

  const close = () => {
    setIsSmallOpen(false);
    setIsLargeOpen(false);
  };

  useEffect(() => {
    const handler = () => {
      if (isScreenSmall) {
        setIsSmallOpen(false);
      }
    };

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  return (
    <SideBarContext.Provider
      value={{
        isSmallOpen,
        isLargeOpen,
        toggle,
        close,
      }}
    >
      {children}
    </SideBarContext.Provider>
  );
};

export const useSideBarContext = () => {
  const value = useContext(SideBarContext);

  if (!value) {
    throw Error('Cannot use outside of SidebarProvider');
  }

  return value;
};
