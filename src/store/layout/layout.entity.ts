export interface LayoutData {
  navigation: {
    title: string;
  };
}

export interface LayoutActions {
  setNavigationTitle: (title: string) => void;
}

export type LayoutStore = LayoutData & LayoutActions;
