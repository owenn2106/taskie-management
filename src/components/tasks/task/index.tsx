import { Task } from "@prisma/client";

type Props = {
  task: Task;
};

const Task = ({ task }: Props) => {
  return <div>{task.title}</div>;
};

export default Task;
