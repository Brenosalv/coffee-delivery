import { Container, Description, Title } from "./styles";

interface FormHeaderProps {
  src: string;
  title: string;
  description: string;
}

export function FormHeader({ src, title, description }: FormHeaderProps) {
  return (
    <Container>
      <img src={src} alt="" width={22} />

      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
    </Container>
  );
}