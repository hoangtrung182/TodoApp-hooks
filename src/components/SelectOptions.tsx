import { Select, Option } from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";

export function SelectOptions() {
  return (
    <div className="w-[200px]">
      <Select label="Giá">
        <Option>
          <Link to="/products/"></Link>
        </Option>
        <Option>Từ cao đến thâp</Option>
      </Select>
    </div>
  );
}
