import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useStotage";

const ProfileMenu = () => {
  const [user, setUser, removeUser] = useLocalStorage("user", {});
  return (
    <Menu>
      <MenuHandler>
        <div className="text-white cursor-pointer flex items-center text-sm">
          <p>{user?.username}</p>
          <i className="fa-solid fa-chevron-down font-inherit w-4 h-4 leading-3 ml-2"></i>
        </div>
      </MenuHandler>
      <MenuList className="absolute top-[50px] righ-[10px] w-[30px] mt-3">
        <MenuItem className="flex items-center gap-2">
          <Typography variant="small" className="font-medium">
            <Link to="/myprofile">My profile</Link>
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <Typography variant="small" className="font-medium">
            <Link to="https://github.com/theshyy1" target="_blank">
              My project
            </Link>
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <Typography variant="small" className="font-medium">
            <Link to="/cart">My Cart</Link>
          </Typography>
        </MenuItem>
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem className="flex items-center gap-2 ">
          <Typography
            variant="small"
            onClick={() => setUser({})}
            className="font-medium"
          >
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
