import { Button } from "@/components/ui/button";
import React from "react";

export default function UIDemo() {
  return (
    <>
      <div className="flex flex-col gap-4 items-center min-h-screen">
        <h1 className="p-4 text-2xl font-bold tracking-normal">UI Demo</h1>
        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">
          click me
        </button>
        <Button variant="primary_custom_button" size="sm">
          Click me (shadcn-ui)
        </Button>
      </div>
    </>
  );
}
