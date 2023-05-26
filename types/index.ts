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

interface OptionType {
  id: number;
  name: string;
  price: number;
  stock: number;
}

interface TagType {
  color: string;
  text: string;
}
