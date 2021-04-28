import React from "react"
import "./App.css"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import { Button, Paper } from "@material-ui/core"
import StockList from "../StockList/StockList"
const API_KEY = `${process.env.REACT_APP_STOCK_API_KEY}`
class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            stocks: [],
            stockQuote: {
                symbol: "",
                stockPrice: ""
            },
            error: null
        }

        this.fetchStocks = this.fetchStocks.bind(this)
        this.removeStock = this.removeStock.bind(this)
        this.fetchStockQuote = this.fetchStockQuote.bind(this)
    }

    fetchStocks() {
        fetch(
            `https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${API_KEY}`
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data.slice(0, 50))
                this.setState({
                    stocks: data.slice(0, 50)
                })
            })
            .catch((error) => this.setState({ error }))
    }

    fetchStockQuote(stock) {
        console.log("stock symbole is " + stock)
        const stockSymbol = stock
        fetch(
            `https://finnhub.io/api/v1/quote?symbol=${stock}&token=${API_KEY}`
        )
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    stockQuote: {
                        symbol: `${stockSymbol}`,
                        stockPrice: data.c
                    }
                })
                console.log(data)
            })
            .catch((error) => this.setState({ error }))
    }

    removeStock(stock) {
        console.log(this.state.stocks)
        let stocks = this.state.stocks
        stocks = stocks.filter(
            (currentStock) => currentStock.symbol !== stock.symbol
        )

        this.setState({ stocks: stocks })
    }

    render() {
        return (
            <Container maxWidth="md" className="App">
                <Paper>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Stocks4U ✨
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Return a semi-editable list of stocks from the{" "}
                        <a href="https://finnhub.io/">Finnhub Stock API</a>.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        className="button-fetch-data"
                        onClick={this.fetchStocks}
                    >
                        Get Stocks!
                    </Button>
                </Paper>
                <Paper>
                    <StockList
                        stocks={this.state.stocks}
                        stockQuote={this.state.stockQuote}
                        onRemove={this.removeStock}
                        onFetchQuote={this.fetchStockQuote}
                    />
                </Paper>
            </Container>
        )
    }
}
export default App
