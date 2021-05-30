import { Button, ButtonGroup, MenuItem, Select, TextField, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { CouponModel } from "../../../Models/CouponModel";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import notify from "../../../Services/Notification";
import "./UpdateCoupon.css";

function UpdateCoupon(): JSX.Element {
  const { register, handleSubmit } = useForm<CouponModel>();

  async function send(coupon: CouponModel) {
    try {
      await jwtAxios.post<CouponModel>(globals.urls.company + "update", coupon);
      notify.success("coupon has been added.");
    } catch (err) {
      notify.error(err);
    }
  }

  return (
    <form className="UpdateCoupon Box" onSubmit={handleSubmit(send)}>
      <Typography variant="h2" className="Headline" color="textPrimary">
        Add new Coupon
      </Typography>

      <TextField
        {...register("title")}
        label="Title"
        variant="standard"
        type="text"
      />

      <TextField
        {...register("amount")}
        label="Amount"
        variant="standard"
        type="number"
      />

      <TextField
        {...register("price")}
        label="Price"
        variant="standard"
        type="numeric"
      />

      <TextField
        {...register("description")}
        label="Description"
        variant="standard"
      />

      <br />
      <br />
      <TextField
        {...register("startDate")}
        label="Set Start Date"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        {...register("endDate")}
        label="Set End Date"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <br />
      <Select {...register("category")} className="select">
        <MenuItem value="FOOD">Food</MenuItem>
        <MenuItem value="ELECTRICITY">Electricity</MenuItem>
        <MenuItem value="RESTAURANT">Restaurant</MenuItem>
        <MenuItem value="VACATION">Vacation</MenuItem>
        <MenuItem value="GARMENT">Garment</MenuItem>
        <MenuItem value="BOOK">Book</MenuItem>
      </Select>
      <br />
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

export default UpdateCoupon;
