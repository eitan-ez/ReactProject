import { Component } from "react";
import { RouteComponentProps } from "react-router";
import { UserType } from "../../../../Models/UserModel";
import AddCoupon from "../AddCoupon";
import "./CompanyMenu.scss";
import DeleteCoupon from "../../DeleteCoupon/DeleteCoupon";
import UpdateCoupon from "../../UpdateCoupon/UpdateCoupon";
import GetCompanyCoupons from "../../GetCompanyCoupons/GetCompanyCoupons";
import GetCompanyCouponsByMaxPrice from "../../GetCompanyCouponsByMaxPrice/GetCompanyCouponsByMaxPrice";
import GetCompanyCouponsByCategory from "../../GetCompanyCouponsByCategory/GetCompanyCouponsByCategory";
import GetCompanyDetails from "../../GetCompanyDetails/GetCompanyDetails";

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
        <UpdateCoupon />
        <br />
       <DeleteCoupon />
        <br />
       <GetCompanyCoupons />
       <GetCompanyCouponsByCategory />
       <GetCompanyCouponsByMaxPrice />
       <GetCompanyDetails />
      </div>
    );
  }
}

export default CompanyMenu;
