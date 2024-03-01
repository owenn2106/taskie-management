import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { MoreVertical } from "lucide-react";
// import { useEffect, useState } from "react";

const MoreMenu = () => {
  // const [theme, setTheme] = useState<"light" | "dark">("dark");
  //
  // const handleThemeChange = (value: boolean) => {
  //   setTheme(value ? "dark" : "light");
  // };
  //
  // useEffect(() => {
  //   localStorage.setItem("theme", theme);
  //   window.dispatchEvent(new Event("themeChanged"));
  // }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="select-none focus:outline-none w-10 h-10 flex items-center justify-center hover:bg-primary/15 rounded-sm cursor-pointer">
        <MoreVertical className="h-6 w-6" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span className="font-normal">Dark Theme:</span>
          <Switch
            // onCheckedChange={handleThemeChange}
            // checked={theme === "dark"}
            checked={true}
            disabled
          />
        </DropdownMenuLabel>
        <DropdownMenuItem>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MoreMenu;
