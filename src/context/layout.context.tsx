import { createContext, useContext, useState } from 'react';
import { FluentIcon } from '@fluentui/react-icons';

interface LayoutContextValues {
  title: string;
  setTitle: (value: string) => void;
  icon?: FluentIcon | null;
  setIcon: (value: FluentIcon | null) => void;
}

export const LayoutContext = createContext<LayoutContextValues>({
  title: '',
  setTitle(value: string) {
    console.log(value);
  },
  setIcon(value: FluentIcon | null) {
    console.log(value);
  },
});

export const LayoutCtxProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState<FluentIcon | null>(null);

  return (
    <LayoutContext.Provider value={{ title, setTitle, icon, setIcon }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => useContext(LayoutContext);
