import { Component } from "react";
import { RouteComponentProps } from "react-router";
import { UserType } from "../../../Models/UserModel";
import store from "../../../Redux/Store";
import GetCustomerCoupons from "../GetCustomerCoupons/GetCustomerCoupons";
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
    // if (store.getState().authState.user?.userType !== UserType.CUSTOMER) {
    //   notify.error("please log in as company in order to access the Company Menu");
    //   this.props.history.push("/home");
    // }
  }

  public render(): JSX.Element {
    console.log(store.getState().authState.user.token)
    return (
      <div className="CustomerMenu">
        <PurchaseCoupon />
        <GetCustomerCoupons />
        getCouponsByCategory getCouponsByMaxPrice getCustomerDetails
      </div>
    );
  }
}

export default CustomerMenu;
