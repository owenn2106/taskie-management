"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "@/components/loader";
import { Button } from "@/components/ui/button";

const Content = () => {
  const { data: workspaces, isLoading: isWorkspacesLoading } = useQuery({
    queryKey: ["workspaces"],
    queryFn: async () => {
      const response = await axios.get("/api/workspaces", {
        params: {
          userId: "091471b3-c332-44fc-bd80-2bd938f69a3f", // TODO: replace with actual logged in user id
        },
      });
      return response.data;
    },
  });

  const getWorkspacesList = () => {
    if (isWorkspacesLoading) {
      return (
        <div className="flex items-center justify-center w-full h-96">
          <Loader />
        </div>
      );
    }

    if (
      (!isWorkspacesLoading && !workspaces) ||
      (workspaces && !workspaces.length)
    ) {
      return (
        <div className="text-muted-foreground text-sm h-96 flex items-center justify-center">
          You do not have any workspaces yet
        </div>
      );
    }

    return (
      <>
        {workspaces.map((workspace: any) => {
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
                          <Link
                            key={category.id}
                            href={`/workspaces/${category.id}`}
                          >
                            <Button
                              key={category.id}
                              variant="ghost"
                              className="w-full justify-start cursor-pointer p-3 bg-transparent"
                            >
                              {category.name}
                            </Button>
                          </Link>
                        );
                      })
                    : `No category found for ${workspace.name}`}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="font-bold text-sm">Workspaces</div>

      {getWorkspacesList()}
    </>
  );
};

export default Content;
