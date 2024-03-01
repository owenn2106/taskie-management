"use client";

import axios from "axios";
import { Card } from "../ui/card";
import { useQuery } from "@tanstack/react-query";
import { Separator } from "../ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Link from "next/link";

const Sidebar = () => {
  const { data: workspaces, isLoading: isWorkspacesLoading } = useQuery({
    queryKey: ["workspaces"],
    queryFn: async () => {
      const response = await axios.get("/api/workspaces");
      return response.data;
    },
  });

  if (isWorkspacesLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="h-[calc(100vh-96px-20px)] min-w-80 overflow-y-auto p-5">
      <Link href="/tasks">
        <div className="w-full hover:bg-primary/15 rounded-sm cursor-pointer p-3">
          My Tasks
        </div>
      </Link>

      <Separator className="my-3" />

      {workspaces
        ? workspaces.map((workspace: any) => {
            return (
              <Accordion
                key={workspace.id}
                type="single"
                collapsible
                className="w-full"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>{workspace.name}</AccordionTrigger>
                  <AccordionContent>
                    {workspace.categories?.length
                      ? workspace.categories.map((category: any) => {
                          return (
                            <Link key={category.id} href="/">
                              <div
                                key={category.id}
                                className="w-full hover:bg-primary/15 rounded-sm cursor-pointer p-3"
                              >
                                {category.name}
                              </div>
                            </Link>
                          );
                        })
                      : `Please create a new category for ${workspace.name}`}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })
        : "You do not have any workspaces yet"}
    </Card>
  );
};

export default Sidebar;
