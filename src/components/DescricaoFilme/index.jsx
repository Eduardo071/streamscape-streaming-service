import { InfoFilmeContainer, MidiaFilmeContainer } from "../DescricaoFilmeStyle/styles";


export function DescricaoFilmeSct() {

  const filmeDescricao = {
    poster: "https://4kwallpapers.com/images/wallpapers/oppenheimer-8k-2023-2560x2560-12220.jpg",
    tituloDoFilme: "Oppenheimer",
    resumoDoFilme: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cum maxime recusandae dicta, ut, doloribus dignissimos minima eius qui molestias iusto minus quidem et corporis distinctio quaerat a inventore debit  quidem et corporis distinctio quaerat a inventore debit  quidem et corporis distinctio quaerat a inventore debit  quidem et corporis distinctio quaerat a inventore debit",
    faixaEtaria: 18,
    dataDeLançamento: "2023 / 07/ 20",
    generos: [
      { genero: "historia" },
      { genero: "drama" },
      { genero: "suspense" },
      { genero: "misterio" },
    ],
    nota: 8.6,
    criador: "Christopher Nolan",
    elenco: [
      { nome: "Cillian Murphy" },
      { nome: "Emily Blunt" },
      { nome: "Matt Damon" }
    ],
    pais: "USA",
    language: "Inglês e Português "


  }

  return (
    <>
      <InfoFilmeContainer>
        <section>
          <img src={filmeDescricao.poster} alt="poster oficial do filme" />

          <h2>{filmeDescricao.tituloDoFilme}</h2>
        </section>

        <section>
          <p>{filmeDescricao.resumoDoFilme}</p>

          <div className="info-filme">
            <p>{`${filmeDescricao.faixaEtaria}+ |  ${filmeDescricao.dataDeLançamento} `}</p>

            <p className="generos-filme">
              {filmeDescricao.generos.map((filme, index) =>
                <span key={index}>
                  {filme.genero}/
                </span>
              )}

              <p className="imdb">
                <span>IMBD </span>
                <span>{filmeDescricao.nota}</span></p>
            </p>
          </div>

          <div className="info-producao">
            <p>Creator:
              <span>{filmeDescricao.criador}</span>
            </p>

            <p>Stars:
              {filmeDescricao.elenco.map((autor, index) =>
                <span key={index}>
                  {autor.nome}
                </span>
              )}
            </p>

            <p>country:
              <span>{filmeDescricao.pais}</span>
            </p>

            <p>language:
              <span>{filmeDescricao.language}</span>
            </p>
          </div>

        </section>
      </InfoFilmeContainer>

      <MidiaFilmeContainer>

        <div className="midiaFilme">
          <header>
            <p>Videos</p>
            <p>Photos</p>
          </header>

          <div className="videos-fotos">
            <img src="https://i.em.com.br/xW6rpQ3v97cZcPDuzWha4hYqEb4=/750x0/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/07/20/1522235/o-ator-cillian-murphy-como-oppenheimer_1_41372.jpg" alt="" />
            <img src="https://musicaecinema.com/wp-content/uploads/2023/07/oppenheimer.png" alt="" />
            <img src="https://www.thelantern.com/files/2023/07/ENTER-OPPENHEIMER-MOVIE-REVIEW-2-MCT.jpg" alt="" />
          </div>


        </div>

      </MidiaFilmeContainer>
    </>
  )
}