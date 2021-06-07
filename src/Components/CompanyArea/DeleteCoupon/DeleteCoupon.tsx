import { Button, ButtonGroup, TextField, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { CouponModel } from "../../../Models/CouponModel";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import notify from "../../../Services/Notification";

function DeleteCoupon(): JSX.Element {
  const { register, handleSubmit } = useForm<CouponModel>();

  async function send(coupon: CouponModel) {
    try {
      await jwtAxios.delete(globals.urls.company + "delete/" + coupon.id);
      notify.success("coupon with id: " + coupon.id + " has been deleted.");
    } catch (err) {
      notify.error(err);
    }
  }

  return (
    <form className="DeleteCoupon Box" onSubmit={handleSubmit(send)}>
      <Typography align="center" variant="h2">
        Delete Coupon
      </Typography>

      <TextField
        {...register("id")}
        label="Coupon ID"
        variant="outlined"
        type="number"
        required
        fullWidth
      />
      <br />
      <br />

      <ButtonGroup variant="text" fullWidth>
        <Button type="submit" color="primary">
          Send
        </Button>
        <Button type="reset" color="secondary">
          Clear
        </Button>
      </ButtonGroup>
    </form>
  );
}

export default DeleteCoupon;
