import { Component } from "react";
import { CouponModel } from "../../../Models/CouponModel";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import notify from "../../../Services/Notification";
import CouponCard from "../../SharedArea/CouponCard/CouponCard";

interface GetCompanyCouponsState {
  coupons: CouponModel[];
}

class GetCompanyCoupons extends Component<{}, GetCompanyCouponsState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      coupons: [],
    };
  }

  public async componentDidMount() {
    try {
      const response = await jwtAxios.get<CouponModel[]>(
        globals.urls.company + "get-coupons"
      );
      this.setState({ coupons: response.data });
    } catch (err) {
      notify.error(err);
    }
  }

  public render(): JSX.Element {
    return (
      <div className="GetCompanyCoupons">
        <CouponCard coupons={this.state.coupons} />
      </div>
    );
  }
}

export default GetCompanyCoupons;
