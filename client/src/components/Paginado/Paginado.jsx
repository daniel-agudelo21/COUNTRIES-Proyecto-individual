import style from './Paginado.module.css'
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
                <button className={`${style.button} ${i === currentPage ? style.buttonSelect : ''}`}
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
        <div className={style.page}>
            {
                currentPage > 1
                    ? (<button className={style.prevButton } onClick={prevPage}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="m4 10l9 9l1.4-1.5L7 10l7.4-7.5L13 1z"/></svg></button>)
                    : (<span></span>)
            }
            {renderPageNumbers()}
            {
                currentPage < maxPages
                    ? (<button className={style.nextButton} onClick={nextPage}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z"/></svg></button>)
                    : (<span></span>)
            }
        </div>
    )
}

export default Paginado