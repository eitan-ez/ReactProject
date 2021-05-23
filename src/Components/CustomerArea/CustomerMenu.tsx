import { Component } from "react";
import "./CustomerMenu.css";

interface CustomerMenuState {}

class CustomerMenu extends Component<{}, CustomerMenuState> {
  public constructor(props: {}) {
    super(props);
    this.state = {};
  }

  
  public render(): JSX.Element {
    return (
      <div className="CustomerMenu">
        purchaseCoupon getCoupons getCouponsByCategory getCouponsByMaxPrice
        getCustomerDetails
      </div>
    );
  }
}

export default CustomerMenu;
