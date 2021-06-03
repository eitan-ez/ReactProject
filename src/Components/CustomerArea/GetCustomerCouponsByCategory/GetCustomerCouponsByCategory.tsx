import { InputLabel, MenuItem, Select } from "@material-ui/core";
import { Component } from "react";
import { CouponModel } from "../../../Models/CouponModel";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import notify from "../../../Services/Notification";
import CouponCard from "../../SharedArea/CouponCard/CouponCard";

interface GetCustomerCouponsByCategoryState {
  coupons: CouponModel[];
  couponsReplacement: string;
}

class GetCustomerCouponsByCategory extends Component<
  {},
  GetCustomerCouponsByCategoryState
> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      coupons: [],
      couponsReplacement: "no category is chosen yet. what is your chosen one?"
    };
  }

  public render(): JSX.Element {
    return (
      <>
        <InputLabel>Choose Category: </InputLabel>
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
              // let the user know he has no coupons in the category
              if(response.data.length === 0){
                this.setState({couponsReplacement: "You have no coupons in this category"})
              } else {
                this.setState({couponsReplacement: ""})
              }
              this.setState({ coupons: response.data });
            } catch (err) {
              notify.error(err);
            }
          }}
        >
          <InputLabel>Category</InputLabel>
          <MenuItem value="FOOD">Food</MenuItem>
          <MenuItem value="ELECTRICITY">Electricity</MenuItem>
          <MenuItem value="RESTAURANT">Restaurant</MenuItem>
          <MenuItem value="VACATION">Vacation</MenuItem>
          <MenuItem value="GARMENT">Garment</MenuItem>
          <MenuItem value="BOOK">Book</MenuItem>
        </Select>

        <ul className="CustomerMenu">
          <CouponCard coupons={this.state.coupons} />
          {this.state.couponsReplacement}
        </ul>
      </>
    );
  }
}

export default GetCustomerCouponsByCategory;
