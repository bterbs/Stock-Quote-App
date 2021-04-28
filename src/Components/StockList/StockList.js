import React from "react"

import "./StockList.css"

import Stock from "../Stock/Stock"

class StockList extends React.Component {
    render() {
        return (
            <div className="StockList">
                {this.props.stocks.map((stock, index) => {
                    return (
                        <Stock
                            key={index}
                            stock={stock}
                            onRemove={this.props.onRemove}
                        />
                    )
                })}
            </div>
        )
    }
}

export default StockList
