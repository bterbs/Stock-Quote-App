import React from "react"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Button from "@material-ui/core/Button"
import DeleteIcon from "@material-ui/icons/Delete"

import "./Stock.css"

class Stock extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            symbol: "",
            stockPrice: ""
        }

        this.removeStock = this.removeStock.bind(this)
        this.fetchQuote = this.fetchQuote.bind(this)
    }

    removeStock(event) {
        this.props.onRemove(this.props.stock)
    }

    fetchQuote(event) {
        this.props.onFetchQuote(this.props.stock.symbol)
    }

    static getDerivedStateFromProps(props) {
        if (props.stock.symbol === props.quote.symbol) {
            const { symbol, stockPrice } = props.quote
            return { symbol, stockPrice }
        }
        return null
    }

    render() {
        return (
            <div className="Stock">
                <Accordion className="Stock-Item">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>{this.props.stock.description}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul className="details-stock">
                            <li>Symbol: {this.props.stock.symbol}</li>
                            <li>Currency: {this.props.stock.currency}</li>
                            <li>Quote: {this.state.stockPrice}</li>
                            <Button
                                variant="contained"
                                onClick={this.fetchQuote}
                            >
                                Get Quote
                            </Button>
                        </ul>
                    </AccordionDetails>
                </Accordion>
                <Button
                    className="Stock-action no-outline"
                    onClick={this.removeStock}
                    variant="outlined"
                    color="secondary"
                    endIcon={<DeleteIcon />}
                ></Button>
            </div>
        )
    }
}

export default Stock
