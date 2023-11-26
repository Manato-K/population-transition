import React from "react"
import words from "@/constans/language/ja/commons"

const defaultHeader = ():JSX.Element => {
    return (
        <header>
            <p>{ words.HEADER_TITLE }</p>
        </header>
    )
}

export default defaultHeader