import { Component } from "react";
import { RouteComponentProps } from "react-router";
import { UserType } from "../../../Models/UserModel";
import store from "../../../Redux/Store";
import notify from "../../../Services/Notification";
import GetCustomerCoupons from "../GetCustomerCoupons/GetCustomerCoupons";
import GetCustomerCouponsByCategory from "../GetCustomerCouponsByCategory/GetCustomerCouponsByCategory";
import GetCustomerCouponsByMaxPrice from "../GetCustomerCouponsByMaxPrice/GetCustomerCouponsByMaxPrice";
import GetCustomerDetails from "../GetCustomerDetails/GetCustomerDetails";
import PurchaseCoupon from "../PurchaseCoupon/PurchaseCoupon";
import "./CustomerMenu.scss";

interface CustomerMenuState {
  purchaseCoupon: boolean;
}

interface CompanyMenuProps extends RouteComponentProps {}

class CustomerMenu extends Component<CompanyMenuProps, CustomerMenuState> {
  public constructor(props: CompanyMenuProps) {
    super(props);
    this.state = {
      purchaseCoupon: false,
    };
  }

  componentDidMount() {
    if (store.getState().authState.user?.userType !== UserType.CUSTOMER) {
      notify.error("please log in as company in order to access the Company Menu");
      this.props.history.push("/home");
    }
  }

  public render(): JSX.Element {
    return (
      <div className="CustomerMenu">
        <PurchaseCoupon />
        <GetCustomerCoupons />
        <br/>
        <GetCustomerCouponsByCategory />
        <GetCustomerCouponsByMaxPrice />
        <GetCustomerDetails />
      </div>
    );
  }
}

export default CustomerMenu;
