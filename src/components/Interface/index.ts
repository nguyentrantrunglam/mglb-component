export interface Item {
  id: number;
  label: string;
  title: string;
  description: string;
  image: string;
  position: number;
  oldPosition: number;
}

export interface MyProps {
  List: Array<Item>;
  activeTabId: number;
  handleSetActiveTabId: any;
}
