import { Container } from "../PlanosStyle/style";


export function HeroPlanos() {
  return (
    <Container>
      <h3> Escolha Seu Plano</h3>
      <ul>
        <li>
          <header>
            <p style={{
              width: "180px",
              padding: "1rem",
              borderBottom: "1px solid #fff",
              textAlign: "center"
            }}>
              Basic
            </p>
            <p>R$14,90</p>
          </header>

          <section>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia optio suscipit porro nihil deserunt nostrum voluptas earum aperiam tenetur facilis expedita molestias repellat, ipsam, aliquam eos perspiciatis inventore maxime a?</p>
          </section>

          <footer>

          </footer>
        </li>

        <li className="plus"  >
          <header>
            <p style={{
              width: "180px",
              padding: "1rem",
              borderBottom: "1px solid #fff",
              textAlign: "center",              
            }}>
              Plus
            </p>
            <p>R$119,00</p>
          </header>

          <section>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia optio suscipit porro nihil deserunt nostrum voluptas earum aperiam tenetur facilis expedita molestias repellat, ipsam, aliquam eos perspiciatis inventore maxime a?</p>
          </section>

          <footer>

          </footer>
        </li>

        <li>
          <header>
            <p style={{
              width: "180px",
              padding: "1rem",
              borderBottom: "1px solid #fff",
              textAlign: "center"
            }}>
              Normal
            </p>
            <p>R$50,00</p>
          </header>

          <section>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia optio suscipit porro nihil deserunt nostrum voluptas earum aperiam tenetur facilis expedita molestias repellat, ipsam, aliquam eos perspiciatis inventore maxime a?</p>
          </section>

          <footer>

          </footer>
        </li>


      </ul>
    </Container>
  )
}