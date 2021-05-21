import { Button, ButtonGroup, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CompanyModel from "../../../Models/CompanyModel";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import "./getOneCompany.css";

function GetOneCompany(): JSX.Element {
  const { register, handleSubmit } = useForm<CompanyModel>();
  const [company, setCompany] = useState(null);

  return (
    <>
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
            console.log(err);
          }
        })}
      >
        <Typography variant="h2" className="Headline">
          Get Company Details
        </Typography>

        <TextField
          {...register("id")}
          label="Company ID"
          variant="outlined"
          fullWidth
        />
        <br />
        <br />
        <ButtonGroup variant="text" fullWidth>
          <Button type="submit" color="primary">
            Send
          </Button>
          <Button type="reset" color="secondary">
            Cancel
          </Button>
        </ButtonGroup>
      </form>
      <div>
      {company != null && <span>name = {company.name}, email = {company.email}, password = {company.password} </span> }
      </div>
    </>
  );
}

export default GetOneCompany;
