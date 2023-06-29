import { v4 as uuidv4 } from 'uuid';
import { Coffee } from "../../types/coffees";
import American from "../Coffees/icons/American.svg";
import Arab from "../Coffees/icons/Arab.svg";
import Capuccino from "../Coffees/icons/Capuccino.svg";
import CoffeeWithMilk from "../Coffees/icons/CoffeeWithMilk.svg";
import Creamy from "../Coffees/icons/Creamy.svg";
import Cuban from "../Coffees/icons/Cuban.svg";
import Espresso from "../Coffees/icons/Espresso.svg";
import Hawaiian from "../Coffees/icons/Hawaiian.svg";
import HotChocolate from "../Coffees/icons/HotChocolate.svg";
import IcedEspresso from "../Coffees/icons/IcedEspresso.svg";
import Irish from "../Coffees/icons/Irish.svg";
import Latte from "../Coffees/icons/Latte.svg";
import Macchiato from "../Coffees/icons/Macchiato.svg";
import Mocaccino from "../Coffees/icons/Mocaccino.svg";

export const coffees: Coffee[] = [
  {
    id: uuidv4(),
    name: "Traditional Espresso",
    description: "The traditional coffee is made with hot water and ground grains",
    price: "9.90",
    imageName: Espresso,
    tags: [
      "Traditional"
    ]
  },
  {
    id: uuidv4(),
    name: "American Espresso",
    description: "Diluted espresso, less intense than the traditional one",
    price: "9.90",
    imageName: American,
    tags: [
      "Traditional"
    ]
  },
  {
    id: uuidv4(),
    name: "Creamy Espresso",
    description: "Traditional espresso with creamy foam",
    price: "9.90",
    imageName: Creamy,
    tags: [
      "Traditional"
    ]
  },
  {
    id: uuidv4(),
    name: "Iced Espresso",
    description: "Drink prepared with espresso coffee and ice cubes",
    price: "8.90",
    imageName: IcedEspresso,
    tags: [
      "Traditional",
      "Iced"
    ]
  },
  {
    id: uuidv4(),
    name: "Coffee with Milk",
    description: "Half and half traditional espresso with steamed milk",
    price: "11.90",
    imageName: CoffeeWithMilk,
    tags: [
      "Traditional",
      "With milk"
    ]
  },
  {
    id: uuidv4(),
    name: "Latte",
    description: "A shot of espresso with twice as much milk and creamy foam",
    price: "12.90",
    imageName: Latte,
    tags: [
      "Traditional",
      "With milk"
    ]
  },
  {
    id: uuidv4(),
    name: "Capuccino",
    description: "A shot of espresso with twice as much milk and creamy foam",
    price: "12.90",
    imageName: Capuccino,
    tags: [
      "Traditional",
      "With milk"
    ]
  },
  {
    id: uuidv4(),
    name: "Macchiato",
    description: "Espresso coffee mixed with a little hot milk and foam",
    price: "12.90",
    imageName: Macchiato,
    tags: [
      "Traditional",
      "With milk"
    ]
  },
  {
    id: uuidv4(),
    name: "Mocaccino",
    description: "Espresso coffee with chocolate sauce, a little milk and foam",
    price: "12.90",
    imageName: Mocaccino,
    tags: [
      "Traditional",
      "With milk"
    ]
  },
  {
    id: uuidv4(),
    name: "Hot Chocolate",
    description: "Drink made with chocolate dissolved in hot milk and coffee",
    price: "7.90",
    imageName: HotChocolate,
    tags: [
      "Special",
      "With milk"
    ]
  },
  {
    id: uuidv4(),
    name: "Cuban",
    description: "Iced espresso drink with rum, cream and mint",
    price: "10.90",
    imageName: Cuban,
    tags: [
      "Special",
      "Alcoholic",
      "Iced"
    ]
  },
  {
    id: uuidv4(),
    name: "Hawaiian",
    description: "Sweet drink prepared with coffee and coconut milk",
    price: "10.90",
    imageName: Hawaiian,
    tags: [
      "Special"
    ]
  },
  {
    id: uuidv4(),
    name: "Arabic",
    description: "Drink prepared with Arabic coffee beans and spices",
    price: "10.90",
    imageName: Arab,
    tags: [
      "Special",
    ]
  },
  {
    id: uuidv4(),
    name: "Irish",
    description: "Drink based on coffee, Irish whiskey, sugar and whipped cream",
    price: "10.90",
    imageName: Irish,
    tags: [
      "Special",
      "Alcoholic"
    ]
  },
]