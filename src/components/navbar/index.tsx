import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import MoreMenu from "./more-menu";

const Navbar = () => {
  return (
    <div className="w-full h-24 flex items-center justify-between px-24">
      <h1 className="text-3xl uppercase font-bold bg-gradient-to-tl from-[#091e3a] via-[#2f80ed] to-[#2d9ee0] dark:from-[#2980b9] dark:to-[#2c3e50] !bg-clip-text text-transparent !bg-cover !bg-center">
        {/* <h1 className="text-3xl uppercase font-bold"> */}
        Taskie
      </h1>

      <div className="flex items-center gap-5">
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
