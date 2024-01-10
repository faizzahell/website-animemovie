const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0
    })
  }

  const handleNextPage = () => {
    setPage((prevState) => (prevState < lastPage ? prevState + 1 : prevState));
    scrollTop()
  }

  const handlePrevPage = () => {
    setPage((prevState) => (prevState > 1 ? prevState - 1 : prevState));
    scrollTop()
  }

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
      <button onClick={handlePrevPage} className="transition-all hover:text-color-accent">Prev</button>
      <p>{page} of {lastPage}</p>
      <button onClick={handleNextPage} className="transition-all hover:text-color-accent">next</button>
    </div>
  )
}

export default Pagination;