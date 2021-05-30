import { MenuItem, Select } from "@material-ui/core";
import { Component } from "react";
import { CouponModel } from "../../../Models/CouponModel";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import notify from "../../../Services/Notification";
import CouponCard from "../../SharedArea/CouponCard/CouponCard";
import "./GetCompanyCouponsByCategory.css";

interface GetCompanyCouponsByCategoryState {
    coupons: CouponModel[];

}

class GetCompanyCouponsByCategory extends Component<{}, GetCompanyCouponsByCategoryState> {

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
                    globals.urls.companyGet + "coupons-by-category/" + selectItem.target.value
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
    
            <ul className="CompanyMenu">
              {this.state.coupons.map((coupon) => (
                <CouponCard key={coupon.id} coupon={coupon} />
              ))}
            </ul>
          </>
        );
      }
    }
    
export default GetCompanyCouponsByCategory;
