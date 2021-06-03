import { MenuItem, Select } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { Component } from "react";
import { RouteComponentProps } from "react-router";
import { UserType } from "../../../Models/UserModel";
import store from "../../../Redux/Store";
import notify from "../../../Services/Notification";
import darkTheme from "../../SharedArea/CreateMuiTheme/CreateMuiTheme";
import GetCustomerCoupons from "../GetCustomerCoupons/GetCustomerCoupons";
import GetCustomerCouponsByCategory from "../GetCustomerCouponsByCategory/GetCustomerCouponsByCategory";
import GetCustomerCouponsByMaxPrice from "../GetCustomerCouponsByMaxPrice/GetCustomerCouponsByMaxPrice";
import GetCustomerDetails from "../GetCustomerDetails/GetCustomerDetails";
import PurchaseCoupon from "../PurchaseCoupon/PurchaseCoupon";
import "./CustomerMenu.scss";

interface CustomerMenuState {
  methodToShow: string;
}

interface CompanyMenuProps extends RouteComponentProps {}

class CustomerMenu extends Component<CompanyMenuProps, CustomerMenuState> {
  public constructor(props: CompanyMenuProps) {
    super(props);
    this.state = {
      methodToShow: null,
    };
  }

  componentDidMount() {
    if (store.getState().authState.user?.userType !== UserType.CUSTOMER) {
      notify.error(
        "please log in as company in order to access the Company Menu"
      );
      this.props.history.push("/home");
    }
  }

  public render(): JSX.Element {
    return (
      <ThemeProvider theme={darkTheme}>
        <div className="CustomerMenu">
          <Select
            variant="filled"
            fullWidth
            onChange={(selectItem) => {
              this.setState({ methodToShow: String(selectItem.target.value) });
            }}
          >
            <MenuItem value="PurchaseCoupon">Purchase Coupon</MenuItem>
            <MenuItem value="GetCustomerCoupons">All your Coupons</MenuItem>
            <MenuItem value="GetCustomerCouponsByCategory">
              Your Coupons by Category
            </MenuItem>
            <MenuItem value="GetCustomerCouponsByMaxPrice">
              Your Coupons by Max Price
            </MenuItem>
            <MenuItem value="GetCustomerDetails">Your Details</MenuItem>
          </Select>

          <div className="methodToShow">
            {this.state.methodToShow === "PurchaseCoupon" && <PurchaseCoupon />}
            {this.state.methodToShow === "GetCustomerCoupons" && (
              <GetCustomerCoupons />
            )}
            {this.state.methodToShow === "GetCustomerCouponsByCategory" && (
              <GetCustomerCouponsByCategory />
            )}
            {this.state.methodToShow === "GetCustomerCouponsByMaxPrice" && (
              <GetCustomerCouponsByMaxPrice />
            )}
            {this.state.methodToShow === "GetCustomerDetails" && (
              <div>
                <GetCustomerDetails />
              </div>
            )}
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default CustomerMenu;
