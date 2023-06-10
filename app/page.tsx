"use client";

import { Label } from "@/components/ui/label";
import {
  RadioGroup,
  RadioGroupImageItem,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState("1");
  return (
    <RadioGroup
      value={selectedValue}
      onValueChange={setSelectedValue}
      className="flex gap-8"
    >
      <div
        className={cn("rounded flex gap-2 items-center py-2 pl-2 pr-12", {
          "bg-slate-100": selectedValue === "1",
        })}
      >
        <RadioGroupImageItem
          value="1"
          id="1"
          imageProps={{
            src: "https://plus.unsplash.com/premium_photo-1686285540777-bfe8c3c6c8d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
            fill: true,
            alt: "Label 1",
            className: "object-cover rounded",
          }}
        />
        <Label className="text-lg text-slate-900 font-light" htmlFor="1">
          Option 1
        </Label>
      </div>
      <div
        className={cn("rounded flex gap-2 items-center py-2 pl-2 pr-12", {
          "bg-slate-100": selectedValue === "2",
        })}
      >
        <RadioGroupImageItem
          value="2"
          id="2"
          imageProps={{
            src: "https://plus.unsplash.com/premium_photo-1684315354188-38d8d9bc87c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            fill: true,
            alt: "Label 2",
            className: "object-cover rounded",
          }}
        />
        <Label className="text-lg text-slate-900 font-light" htmlFor="2">
          Option 2
        </Label>
      </div>
      <div
        className={cn("rounded flex gap-2 items-center py-2 pl-2 pr-12", {
          "bg-slate-100": selectedValue === "3",
        })}
      >
        <RadioGroupImageItem
          value="3"
          className="px-8"
          id="3"
          imageProps={{
            src: "https://plus.unsplash.com/premium_photo-1673721701773-d5c01eb1e2f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            fill: true,
            alt: "Label 3",
            className: "object-cover rounded",
          }}
        />
        <Label className="text-lg text-slate-900 font-light" htmlFor="3">
          Option 3
        </Label>
      </div>
    </RadioGroup>
  );
}
