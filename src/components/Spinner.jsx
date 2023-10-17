import React from "react"

function Spinner() {
    return (
        <>
            <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <style jsx>{`
                .spinner {
                    background: #000;
                }
                .spinner div{
                    display: grid;
                    grid-template-column: 40px 40px;
                }
            `}</style>
        </>
    )
}

export default Spinner
