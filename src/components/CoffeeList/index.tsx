import { coffees } from "../../assets/Coffees/coffeesArray";
import { CoffeeCard } from "./Coffee";
import { CoffeesListContainer, Title } from "./styles";

export function CoffeeList() {
  return (
    <>
      <Title>
        Our coffees
      </Title>

      <CoffeesListContainer>
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            id={coffee.id}
            name={coffee.name}
            description={coffee.description}
            imageName={coffee.imageName}
            price={coffee.price}
            tags={coffee.tags}
          />
        ))}
      </CoffeesListContainer>
    </>
  )
}