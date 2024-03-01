"use client";

import axios from "axios";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { useQuery } from "@tanstack/react-query";

const Sidebar = () => {
  const { data: workspaces, isLoading: isWorkspacesLoading } = useQuery({
    queryKey: ["workspaces"],
    queryFn: async () => {
      const response = await axios.get("/api/workspaces");
      return response.data;
    },
  });

  console.log("workspaces", workspaces);

  return (
    <Card className="h-[calc(100vh-96px-20px)] min-w-80 overflow-y-auto p-5">
      <Button>My Tasks</Button>
    </Card>
  );
};

export default Sidebar;
