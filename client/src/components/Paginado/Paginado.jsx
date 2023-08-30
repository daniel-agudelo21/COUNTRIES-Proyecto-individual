const Paginado = ({ page, setPage, currentPage, setCurrentPage, maxPages }) => {
    const nextPage = () => {
        if (currentPage + 1 <= maxPages) {
            setPage(page + 1)
            setCurrentPage(currentPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage - 1 >= 1) {
            setPage(page - 1)
            setCurrentPage(currentPage - 1)
        }
    }

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= maxPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => {
                        setPage(i);
                        setCurrentPage(i);
                    }}
                    style={{ fontWeight: i === currentPage ? "bold" : "normal" }}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    }

    return (
        <div>
            {
                currentPage > 1
                    ? (<button onClick={prevPage}>◁</button>)
                    : (<span></span>)
            }
            {renderPageNumbers()}
            {
                currentPage < maxPages
                    ? (<button onClick={nextPage}>▷</button>)
                    : (<span></span>)
            }
        </div>
    )
}

export default Paginado