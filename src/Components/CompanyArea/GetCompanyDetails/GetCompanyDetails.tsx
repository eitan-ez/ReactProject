import { Typography } from "@material-ui/core";
import { Component } from "react";
import CompanyModel from "../../../Models/CompanyModel";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import notify from "../../../Services/Notification";
import "./GetCompanyDetails.css";

interface GetCompanyDetailsState {
  company: CompanyModel;
}

class GetCompanyDetails extends Component<{}, GetCompanyDetailsState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      company: null,
    };
  }

  public async componentDidMount() {
    try {
      const response = await jwtAxios.get<CompanyModel>(
        globals.urls.company + "company"
      );
      const companySent = response.data;
      this.setState({ company: companySent });
    } catch (err) {
      notify.error(err);
    }
  }

  public render(): JSX.Element {
    return (
      <div className="GetCompanyDetails">
        <Typography align="center" variant="h2">Get Company Details</Typography>
        {this.state.company != null && (
          <div>
            <br /> Name = {this.state.company.name}
            <br /> email = {this.state.company.email}
            <br /> password ={this.state.company.password}
          </div>
        )}
      </div>
    );
  }
}
export default GetCompanyDetails;
