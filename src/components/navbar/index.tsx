import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import MoreMenu from "./more-menu";

const Navbar = () => {
  return (
    <div className="w-full h-24 flex items-center justify-between px-24">
      <span className="text-2xl font-bold">TASKIE</span>

      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/75826315?v=4" />
          <AvatarFallback>OG</AvatarFallback>
        </Avatar>
        <div className="flex items-center">
          <div className="flex flex-col">
            <span>Owenn Gimli</span>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-xs">Online</span>
            </div>
          </div>
        </div>
        <MoreMenu />
      </div>
    </div>
  );
};

export default Navbar;
