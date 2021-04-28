import { shallow, render } from "enzyme"
import App from "./App"

it("renders without crashing", () => {
    shallow(<App />)
})

it("renders button to fetch stocks", () => {
    const wrapper = render(<App />)
    expect(wrapper.find(".button-fetch-data")).toBeTruthy()
})
