import { shallow, mount } from "enzyme"
import Stock from "./Stock"

const stock = {
    ticker: "AAPL",
    name: "Apple Inc.",
    market: "STOCKS",
    locale: "US",
    currency: "USD",
    active: true,
    primaryExch: "NGS"
}

describe("Stock component", () => {
    test("renders", () => {
        const wrapper = shallow(<Stock stock={stock} />)

        expect(wrapper.exists()).toBe(true)
    })
    it("accepts props", () => {
        const wrapper = mount(<Stock stock={stock} />)
        expect(wrapper.props().stock).toEqual(stock)
    })
})
