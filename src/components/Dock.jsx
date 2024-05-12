import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const Dock = () => {
  return (
    <>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel className="bg-blue" defaultSize={25}>
          <div className="w-full h-screen"></div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={80}>
              this is the second container
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={20}>
              this is the third container
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};

export default Dock;
