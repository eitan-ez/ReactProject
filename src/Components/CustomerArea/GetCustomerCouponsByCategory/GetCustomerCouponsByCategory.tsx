import { MenuItem, Select } from "@material-ui/core";
import { Component } from "react";
import { CouponModel } from "../../../Models/CouponModel";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import notify from "../../../Services/Notification";
import CouponCard from "../../SharedArea/CouponCard/CouponCard";

interface GetCustomerCouponsByCategoryState {
  coupons: CouponModel[];
}

class GetCustomerCouponsByCategory extends Component<
  {},
  GetCustomerCouponsByCategoryState
> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      coupons: [],
    };
  }

  public render(): JSX.Element {
    return (
      <>
        <Select
          variant="filled"
          fullWidth
          onChange={async (selectItem) => {
            try {
              const response = await jwtAxios.get<CouponModel[]>(
                globals.urls.customer +
                  "coupons-by-category/" +
                  selectItem.target.value
              );
              this.setState({ coupons: response.data });
            } catch (err) {
              notify.error(err);
            }
          }}
        >
          <MenuItem value="FOOD">Food</MenuItem>
          <MenuItem value="ELECTRICITY">Electricity</MenuItem>
          <MenuItem value="RESTAURANT">Restaurant</MenuItem>
          <MenuItem value="VACATION">Vacation</MenuItem>
          <MenuItem value="GARMENT">Garment</MenuItem>
          <MenuItem value="BOOK">Book</MenuItem>
        </Select>

        <ul className="CustomerMenu">
          <CouponCard coupons={this.state.coupons} />
        </ul>
      </>
    );
  }
}

export default GetCustomerCouponsByCategory;
