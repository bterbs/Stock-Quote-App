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
            isLoading: true,
            stocks: [],
            error: null
        }

        this.fetchStocks = this.fetchStocks.bind(this)
    }

    fetchStocks() {
        fetch(
            `https://api.polygon.io/v2/reference/tickers?sort=ticker&perpage=50&page=1&apiKey=${API_KEY}`
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data.tickers)
                this.setState({
                    stocks: data.tickers,
                    isLoading: false
                })
            })
            .catch((error) => this.setState({ error, isLoading: false }))
    }

    render() {
        return (
            <Container maxWidth="md" className="App">
                <Paper>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Stocks4U ✨
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Return an editable list of stocks from the{" "}
                        <a href="https://finnhub.io/docs/api/introduction">
                            Finnhub Stocks API
                        </a>
                        .
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
                    <StockList />
                </Paper>
            </Container>
        )
    }
}
export default App
