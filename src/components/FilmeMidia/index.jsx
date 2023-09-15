import { VideosEFotos } from "./styles"

export const FilmeMidia = ({ click }) => {

  if (click === 'videos') {
    return (
      <VideosEFotos>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/F3OxA9Cz17A?si=7xC9b4qoGtYOADMs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/lb13ynu3Iac?si=52ev25Jj6_cYsQB-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/bK6ldnjE3Y0?si=Ta7Sa8wkDKLWtLUD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </VideosEFotos>
    )
  }

  if (click === 'fotos') {
    return (

      <VideosEFotos>
        {click === 'fotos'}
        <img
          src="https://i.em.com.br/xW6rpQ3v97cZcPDuzWha4hYqEb4=/750x0/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/07/20/1522235/o-ator-cillian-murphy-como-oppenheimer_1_41372.jpg"
          alt=""
        />
        <img
          src="https://musicaecinema.com/wp-content/uploads/2023/07/oppenheimer.png"
          alt=""
        />
        <img
          src="https://www.thelantern.com/files/2023/07/ENTER-OPPENHEIMER-MOVIE-REVIEW-2-MCT.jpg"
          alt=""
        />
      </VideosEFotos>
    )
  }
}

//   return (

//     <VideosEFotos>
//       {click === 'fotos'}
//       <img
//         src="https://i.em.com.br/xW6rpQ3v97cZcPDuzWha4hYqEb4=/750x0/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/07/20/1522235/o-ator-cillian-murphy-como-oppenheimer_1_41372.jpg"
//         alt=""
//       />
//       <img
//         src="https://musicaecinema.com/wp-content/uploads/2023/07/oppenheimer.png"
//         alt=""
//       />
//       <img
//         src="https://www.thelantern.com/files/2023/07/ENTER-OPPENHEIMER-MOVIE-REVIEW-2-MCT.jpg"
//         alt=""
//       />

//       {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/F3OxA9Cz17A?si=7xC9b4qoGtYOADMs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

//       <iframe width="560" height="315" src="https://www.youtube.com/embed/F3OxA9Cz17A?si=7xC9b4qoGtYOADMs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

//       <iframe width="560" height="315" src="https://www.youtube.com/embed/F3OxA9Cz17A?si=7xC9b4qoGtYOADMs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

//     </VideosEFotos>
//   )
