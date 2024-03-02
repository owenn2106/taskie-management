"use client";

import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getWorkspaces } from "@/services/workspaces";
import { Workspace } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

const AddCategoryDialog = () => {
  const { data: workspaces } = useQuery({
    queryKey: ["workspaces"],
    queryFn: getWorkspaces,
  });

  return (
    <DialogContent>
      <DialogHeader>
        <h2 className="text-lg font-semibold">Add a new category</h2>
      </DialogHeader>
      <div className="mt-3 mb-5 flex flex-col gap-4">
        <Label>Workspace</Label>
        <Select>
          <SelectTrigger className="">
            <SelectValue placeholder="Select a workspace" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {workspaces?.map((workspace: Workspace) => (
                <SelectItem key={workspace.id} value={workspace.id}>
                  {workspace.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Label>Category Name</Label>
        <Input placeholder="Category name..." />
      </div>
      <DialogFooter className="flex items-center">
        <DialogClose asChild className="basis-full">
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <DialogClose asChild className="basis-full">
          <Button>Create</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default AddCategoryDialog;
