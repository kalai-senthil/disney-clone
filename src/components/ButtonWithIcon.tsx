"use client";
import React, { ButtonHTMLAttributes, JSX, ReactNode } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: ReactNode;
  label: string;
}
function ButtonWithIcon({ Icon, label, className, onClick }: Props) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "hover:scale-110 duration-500 ease transition-transform w-64 flex items-center gap-4",
        className
      )}
    >
      {Icon}
      {label}
    </Button>
  );
}

export default ButtonWithIcon;
