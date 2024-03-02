"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/components/loader";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { getWorkspaces } from "@/services/workspaces";

const Content = () => {
  const { categoryId } = useParams();

  const { data: workspaces, isLoading: isWorkspacesLoading } = useQuery({
    queryKey: ["workspaces"],
    queryFn: getWorkspaces,
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
        <Accordion type="multiple" className="w-full">
          {workspaces.map((workspace: any) => {
            return (
              <AccordionItem
                key={workspace.id}
                value={`accordion-${workspace.id}`}
              >
                <AccordionTrigger>{workspace.name}</AccordionTrigger>
                <AccordionContent>
                  {workspace.categories?.length
                    ? workspace.categories.map((category: any) => {
                        return (
                          <Link
                            key={category.id}
                            href={`/workspaces/${workspace.id}/category/${category.id}`}
                          >
                            <Button
                              key={category.id}
                              variant={`${categoryId === category.id ? "default" : "ghost"}`}
                              className="w-full justify-start cursor-pointer p-3 mb-2"
                            >
                              {category.name}
                            </Button>
                          </Link>
                        );
                      })
                    : `No category found for ${workspace.name}`}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
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
