import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import Link from "next/link";
import Content from "./content";

const Sidebar = () => {
  return (
    <Card className="h-[calc(100vh-96px-20px)] min-w-80 overflow-y-auto p-5">
      <Link href="/tasks">
        <div className="w-full hover:bg-primary/15 rounded-sm cursor-pointer p-3">
          My Tasks
        </div>
      </Link>

      <Separator className="my-3" />

      <Content />
    </Card>
  );
};

export default Sidebar;
