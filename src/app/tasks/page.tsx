"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "@/components/loader";
import { MessageSquare, MoreHorizontal, UserPlus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import TasksList from "@/components/tasks/tasks-list";
import AddTask from "@/components/tasks/add-task";

const Tasks = () => {
  const { data: tasks, isLoading: isTasksLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const response = await axios.get("/api/tasks");
      return response.data;
    },
  });

  if (isTasksLoading) {
    return <Loader />;
  }

  if ((!isTasksLoading && !tasks) || (tasks && !tasks.length)) {
    return (
      <div className="text-muted text-center">
        You don&apos;t have any tasks yet.
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="font-bold text-2xl">My Tasks</div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center hover:bg-primary/15 rounded-sm cursor-pointer">
            <MessageSquare className="h-6 w-6" />
          </div>
          <Separator orientation="vertical" className="mr-2 h-10 w-0.5" />
          <Button variant="outline">
            <UserPlus className="h-4 w-4 mr-2" />
            Invite
          </Button>
          <div className="w-10 h-10 flex items-center justify-center hover:bg-primary/15 rounded-sm cursor-pointer">
            <MoreHorizontal className="h-6 w-6" />
          </div>
        </div>
      </div>

      <AddTask />

      <TasksList tasks={tasks} />
    </div>
  );
};

export default Tasks;
