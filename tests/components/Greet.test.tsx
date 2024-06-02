import {render, screen} from "@testing-library/react"
import Greet from "../../src/components/Greet"

describe("Greet", ()=> {
    it("should render name when provided", ()=> {
        render(<Greet name="William"/>);
        const Heading = screen.getByRole("heading");
        expect(Heading).toHaveTextContent(/William/i)
        
    })

    it("should render button when name is not provided", () => {
        render(<Greet name = ""/>);
        const Button = screen.getByRole("button");
        expect(Button).toBeInTheDocument();
    })
})