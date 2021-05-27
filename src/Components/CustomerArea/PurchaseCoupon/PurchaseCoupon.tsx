import { Button, ButtonGroup, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import notify from "../../../Services/Notification";
import "./PurchaseCoupon.css";

interface FormToSend{
    couponId: number;
}

function PurchaseCoupon(): JSX.Element {
  const { register, handleSubmit } = useForm<FormToSend>();
  async function send(couponId: FormToSend) {
    try {
      const response = await jwtAxios.put(
        globals.urls.customerPurchase + "/" + couponId.couponId
      );
      notify.success("you have been successfully bought the coupon");
    } catch (err) {
      notify.error(err);
    }
  }

  return (
    <form className="PurchaseCoupon Box" onSubmit={handleSubmit(send)}>
      <TextField
        className="button"
        {...register("couponId")}
        label="Coupon ID"
        variant="filled"
        fullWidth
      />
      
      <ButtonGroup variant="text" fullWidth>
        <Button type="submit" color="primary" variant="outlined">
          Send
        </Button>
        <Button type="reset" color="secondary" variant="outlined">
          clear
        </Button>
      </ButtonGroup>
    </form>
  );
}

export default PurchaseCoupon;
