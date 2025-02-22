import Button from "react-bootstrap/Button";


export const LandingLayout = () => {
    return (
        <div className="landing-layout">

            <style type="text/scss">
                {`
                .btn-primary {
                    background-color: $primary;
                    color: $bg-color;
                }
            `}

            </style>

            <h1>LandingLayout</h1>

            <p>This is the LandingLayout</p>

            <Button variant="primary">
                Click me!
            </Button>

            <Button variant="secondary">
                Click me!
            </Button>


        </div>
    )
}
