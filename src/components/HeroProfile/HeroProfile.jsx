import { BookmarkSimple, Notebook } from "phosphor-react";
import * as S from "../ProfileStyle/ProfileStyle";

export function HeroProfile() {
  return (
    <S.HeroProfile>
      <button>
        <BookmarkSimple size={32} color="#fcfcfc" weight="bold" />
        Assistir Depois
      </button>
      <button>
        <Notebook size={32} color="#fcfcfc" weight="bold" />
        Meu plano
      </button>
    </S.HeroProfile>
  );
}
