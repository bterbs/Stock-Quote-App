import React from "react"
import "./App.css"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import { Button, Paper } from "@material-ui/core"
import StockList from "../StockList/StockList"

class App extends React.Component {
    render() {
        return (
            <Container maxWidth="md" className="App">
                <Paper>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Stocks4U
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
