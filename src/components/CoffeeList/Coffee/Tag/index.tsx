import { Container } from "./styles"

interface TagProps {
  label: string
}

export function Tag({ label }: TagProps) {
  return (
    <Container>
      {label}
    </Container>
  )
}
