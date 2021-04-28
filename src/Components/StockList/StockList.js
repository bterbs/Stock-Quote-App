import React from "react"

import "./StockList.css"

import Stock from "../Stock/Stock"

function StockList(props) {
    return (
        <div className="StockList">
            {props.stocks.map((stock, index) => {
                return (
                    <Stock
                        key={index}
                        stock={stock}
                        quote={props.stockQuote}
                        onRemove={props.onRemove}
                        onFetchQuote={props.onFetchQuote}
                    />
                )
            })}
        </div>
    )
}

export default StockList
