import { Component } from "react";
import { RouteComponentProps } from "react-router";
import { UserType } from "../../Models/UserModel";
import AddCoupon from "./AddCoupon/AddCoupon";
import "./CompanyMenu.scss";

interface CompanyMenuState {}

interface CompanyMenuProps extends RouteComponentProps {}

class CompanyMenu extends Component<CompanyMenuProps, CompanyMenuState> {
  public constructor(props: CompanyMenuProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // if (store.getState().authState.user?.userType !== UserType.COMPANY) {
    //   notify.error("please log in as company in order to access the Company Menu");
    //   this.props.history.push("/home");
    // }
  }

  public render(): JSX.Element {
    return (
      <div className="CompanyMenu">
        <AddCoupon />
        <br />
        updateCoupon deleteCoupon getCompanyCoupons
        getCouponsByCategory getCouponsByMaxPrice getCompanyDetails
      </div>
    );
  }
}

export default CompanyMenu;
