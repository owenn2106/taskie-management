"use client";

import Loader from "@/components/loader";
import AddTask from "@/components/tasks/add-task";
import TasksList from "@/components/tasks/tasks-list";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getWorkspaces } from "@/services/workspaces";
import { Category, Workspace } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  ChevronRight,
  MessageSquare,
  MoreHorizontal,
  UserPlus,
} from "lucide-react";

const Page = ({
  params,
}: {
  params: { workspaceId: string; categoryId: string };
}) => {
  const { data: tasks, isLoading: isTasksLoading } = useQuery({
    queryKey: [`tasks-${params.categoryId}`],
    queryFn: async () => {
      const response = await axios.get(`/api/workspaces/${params.categoryId}`, {
        params: {
          userId: "091471b3-c332-44fc-bd80-2bd938f69a3f", // TODO: replace with actual logged in user id
        },
      });
      return response.data;
    },
  });

  const { data: workspaces } = useQuery({
    queryKey: [`workspaces`],
    queryFn: getWorkspaces,
  });

  const currentWorkspace = workspaces?.find(
    (w: Workspace) => w.id === params.workspaceId,
  );
  const currentCategory = currentWorkspace?.categories.find(
    (c: Category) => c.id === params.categoryId,
  );

  const renderTasksList = () => {
    if (isTasksLoading) {
      return (
        <div className="w-full h-96 flex items-center justify-center">
          <Loader />
        </div>
      );
    }

    if ((!isTasksLoading && !tasks) || (tasks && !tasks.length)) {
      return (
        <div className="text-muted-foreground w-full h-96 flex items-center justify-center">
          You don&apos;t have any tasks yet.
        </div>
      );
    } else {
      return <TasksList tasks={tasks} />;
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-muted-foreground">
            {currentWorkspace?.name || "Project"}
          </div>
          <ChevronRight className="w-4 h-4" />
          <div className="">{currentCategory?.name || "Category"}</div>
        </div>
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

      {renderTasksList()}
    </div>
  );
};

export default Page;
