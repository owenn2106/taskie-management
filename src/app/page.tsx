"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Task from "@/components/tasks/task";
import { Task as TaskType } from "@prisma/client";
import { Card } from "@/components/ui/card";

export default function Home() {
  const { data: tasks, isLoading: isTasksLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const response = await axios.get("/api/tasks");
      return response.data;
    },
  });
  if (isTasksLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Card className="w-full h-[calc(100vh-96px-20px)]">
      {tasks.map((task: TaskType) => (
        <Task key={task.id} task={task} />
      ))}
    </Card>
  );
}
