import {render ,screen} from "@testing-library/react"
import UserAccount from "../../src/components/UserAccount"
import { User } from "../../src/entities"

describe("UserAccount", () => {
    it("should render User name",() => {
        const user: User = {id:1, name:"Nagendra"}
        render(<UserAccount user = {user} />)
       expect(screen.getByText(user.name)).toBeInTheDocument()
    })

    it("should render edit button", () => {
        const user: User = {id:1, name:"Nagendra", isAdmin:true}
        render(<UserAccount user = {user} />);
        const btn = screen.getByRole("button");
        expect(btn).toBeInTheDocument();
        expect(btn).toHaveTextContent(/edit/i);
    })

    it("should not render edit button", () => {
        const user: User = {id:1, name:"Nagendra"}
        render(<UserAccount user = {user} />);
        const btn = screen.queryByRole("button");
        expect(btn).not.toBeInTheDocument();
       
    })



})