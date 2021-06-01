import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
} from "@material-ui/core";
import { Component } from "react";
import CompanyModel from "../../../Models/CompanyModel";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import notify from "../../../Services/Notification";
import darkTheme from "../../SharedArea/CreateMuiTheme";

interface CompaniesTableState {
  companies: CompanyModel[];
}

class CompaniesTable extends Component<{}, CompaniesTableState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      companies: [],
    };
  }

  public async componentDidMount() {
    try {
      const response = await jwtAxios.get<CompanyModel[]>(
        globals.urls.adminGet + "all-companies"
      );
      this.setState({ companies: response.data });
    } catch (err) {
      notify.error(err);
    }
  }

  public render(): JSX.Element {
    return (
        <ThemeProvider theme={darkTheme}>
          <Paper>
            <TableContainer>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableCell>Name: </TableCell>
                  <TableCell>Email: </TableCell>
                </TableHead>
                <TableBody>
                  {this.state.companies.map((company) => (
                    <TableRow key={company.id}>
                      <TableCell>{company.name}</TableCell>
                      <TableCell>{company.email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </ThemeProvider>
    );
  }
}

export default CompaniesTable;
