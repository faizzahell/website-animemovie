<<<<<<< HEAD
import { getAnimeResponse } from "@/app/libs/api-libs";
=======
import { getAnimeResponse } from "@/libs/api-libs";
>>>>>>> cba5020 (add dashboard)
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";

const Page = async({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`)

  console.log(anime);

  return (
    <>
      <div className="py-4 px-4">
        <h3 className="text-4xl text-color-primary">{anime.data.title} - {anime.data.year}</h3>
      </div>

      <div className="py-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>Peringkat</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>Rating</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>Anggota</h3>
          <p>{anime.data.members}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>Episode</h3>
          <p>{anime.data.episodes}</p>
        </div>
      </div>

      <div className="py-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
        <Image 
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full rounded object-cover"
        />
        <p className="text-xl text-color-primary text-justify">{anime.data.synopsis}</p>
      </div>

      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  )
}

export default Page;