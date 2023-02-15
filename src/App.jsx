import {
  Container,
  Card,
  Limitador,
  Title
} from './apps.js'

export default function App() {

  const bonequinhos = [
    {
      img:"./src/assets/bruxa.png",
      nome:"Bruxa",
    },
    {
      img:"./src/assets/fantasma.png",
      nome:"Fantasma",
    },
    {
      img:"./src/assets/vampiro.png",
      nome:"Vampiro",
    },
    {
      img:"./src/assets/zumbi.png",
      nome:"Zumbi",
    },
    {
      img:"./src/assets/fada.png",
      nome:"Fada",
    },
    {
      img:"./src/assets/pirata.png",
      nome:"Pirata",
    },
  ]

  return (
   <Container>
      <Title>
        Carnaval VnW
      </Title>
      <Limitador>
        {
          bonequinhos.map(item => (
            <Card key={item.nome}>
                <img src={item.img} alt="" />
                <h3>{item.nome}</h3>
            </Card>
          ))
        }
      </Limitador>
   </Container>
  )
}

