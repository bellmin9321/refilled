export interface ItemType {
  id: number;
  name: string;
  imageUrl: string;
  desc: string;
  originPrice: number;
  price: number;
  productOptions: OptionType[];
  tag: TagType;
}

export interface OptionType {
  id: number;
  name: string;
  price: number;
  stock: number;
}

interface TagType {
  color: string;
  text: string;
}

export interface ItemProps {
  item: ItemType;
}
