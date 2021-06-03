import { Button, MenuItem, Select, TextField } from "@material-ui/core";
import { Component, useState } from "react";
import { useForm } from "react-hook-form";
import { CouponModel } from "../../../Models/CouponModel";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import notify from "../../../Services/Notification";
import CouponCard from "../../SharedArea/CouponCard/CouponCard";

interface enteredPrice {
  maxPrice: number;
}

function GetCustomerCouponsByMaxPrice(): JSX.Element {
  const [coupons, setCoupons] = useState<Array<CouponModel>>([]);
  const [couponsReplacement, setCouponsReplacement] = useState(
    "no price is chosen yet."
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<enteredPrice>();

  async function send(price: enteredPrice) {
    try {
      const response = await jwtAxios.get<CouponModel[]>(
        globals.urls.customer + "coupons-by-price/" + price.maxPrice
      );
      // let the user know he has no coupons in the category
      if (response.data.length === 0) {
        setCouponsReplacement("You have no coupons under this price");
      } else {
        setCouponsReplacement("");
      }
      setCoupons(response.data);
    } catch (err) {
      notify.error(err);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(send)}>
        <TextField
          {...register("maxPrice", {
            pattern: {
              value: /^\d*\.?\d*$/,
              message: "Must be a valid number",
            },
            min: {
              value: 0,
              message:
                "last time i checked, we didn't offer to pay customers (the price is negative)",
            },
          })}
          label="Maximum Price"
          variant="standard"
          type="text"
          required
        />
        {errors.maxPrice && (
          <span className="ErrorMessage">
            <br />
            {errors.maxPrice.message}
            <br />
          </span>
        )}
        <Button type="submit">send</Button>
      </form>
      <ul className="CustomerMenu">
        <CouponCard coupons={coupons} />
        {couponsReplacement}
      </ul>
    </>
  );
}

export default GetCustomerCouponsByMaxPrice;
