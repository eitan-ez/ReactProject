import { Component } from "react";
import { RouteComponentProps } from "react-router";
import { UserType } from "../../../Models/UserModel";
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
    return (
      <ul className="CustomerMenu">
          <li
          className="menu-card"
          onClick={() => this.setState({ purchaseCoupon: true })}
        >
          <div className="menu-card__inner">
            {this.state.purchaseCoupon === true ? (
              <div className="menu-card__shape">
                <div className="menu-card__method">
                <PurchaseCoupon />
                </div>
              </div>
            ) : (
              <>
                <div className="menu-card__trace">+</div>
                <div className="menu-card__name">
                  <h5>Add company</h5>
                  <p>Add a new company to the DB</p>{" "}
                </div>
              </>
            )}
          </div>
        </li>
        getCoupons getCouponsByCategory getCouponsByMaxPrice
        getCustomerDetails
      </ul>
    );
  }
}

export default CustomerMenu;
