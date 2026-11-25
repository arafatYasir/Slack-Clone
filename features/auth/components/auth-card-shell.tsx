"use client";

import type { ReactNode } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const footerLinkClassName =
  "rounded-sm font-medium text-brand underline decoration-brand/30 underline-offset-4 transition-colors hover:text-brand-deep hover:decoration-brand focus-visible:ring-3 focus-visible:ring-brand/20 focus-visible:outline-none";

const BrandMark = () => (
  <div
    aria-hidden="true"
    className="flex size-11 items-center justify-center rounded-[13px] bg-brand text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_14px_26px_-14px_rgba(44,26,43,0.85)] ring-1 ring-brand-deep/20"
  >
    <svg viewBox="0 0 24 24" fill="none" className="size-[22px]">
      <path
        d="M7 4.5h10A3.5 3.5 0 0 1 20.5 8v5.5a3.5 3.5 0 0 1-3.5 3.5h-5.3L7 20v-3a3.5 3.5 0 0 1-3.5-3.5V8A3.5 3.5 0 0 1 7 4.5Z"
        fill="currentColor"
      />
      <path
        d="M8 8.75h8M8 12h5.25"
        stroke="var(--brand)"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

const AuthSocialSection = () => (
  <div className="space-y-4">
    <div className="flex items-center gap-3" aria-hidden="true">
      <Separator className="flex-1 bg-brand-line" />
      <span className="text-[12px] font-medium text-brand-muted">or</span>
      <Separator className="flex-1 bg-brand-line" />
    </div>

    <div className="flex flex-col gap-2.5">
      <Button
        type="button"
        variant="outline"
        className="h-11 w-full gap-2.5 rounded-[10px] border-brand-line bg-white text-[14px] font-medium text-brand-ink shadow-none transition-colors hover:bg-brand-soft hover:text-brand-ink focus-visible:border-brand focus-visible:ring-brand/25"
      >
        <FcGoogle className="size-[18px]" aria-hidden="true" />
        Continue with Google
      </Button>
      <Button
        type="button"
        variant="outline"
        className="h-11 w-full gap-2.5 rounded-[10px] border-brand-line bg-white text-[14px] font-medium text-brand-ink shadow-none transition-colors hover:bg-brand-soft hover:text-brand-ink focus-visible:border-brand focus-visible:ring-brand/25"
      >
        <FaGithub className="size-[18px] text-brand-ink" aria-hidden="true" />
        Continue with GitHub
      </Button>
    </div>
  </div>
);

interface AuthCardShellProps {
  title: string;
  description: string;
  footerPrompt: string;
  footerAction: string;
  onFooterAction: () => void;
  children: ReactNode;
}

const AuthCardShell = ({
  title,
  description,
  footerPrompt,
  footerAction,
  onFooterAction,
  children,
}: AuthCardShellProps) => (
  <Card className="w-full gap-6 rounded-[22px] bg-brand-surface p-6 text-brand-ink shadow-[0_40px_90px_-30px_rgba(20,8,18,0.8),0_4px_14px_-4px_rgba(20,8,18,0.15)] ring-1 ring-brand-deep/10 selection:bg-brand/15 selection:text-brand-ink sm:p-8">
    <CardHeader className="gap-0 px-0 pt-0">
      <BrandMark />
      <div className="mt-5 space-y-1.5">
        <CardTitle
          role="heading"
          aria-level={1}
          className="text-[26px] leading-[1.15] font-semibold tracking-[-0.02em] text-brand-ink sm:text-[28px]"
        >
          {title}
        </CardTitle>
        <CardDescription className="text-[13.5px] leading-relaxed text-brand-muted">
          {description}
        </CardDescription>
      </div>
    </CardHeader>

    <CardContent className="space-y-5 px-0 pb-0">
      {children}

      <p className="text-[13px] leading-relaxed text-brand-muted">
        {footerPrompt}{" "}
        <button
          type="button"
          onClick={onFooterAction}
          className={footerLinkClassName}
        >
          {footerAction}
        </button>
      </p>
    </CardContent>
  </Card>
);

export { AuthCardShell, AuthSocialSection };
