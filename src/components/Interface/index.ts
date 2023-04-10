export interface Item {
  id: number;
  label: string;
  title: string;
  description: string;
  image: string;
}

export interface MyProps {
  List: Array<Item>;
  activeTab: number;
  handleSetActiveTab: any;
}
