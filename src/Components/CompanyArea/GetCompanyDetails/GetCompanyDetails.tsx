import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import CompanyModel from "../../../Models/CompanyModel";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import notify from "../../../Services/Notification";
import "./GetCompanyDetails.css";

function GetCompanyDetails(): JSX.Element {
  const [company, setCompany] = useState(null);

  useEffect(() => {
    // nested func in order to use "async" in useEffect
    async function goToServer() {
      try {
        const response = await jwtAxios.get<CompanyModel>(
          globals.urls.company + "company"
        );
        const companySent = response.data;
        setCompany(companySent);
      } catch (err) {
        notify.error(err);
      }
    }
    goToServer();
  });

  return (
    <div className="GetCompanyDetails">
      <Typography variant="h2" className="Headline">
        Get Company Details
      </Typography>
      {company != null && (
        <div>
          <br /> Name = {company.name}
          <br /> email = {company.email}
          <br /> password ={company.password}
        </div>
      )}
    </div>
  );
}

export default GetCompanyDetails;
