import { Checkbox } from "@/components/ui/checkbox";
import { MoreHorizontal } from "lucide-react";

type Props = {
  task: any;
  idx: number;
};

const Task = ({ task, idx }: Props) => {
  return (
    <div
      className={`flex items-center justify-between ${idx !== 0 ? "mt-8" : ""}`}
    >
      <div>
        <div className="flex items-center">
          <Checkbox />
          <div className="ml-4">{task.title}</div>
        </div>
        <div className="text-muted-foreground ml-8 mt-2 text-sm">
          {task.description || "No description"}
        </div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <div className="w-6 h-6 flex items-center justify-center hover:bg-primary/15 rounded-sm cursor-pointer">
          <MoreHorizontal className="h-4 w-4" />
        </div>
        <div className="flex gap-2">
          {task.tags?.map((tag: any, idx: number) => {
            return (
              <div
                key={`${tag.id}-${idx}`}
                className="text-xs p-1 rounded-md font-bold text-white"
                style={{
                  backgroundColor: `${tag.color}`,
                }}
              >
                {tag.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Task;
