import React from "react";
import Task from "@/components/tasks/task";
import { Separator } from "@/components/ui/separator";
import { Task as TaskType } from "@prisma/client";

type Props = {
  tasks: any[];
};

const TasksList = ({ tasks }: Props) => {
  return (
    <div>
      {tasks?.map((task: TaskType, idx: number) => (
        <React.Fragment key={task.id}>
          <Task task={task} idx={idx} />
          {idx !== tasks.length - 1 && <Separator className="mt-8" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TasksList;
