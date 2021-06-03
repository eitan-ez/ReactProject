import {
  Button,
  ButtonGroup,
  InputLabel,
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CouponModel>();

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
      <Typography align="center" variant="h2"  color="textPrimary">
        Add new Coupon
      </Typography>
      <TextField
        {...register("title", {
          minLength: {
            value: 5,
            message: "Title must be at least 5 letters.",
          },
        })}
        label="Title"
        variant="standard"
        type="text"
        required
      />
      {errors.title && (
        <span className="ErrorMessage">{errors.title.message}</span>
      )}
      <TextField
        {...register("amount", {
          min: {
            value: 1,
            message:
              "As my teacher user to say: there can't be a negative number of apples ",
          },
        })}
        label="Amount"
        variant="standard"
        type="number"
        required
      />
      {errors.amount && (
        <span className="ErrorMessage">{errors.amount.message}</span>
      )}

      <TextField
        {...register("price", {
          pattern: {
            value: /^\D*\.?\D*$/,
            message: "Must be a valid number",
          },
          min: {
            value: 1,
            message: "price must be a positive number ",
          },
        })}
        label="Price"
        variant="standard"
        type="text"
        required
      />
      {errors.price && (
        <span className="ErrorMessage">{errors.price.message}</span>
      )}

      <TextField
        {...register("description")}
        label="Description"
        variant="standard"
      />

      <TextField
        {...register("startDate")}
        label="Set Start Date"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        required
      />

      <TextField
        {...register("endDate")}
        label="Set End Date"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        required
      />
      {errors.endDate && (
        <span className="ErrorMessage">
          End date Must be in the future (sadly our time machine is out of
          order, come check again in the past)
        </span>
      )}

      <InputLabel>
        <br />
        Category:
      </InputLabel>
      <Select {...register("category")} className="select" required>
        <InputLabel>Category</InputLabel>
        <MenuItem value="FOOD">Food</MenuItem>
        <MenuItem value="ELECTRICITY">Electricity</MenuItem>
        <MenuItem value="RESTAURANT">Restaurant</MenuItem>
        <MenuItem value="VACATION">Vacation</MenuItem>
        <MenuItem value="GARMENT">Garment</MenuItem>
        <MenuItem value="BOOK">Book</MenuItem>
      </Select>
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
