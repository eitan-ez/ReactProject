import { Button, ButtonGroup, TextField, Typography } from "@material-ui/core";
import { AxiosResponse } from "axios";
import { useForm } from "react-hook-form";
import CompanyModel from "../../../Models/CompanyModel";
import store from "../../../Redux/Store";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import notify from "../../../Services/Notification";
import "./DeleteCompany.css";

function DeleteCompany(): JSX.Element {
  const { register, handleSubmit } = useForm<CompanyModel>();

  async function send(company: CompanyModel) {
    try {
      const response = await jwtAxios.delete(
        globals.urls.adminDeleteCompany + "/" + company.id
      );
      notify.success("company with id: " + company.id + " has been deleted.");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form className="DeleteCompany Box" onSubmit={handleSubmit(send)}>
      <Typography variant="h2" className="Headline">
        Delete a Company
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
  );
}
export default DeleteCompany;
