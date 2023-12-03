import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";

const Page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`);
  const topAnime = await response.json();

  return (
    <>
      {/* Show All Top Anime */}
      <section>
        <Header title="Paling Populer" />
        <AnimeList api={topAnime} />
      </section>
    </>
  )
}

export default Page;