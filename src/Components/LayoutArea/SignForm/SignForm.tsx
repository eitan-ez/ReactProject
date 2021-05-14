import { Button, ButtonGroup, TextField, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import "./SignForm.css";

type formValues = {
  email: string;
  password: string;
};

function SignForm(): JSX.Element {
  const { register, handleSubmit } = useForm<formValues>();
  return (
    <form
      className="SignForm Box"
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <Typography variant="h2" className="Headline">
        Sign in
      </Typography>

      <TextField
        {...register("email")}
        label="Email"
        variant="outlined"
        className="TextBox"
        fullWidth
      />
      <br />

      <TextField
        {...register("password")}
        label="Password"
        variant="outlined"
        type="password"
        className="TextBox"
        fullWidth
      />
      <br />

      <ButtonGroup variant="text" fullWidth>
        <Button type="submit" color="primary">
          Send
        </Button>
        <Button type="reset" color="secondary">Cancel</Button>
      </ButtonGroup>
    </form>
  );
}

export default SignForm;
