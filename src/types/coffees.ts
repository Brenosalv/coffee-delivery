export interface Coffee {
  id: string;
  name: string;
  description: string;
  imageName: string;
  tags: string[];
  price: string;
}

export interface CoffeeCartDetails {
  id: string;
  name: string;
  imageName: string;
  price: string;
  units: string;
}
