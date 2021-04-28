import { shallow, mount } from "enzyme"
import StockList from "./StockList"

const stocks = [
    {
        ticker: "AAPL",
        name: "Apple Inc.",
        market: "STOCKS",
        locale: "US",
        currency: "USD",
        active: true,
        primaryExch: "NGS"
    },
    {
        ticker: "$AEDAUD",
        name: "United Arab Emirates dirham - Australian dollar",
        market: "FX",
        locale: "G",
        currency: "AUD",
        active: true,
        primaryExch: "FX"
    }
]

describe("StockList", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<StockList stocks={stocks} />)
        expect(wrapper.exists()).toBe(true)
    })
    it("accepts props", () => {
        const wrapper = mount(<StockList stocks={stocks} />)
        expect(wrapper.props().stocks).toEqual(stocks)
    })
})
