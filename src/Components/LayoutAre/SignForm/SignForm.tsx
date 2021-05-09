import { Button, ButtonGroup, TextField, Typography } from "@material-ui/core";
import "./SignForm.css";

function SignForm(): JSX.Element {
    return (
        <div className="SignForm Box" >
			<Typography variant="h2" className="Headline">Sign in</Typography>

            <TextField label="Email" variant="outlined" className="TextBox" />
            <br />

            <TextField label="Password" variant="outlined" type="password" className="TextBox" />
            <br />

            <ButtonGroup variant="outlined" fullWidth>
                <Button color="primary">Send</Button>
                <Button color="secondary">Cancel</Button>
            </ButtonGroup>

        </div>
    );
}

export default SignForm;
