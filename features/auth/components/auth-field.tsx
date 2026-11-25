"use client";

import * as React from "react";
import { CircleAlert, Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "cn";

interface AuthFieldProps
  extends Omit<React.ComponentProps<"input">, "id" | "className"> {
  id: string;
  label: string;
  error?: string;
}

const AuthField = ({
  id,
  label,
  error,
  type = "text",
  ...props
}: AuthFieldProps) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const isPassword = type === "password";
  const errorId = `${id}-error`;

  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="block text-[13px] leading-none font-medium text-brand-ink"
      >
        {label}
      </label>

      <div className="relative">
        <Input
          id={id}
          type={isPassword && isVisible ? "text" : type}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            "h-11 rounded-[10px] border-brand-line bg-white px-3.5 text-base text-brand-ink caret-brand transition-[border-color,box-shadow] placeholder:text-brand-placeholder focus-visible:border-brand focus-visible:ring-brand/15 sm:text-[14px]",
            isPassword && "pr-11",
            !error && "hover:border-brand/35",
            error &&
              "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/15"
          )}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setIsVisible((visible) => !visible)}
            aria-label={`${isVisible ? "Hide" : "Show"} ${label.toLowerCase()}`}
            aria-controls={id}
            aria-pressed={isVisible}
            className="absolute inset-y-0 right-0 flex w-10 items-center justify-center rounded-r-[10px] text-brand-placeholder transition-colors hover:text-brand focus-visible:ring-3 focus-visible:ring-brand/20 focus-visible:outline-none"
          >
            {isVisible ? (
              <EyeOff className="size-4" aria-hidden="true" />
            ) : (
              <Eye className="size-4" aria-hidden="true" />
            )}
          </button>
        )}
      </div>

      {error && (
        <p
          id={errorId}
          role="status"
          className="flex items-center gap-1.5 pt-0.5 text-[12.5px] leading-snug text-destructive"
        >
          <CircleAlert className="size-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
};

export default AuthField;
