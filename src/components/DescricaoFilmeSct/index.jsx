import { InfoFilmeContainer } from "./styles";


export function DescricaoFilmeSct() {

  const filmeDescricao = {
    poster: "https://4kwallpapers.com/images/wallpapers/oppenheimer-8k-2023-2560x2560-12220.jpg",
    tituloDoFilme: "Oppenheimer",
    resumoDoFilme: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cum maxime recusandae dicta, ut, doloribus dignissimos minima eius qui molestias iusto minus quidem et corporis distinctio quaerat a inventore debit  quidem et corporis distinctio quaerat a inventore debit  quidem et corporis distinctio quaerat a inventore debit  quidem et corporis distinctio quaerat a inventore debit",
    faixaEtaria: 18,
    dataDeLançamento: "2023/07/20",
    generos: [
      { genero: "historia" },
      { genero: "drama" },
      { genero: "suspense" },
      { genero: "misterio" },
    ],
    nota: 8.6,


  }

  return (
    <InfoFilmeContainer>
      <section>
        <img src={filmeDescricao.poster} alt="poster oficial do filme" />

        <h2>{filmeDescricao.tituloDoFilme}</h2>
      </section>

      <section>
        <p>{filmeDescricao.resumoDoFilme}</p>

        <div>
          <p>{`${filmeDescricao.faixaEtaria} | ${filmeDescricao.dataDeLançamento} `}</p>

          <p className="generos-filme">
            {filmeDescricao.generos.map((filme, index) => <span key={index}>{filme.genero}/</span>)}

            <span></span>
          </p>


        </div>
      </section>
    </InfoFilmeContainer>
  )
}