import { useState } from "react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

import { FolderOpen, Settings, CircleUser, Terminal } from "lucide-react";
import Dock from "./Dock";
const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    console.log("clicked");
    !isOpen;
  };
  return (
    <>
      <aside className="w-full  flex h-screen bg-white ">
        <div className="border-r p-4  flex  flex-col justify-between ">
          <div className="grid grid-flow-row gap-2">
            <TooltipProvider>
              <Tooltip className="">
                <TooltipTrigger className="">
                  <Button
                    className="w-8"
                    variant="ghost"
                    size="icon"
                    onClick={handleClick}
                  >
                    <FolderOpen />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="" side="right">
                  file explorer
                </TooltipContent>
              </Tooltip>
              <Tooltip className="">
                <TooltipTrigger className="">
                  <Button
                    className="w-8"
                    variant="ghost"
                    size="icon"
                    onClick={handleClick}
                  >
                    <Terminal />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="" side="right">
                  Terminal
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="grid grid-flow-row gap-2">
            <TooltipProvider className="">
              <Tooltip className="">
                <TooltipTrigger className="">
                  <Button
                    className="w-8"
                    variant="ghost"
                    size="icon"
                    onClick={handleClick}
                  >
                    <CircleUser />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="" side="right">
                  account
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger className="">
                  <Button
                    className="w-8"
                    variant="ghost"
                    size="icon"
                    onClick={handleClick}
                  >
                    <Settings />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="" side="right">
                  settings
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Aside;
