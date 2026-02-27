import { useParams, useSearchParams } from "react-router-dom";
import imagenLocal from "../assets/react.svg";

import { BtnVolver } from "../components/ui/button/BtnVolver";

export const ImagenesPage = () => {
 const [searchParams] = useSearchParams()
 const src = searchParams.get("src")
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-10">
      <h1 className="text-3xl font-bold text-center">Imagenes con React</h1>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Imagenes locales importadas</h2>
        <img src={src} alt="" className="h-40 w-40 overflow-hidden" />
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Imagen URL</h2>
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSNeLjialQgMRXQ-3sH9ZpyHC_8Sqxz7YqBFJwUnd2Pzq4TPu49HrE3Tui_zxmimXCDQ94L5VTUyj0y9qaSqsYY22vlpE6YMmdAUAlp4uYbL2lekZp3abAIFxc8yYTGhKL5JLvhPo8K-E/s1600/706867.jpg"
          alt=""
          className="h-40 w-40 overflow-hidden object-cover"
        />
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Imagen fondo</h2>
        <div className="h-64 bg-cover bg-center rounded-2xl items-center justify-center flex"
          style={{
            backgroundImage:
              "url('https://avatars.fastly.steamstatic.com/f4471dcc3f381546d5fd5cf315bf742bf9f24947_full.jpg')",
          }}
        >
          <span className="bg-black/60 py-2 rounded-2xl text-white"> Fondo con texto encima</span>
        </div>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Imagen lazy loading</h2>
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSNeLjialQgMRXQ-3sH9ZpyHC_8Sqxz7YqBFJwUnd2Pzq4TPu49HrE3Tui_zxmimXCDQ94L5VTUyj0y9qaSqsYY22vlpE6YMmdAUAlp4uYbL2lekZp3abAIFxc8yYTGhKL5JLvhPo8K-E/s1600/706867.jpg"
          alt=""
          className="h-40 w-40 overflow-hidden object-cover"
          loading="lazy"
        />
      </section>
      <BtnVolver></BtnVolver>
    </div>
  );
};
