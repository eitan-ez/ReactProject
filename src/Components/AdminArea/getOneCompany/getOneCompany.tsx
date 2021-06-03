import {
  Button,
  ButtonGroup,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CompanyModel from "../../../Models/CompanyModel";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import notify from "../../../Services/Notification";
import darkTheme from "../../SharedArea/CreateMuiTheme/CreateMuiTheme";
import "./getOneCompany.css";

function GetOneCompany(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyModel>();
  const [company, setCompany] = useState(null);

  return (
    <ThemeProvider theme={darkTheme}>
      <form
        className="getOneCompany Box"
        onSubmit={handleSubmit(async (sendCompany: CompanyModel) => {
          try {
            const response = await jwtAxios.get<CompanyModel>(
              globals.urls.adminGet + "one-company/" + sendCompany.id
            );
            const companySent = response.data;
            setCompany(companySent);
          } catch (err) {
            notify.error(err);
          }
        })}
      >
        <Typography align="center" variant="h2" >
          Get Company Details
        </Typography>

        <TextField
          {...register("id", {
            min: { value: 0, message: "Company ID must be a positive number" },
          })}
          label="Company ID"
          variant="outlined"
          type="number"
          required
          fullWidth
        />
        {errors.id && <span className="ErrorMessage">{errors.id.message}</span>}

        <br />
        <br />
        <ButtonGroup variant="text" fullWidth>
          <Button type="submit" color="primary" variant="contained">
            Send
          </Button>
          <Button
            type="reset"
            color="secondary"
            variant="contained"
            onClick={() => setCompany(null)}
          >
            Clear
          </Button>
        </ButtonGroup>
        {company != null && (
          <div className="companyDetails">
            <br /> name = {company.name}
            <br />
            <br /> email = {company.email}
            <br />
            <br /> password = {company.password}
            <br />
          </div>
        )}
      </form>
    </ThemeProvider>
  );
}

export default GetOneCompany;
