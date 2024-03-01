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

const Content = () => {
  const { data: workspaces, isLoading: isWorkspacesLoading } = useQuery({
    queryKey: ["workspaces"],
    queryFn: async () => {
      const response = await axios.get("/api/workspaces");
      return response.data;
    },
  });

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
      <div className="text-muted text-sm text-center">
        You do not have any workspaces yet
      </div>
    );
  }

  return (
    <>
      <div className="font-bold text-sm">Workspaces</div>

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
                  : `No category found for ${workspace.name}`}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </>
  );
};

export default Content;
