import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header";
<<<<<<< HEAD
import { getAnimeResponse } from "./libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8")

  return (
    <>
      {/* Top Anime */}
=======
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")

  recommendedAnime = reproduce(recommendedAnime, 8)

  return (
    <>
      {/* Populer Anime */}
>>>>>>> cba5020 (add dashboard)
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        <AnimeList api={topAnime} />
      </section>
<<<<<<< HEAD
=======

      {/* Rekomendasi Anime */}
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recommendedAnime} />
      </section>
>>>>>>> cba5020 (add dashboard)
    </>
  )
}

export default Page;
