import * as S from "../DiscoverStyles/DiscoverStyles"

export function SearchBox({funtionSetSearch}){
    return (
        <S.SearchBox>
        <form>
          <input
            onChange={funtionSetSearch}
            type="text"
            name="streamSearch"
            id="streamSearch"
            placeholder="Pesquise aqui"
          />
        </form>
      </S.SearchBox>
    )
}