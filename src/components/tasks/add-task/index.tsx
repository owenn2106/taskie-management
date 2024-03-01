import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

const AddTask = () => {
  return (
    <Button
      className="mt-8 mb-4 w-full justify-start text-primary"
      variant="ghost"
    >
      <Plus className="h-4 w-4 mr-2" />
      Add Task
    </Button>
  );
};

export default AddTask;
