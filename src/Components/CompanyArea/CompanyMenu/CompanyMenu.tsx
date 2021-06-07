import { Component } from "react";
import { RouteComponentProps } from "react-router";
import AddCoupon from "../AddCoupon/AddCoupon";
import "./CompanyMenu.css";
import DeleteCoupon from "../DeleteCoupon/DeleteCoupon";
import UpdateCoupon from "../UpdateCoupon/UpdateCoupon";
import GetCompanyCoupons from "../GetCompanyCoupons/GetCompanyCoupons";
import GetCompanyCouponsByMaxPrice from "../GetCompanyCouponsByMaxPrice/GetCompanyCouponsByMaxPrice";
import GetCompanyCouponsByCategory from "../GetCompanyCouponsByCategory/GetCompanyCouponsByCategory";
import GetCompanyDetails from "../GetCompanyDetails/GetCompanyDetails";
import { InputLabel, MenuItem, Select, ThemeProvider, Typography } from "@material-ui/core";
import darkTheme from "../../SharedArea/CreateMuiTheme/CreateMuiTheme";
import store from "../../../Redux/Store";
import { UserType } from "../../../Models/UserModel";
import notify from "../../../Services/Notification";

interface CompanyMenuState {
  methodToShow: string;
}

interface CompanyMenuProps extends RouteComponentProps {}

class CompanyMenu extends Component<CompanyMenuProps, CompanyMenuState> {
  public constructor(props: CompanyMenuProps) {
    super(props);
    this.state = {
      methodToShow: null,
    };
  }

  componentDidMount() {
    if (store.getState().authState.user?.userType !== UserType.COMPANY) {
      notify.error("please log in as company in order to access the Company Menu");
      this.props.history.push("/home");
    }
  }

  public render(): JSX.Element {
    return (
      <ThemeProvider theme={darkTheme}>
        <div className="CompanyMenu">
          <Typography variant="h2" align="center">Company Area</Typography>
          <Typography variant="h4" align="center">Choose method from the menu below</Typography>
          <br/>
          <br/>
          <InputLabel>Methods List:</InputLabel>
          <Select
            variant="filled"
            fullWidth
            onChange={(selectItem) => {
              this.setState({ methodToShow: String(selectItem.target.value) });
            }}
          >
            <InputLabel>Methods list</InputLabel>
            <MenuItem value="AddCoupon">Add Coupon</MenuItem>
            <MenuItem value="UpdateCoupon">Update Coupon</MenuItem>
            <MenuItem value="DeleteCoupon">Delete Coupon</MenuItem>
            <MenuItem value="GetCompanyCoupons">All of Your Coupons</MenuItem>
            <MenuItem value="GetCompanyCouponsByCategory">
              Coupons By Category
            </MenuItem>
            <MenuItem value="GetCompanyCouponsByMaxPrice">
              Coupons By Max Price
            </MenuItem>
            <MenuItem value="GetCompanyDetails">Company Details</MenuItem>
          </Select>

          <div className="methodToShow">
            {this.state.methodToShow === "AddCoupon" && <AddCoupon />}
            {this.state.methodToShow === "UpdateCoupon" && <UpdateCoupon />}
            {this.state.methodToShow === "DeleteCoupon" && <DeleteCoupon />}
            {this.state.methodToShow === "GetCompanyCoupons" && (
              <GetCompanyCoupons />
            )}
            {this.state.methodToShow === "GetCompanyCouponsByCategory" && (
              <GetCompanyCouponsByCategory />
            )}
            {this.state.methodToShow === "GetCompanyCouponsByMaxPrice" && (
              <GetCompanyCouponsByMaxPrice />
            )}
            {this.state.methodToShow === "GetCompanyDetails" && (
              <GetCompanyDetails />
            )}
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default CompanyMenu;
