"use client";

import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const AddWorkspaceDialog = () => {
  const { toast } = useToast();
  const [newWorkspace, setNewWorkspace] = useState("");

  const addWorkspaceMutation = useMutation({
    mutationFn: (newWorkspace: { name: string; userId: string }) =>
      axios.post("/api/workspaces", newWorkspace),
    onError: () => {
      toast({
        description: "Failed to create workspace",
      });
    },
    onSuccess: () => {
      toast({
        description: "Workspace created successfully",
      });
      setNewWorkspace("");
    },
  });

  const handleCreate = () => {
    if (!newWorkspace) return;
    addWorkspaceMutation.mutate({
      name: newWorkspace,
      userId: "091471b3-c332-44fc-bd80-2bd938f69a3f",
    });
  };

  const handleCancel = () => {
    setNewWorkspace("");
  };

  return (
    <DialogContent>
      <DialogHeader>
        <h2 className="text-lg font-semibold">Add a new workspace</h2>
      </DialogHeader>
      <div className="mt-3 mb-5">
        <Input
          placeholder="Workspace name..."
          value={newWorkspace}
          onChange={(e) => setNewWorkspace(e.currentTarget.value)}
        />
      </div>
      <DialogFooter className="flex items-center">
        <DialogClose asChild className="basis-full">
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
        </DialogClose>
        <DialogClose asChild className="basis-full">
          <Button disabled={!newWorkspace} onClick={handleCreate}>
            Create
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default AddWorkspaceDialog;
