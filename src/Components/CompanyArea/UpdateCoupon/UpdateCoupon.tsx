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
import "./UpdateCoupon.css";

function UpdateCoupon(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CouponModel>();

  async function send(coupon: CouponModel) {
    try {
      await jwtAxios.put<CouponModel>(globals.urls.company + "update", coupon);
      notify.success("coupon has been updated successfully.");
    } catch (err) {
      notify.error(err);
    }
  }

  return (
    <form className="UpdateCoupon Box" onSubmit={handleSubmit(send)}>
      <Typography variant="h2" className="Headline" color="textPrimary">
        Update Existing Coupon
      </Typography>
      <TextField
        {...register("id", {
          min: { value: 0, message: "Company ID must be a positive number" },
        })}
        label="Company ID"
        type="number"
        required
      />
      {errors.id && <span className="ErrorMessage">{errors.id.message}</span>}
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
