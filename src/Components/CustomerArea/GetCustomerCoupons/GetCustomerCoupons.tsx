import { Component } from "react";
import { CouponModel } from "../../../Models/CouponModel";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import notify from "../../../Services/Notification";
import CouponCard from "../../SharedArea/CouponCard/CouponCard";

interface GetCustomerCouponsState {
	coupons: CouponModel[];
}

class GetCustomerCoupons extends Component<{}, GetCustomerCouponsState> {

    public constructor(props: {}) {
        super(props);
        this.state = {
			coupons: []
        };
    }

    public async componentDidMount() {
                try {
            const response = await jwtAxios.get<CouponModel[]>(globals.urls.customer + "all-coupons");
            this.setState({ coupons: response.data });
        }
        catch (err) {
            notify.error(err);
        }

    }

    public render(): JSX.Element {
        return (
        
            <ul className="CustomerMenu">
				{this.state.coupons.map((coupon) => <CouponCard key={coupon.id} coupon={coupon}/>)}
            </ul>
        );
    }
}

export default GetCustomerCoupons;
