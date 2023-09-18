import * as S from '../HomeStyle/HomeStyle'
import { Copyright, GithubLogo, LinkedinLogo } from "phosphor-react";

export function Footer() {
  return (
    <S.ContainerFooter>
      <h2>
        <Copyright size={32} color="#fcfcfc" /> 2023 by Eduardo Borges & Samuel
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
