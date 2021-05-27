import {
  Button,
  ButtonGroup,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { CouponModel } from "../../../Models/CouponModel";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import notify from "../../../Services/Notification";
import "./AddCoupon.css";

function AddCoupon(): JSX.Element {
  const { register, handleSubmit } = useForm<CouponModel>();
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, "0");
  const mm = String(now.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = now.getFullYear();
  const today: string = mm + "/" + dd + "/" + yyyy;

  async function send(coupon: CouponModel) {
    try {
      await jwtAxios.post<CouponModel>(globals.urls.company + "add", coupon);

      notify.success("coupon has been added.");
    } catch (err) {
      notify.error(err);
    }
  }

  return (
    <form className="AddCoupon Box" onSubmit={handleSubmit(send)}>
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
        defaultValue={today}
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
      <Select {...register("category")}>
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

export default AddCoupon;
