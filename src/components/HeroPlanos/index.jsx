import { CheckSquare, XSquare } from "phosphor-react";
import { Container } from "../PlanosStyle/style";

export function HeroPlanos() {
  return (
    <Container>
      <h3> Escolha Seu Plano</h3>
      <ul>
        <li>
          <header>
            <p
              style={{
                width: "180px",
                padding: "1rem",
                borderBottom: "1px solid #fff",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Basic
            </p>
            <p
              style={{
                fontStyle: "italic",
                padding: "1rem",
              }}
            >
              R$14,90
            </p>
          </header>

          <section className="containerTopics">
            <p>
              <span>
                <CheckSquare size={32} color="#fcfcfc" weight="bold" />
                Qualidade de Streaming ( HD )
              </span>
              <span>
                <CheckSquare size={32} color="#fcfcfc" weight="bold" />
                Acesso ao Catálogo ( Parcial )
              </span>
              <span>
                <XSquare size={32} color="#fcfcfc" weight="bold" />
                Dispositivos Simultâneos
              </span>
              <span>
                <CheckSquare size={32} color="#fcfcfc" weight="bold" />
                Contém Publicidade
              </span>
              <span>
                <XSquare size={32} color="#fcfcfc" weight="bold" />
                Assistir Offline
              </span>
              <span>
                <CheckSquare size={32} color="#fcfcfc" weight="bold" />
                Suporte
              </span>
            </p>
          </section>

          <footer></footer>
        </li>

        <li className="plus">
          <header>
            <p
              style={{
                width: "30rem",
                padding: "1rem",
                borderBottom: "1px solid #fff",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Plus
            </p>
            <p
              style={{
                fontStyle: "italic",
                padding: "1rem",
              }}
            >
              R$119,00
            </p>
          </header>

          <section className="containerTopics">
            <p>
              <span>
                <CheckSquare size={32} color="#fcfcfc" weight="bold" />
                Qualidade de Streaming ( 4K Streaming )
              </span>
              <span>
                <CheckSquare size={32} color="#fcfcfc" weight="bold" />
                Acesso ao Catálogo ( Completo )
              </span>
              <span>
                <CheckSquare size={32} color="#fcfcfc" weight="bold" />
                Dispositivos Simultâneos ( 4 dispositivos )
              </span>
              <span>
                <XSquare size={32} color="#fcfcfc" weight="bold" />
                Contém Publicidade
              </span>
              <span>
                <CheckSquare size={32} color="#fcfcfc" weight="bold" />
                Assistir Offline
              </span>
              <span>
                <CheckSquare size={32} color="#fcfcfc" weight="bold" />
                Suporte
              </span>
            </p>
          </section>

          <footer></footer>
        </li>

        <li>
          <header>
            <p
              style={{
                width: "180px",
                padding: "1rem",
                borderBottom: "1px solid #fff",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Padrão
            </p>
            <p
              style={{
                fontStyle: "italic",
                padding: "1rem",
              }}
            >
              R$50,00
            </p>
          </header>

          <section className="containerTopics">
            <p>
              <span>
                <CheckSquare size={32} color="#fcfcfc" weight="bold" />
                Qualidade de Streaming ( Full HD )
              </span>
              <span>
                <CheckSquare size={32} color="#fcfcfc" weight="bold" />
                Acesso ao Catálogo ( Completo )
              </span>
              <span>
                <CheckSquare size={32} color="#fcfcfc" weight="bold" />
                Dispositivos Simultâneos ( 2 dispositivos )
              </span>
              <span>
                <XSquare size={32} color="#fcfcfc" weight="bold" />
                Contém Publicidade
              </span>
              <span>
                <CheckSquare size={32} color="#fcfcfc" weight="bold" />
                Assistir Offline
              </span>
              <span>
                <CheckSquare size={32} color="#fcfcfc" weight="bold" />
                Suporte
              </span>
            </p>
          </section>

          <footer></footer>
        </li>
      </ul>
    </Container>
  );
}
