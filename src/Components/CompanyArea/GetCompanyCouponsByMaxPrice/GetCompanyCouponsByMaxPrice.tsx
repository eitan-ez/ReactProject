import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CouponModel } from "../../../Models/CouponModel";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import notify from "../../../Services/Notification";
import CouponCard from "../../SharedArea/CouponCard/CouponCard";
import "./GetCompanyCouponsByMaxPrice.css";

interface enteredPrice {
  maxPrice: number;
}

function GetCompanyCouponsByMaxPrice(): JSX.Element {
  const [coupons, setCoupons] = useState<Array<CouponModel>>([]);
  const { register, handleSubmit } = useForm<enteredPrice>();

  async function send(price: enteredPrice) {
    try {
      const response = await jwtAxios.get<CouponModel[]>(
        globals.urls.company + "get-coupons-by-price/" + price.maxPrice
      );
      setCoupons(response.data);
    } catch (err) {
      notify.error(err);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(send)}>
        <TextField
          {...register("maxPrice")}
          label="Maximum Price"
          variant="standard"
          type="numeric"
        />
        <Button type="submit">send</Button>
      </form>
      <ul className="CompanyMenu">
        {coupons.map((c) => (
          <CouponCard key={c.id} coupon={c} />
        ))}
      </ul>
    </>
  );
}

export default GetCompanyCouponsByMaxPrice;
