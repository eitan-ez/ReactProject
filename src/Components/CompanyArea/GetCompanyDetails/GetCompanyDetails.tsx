import { Button, Typography } from "@material-ui/core";
import { useState } from "react";
import CompanyModel from "../../../Models/CompanyModel";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import notify from "../../../Services/Notification";
import "./GetCompanyDetails.css";

function GetCompanyDetails(): JSX.Element {
  const [company, setCompany] = useState(null);

  return (
    <>
      <Typography variant="h2" className="Headline">
        Get Company Details
      </Typography>

      <Button
        onClick={async () => {
          try {
            const response = await jwtAxios.get<CompanyModel>(
              globals.urls.company + "company"
            );
            const companySent = response.data;
            setCompany(companySent);
          } catch (err) {
            notify.error(err);
          }
        }}
        color="primary"
      >
        Get This Company Details
      </Button>
      <div>
        {company != null && (
          <span>
            Name = {company.name}, email = {company.email}, password = {company.password}
          </span>
        )}
      </div>
    </>
  );
}

export default GetCompanyDetails;
