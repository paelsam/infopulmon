import Button from "react-bootstrap/Button";
import { Header } from "../../shared/components/Header";


export const LandingLayout = () => {
    return (
        <div className="landing-layout">
            <Header />

            <h1>LandingLayout</h1>

            <p>This is the LandingLayout</p>

            <Button variant="primary">
                Click me!
            </Button>

            <Button variant="secondary">
                Click me!
            </Button>

            <Button variant="warning">
                Click me!
            </Button>


        </div>
    )
}
