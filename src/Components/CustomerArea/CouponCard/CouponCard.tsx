import { Component } from "react";
import { CouponModel } from "../../../Models/CouponModel";

interface CouponCardProps {
  coupon: CouponModel;
}

class CouponCard extends Component<CouponCardProps> {
  public constructor(props: CouponCardProps) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <li className="menuCard">
        <div className="menuCard__inner">
          <div className="menuCard__shape">
            <div className="menuCard__trace">
              <div className="menuCard__name">
                <h5>{this.props.coupon.title}</h5>
                <p>{this.props.coupon.description}</p>
                <p>category: {this.props.coupon.category}</p>
                <p>end date: {this.props.coupon.endDate}</p>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default CouponCard;
