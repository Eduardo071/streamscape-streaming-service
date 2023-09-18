import * as S from '../HomeStyle/HomeStyle'
import { Copyright, GithubLogo, LinkedinLogo } from "phosphor-react";

export function Footer() {
  return (
    <S.ContainerFooter style={{ background: "#000000", width: "100%", height: 100, padding: "2rem" }}>
      <h2>
        <Copyright size={32} color="#fcfcfc" /> 2023 by Eduardo Borges & Samuel Vítor
      </h2>
      <ul>
        <li>
          <GithubLogo size={32} color="#fcfcfc" weight="fill" />
        </li>
        <li>
          <LinkedinLogo size={32} color="#fcfcfc" weight="fill" />
        </li>
      </ul>
    </S.ContainerFooter>
  );
}
