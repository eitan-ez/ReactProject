import { Button } from "@material-ui/core";
import { Component } from "react";
import CompanyModel from "../../../Models/CompanyModel";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import "./GetAllCompanies.css";

interface GetAllCompaniesState {
  companies: CompanyModel[];
}

class GetAllCompanies extends Component<{}, GetAllCompaniesState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      companies: [],
    };
  }

  public async getFromDb() {
    try {
      const response = await jwtAxios.get<CompanyModel[]>(
        globals.urls.adminGet + "all-companies"
      );
      this.setState({ companies: response.data });
      console.log(this.state.companies.map((p) => <span key={p.id}>Company = {p.email}</span>));
    } catch (err) {
      alert(err.message);
    }
  }

  public render(): JSX.Element {
    return (
      <div className="GetAllCompanies Box">
        <Button
          onClick={async () => {
            try {
              const response = await jwtAxios.get<CompanyModel[]>(
                globals.urls.adminGet + "all-companies"
              );
              this.setState({ companies: response.data });
              console.log(this.state);
            } catch (err) {
              alert(err.message);
            }}
          }>
          Get All Companies
        </Button>
      </div>
    );
  }
}

export default GetAllCompanies;
