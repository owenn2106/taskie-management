import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import Link from "next/link";
import Content from "./content";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import AddWorkspaceDialog from "../dialogs/add-workspace-dialog";
// import AddCategoryDialog from "../dialogs/add-category-dialog";

const Sidebar = () => {
  return (
    <Card className="h-[calc(100vh-96px-20px)] min-w-80 overflow-y-auto p-5 relative">
      <Link href="/my-tasks">
        <Button
          variant="ghost"
          className="w-full justify-start cursor-pointer p-3 bg-transparent"
        >
          My Tasks
        </Button>
      </Link>

      <Separator className="my-3" />

      <Content />

      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="rounded-full absolute bottom-5 right-5"
            size="icon"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <AddWorkspaceDialog />
        {/* <AddCategoryDialog /> */}
      </Dialog>
    </Card>
  );
};

export default Sidebar;
