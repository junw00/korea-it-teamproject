import React, { useState } from "react";
import './pagingNumber.css'

function PagingNumber(props) {
    const [currentPage, setCurrentPage] = useState(1)

    const pageArr = new Array();
    const pageNum = props.page;
    for (let i = 0; i < pageNum; i++) {
        pageArr[i] = i + 1;
    }
    const viewPageCount = parseInt(pageArr.length / 5) + 1
    console.log(viewPageCount)
    return(
        <div className="paging-number-box">
            <button><span>&lt;&lt;</span></button>
            <button><span>&lt;</span></button>
            {pageArr.map((page) => {
                console.log(page)
                return(
                    <button><span>{page}</span></button>
                )
            })}
            <button><span>&gt;</span></button>
            <button><span>&gt;&gt;</span></button>
        </div>
    )
}

export default PagingNumber;