"use client";

import { useState } from "react";
import type { SignInFlow } from "../types";
import SignInCard from "./sign-in-card";
import SignUpCard from "./sign-up-card";

const AuthScreen = () => {
  const [state, setState] = useState<SignInFlow>("signIn");

  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-brand-deep px-4 py-10 sm:px-6 sm:py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% -10%, var(--brand-glow) 0%, var(--brand-mid) 42%, var(--brand-deep) 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.7) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          maskImage:
            "radial-gradient(ellipse 65% 55% at 50% 45%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 55% at 50% 45%, black, transparent)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 size-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-glow/20 blur-[120px]"
      />

      <div className="relative w-full max-w-[440px]">
        <div
          key={state}
          className="animate-in fade-in-0 slide-in-from-bottom-2 duration-500 ease-out motion-reduce:animate-none"
        >
          {state === "signIn" ? (
            <SignInCard setState={setState} />
          ) : (
            <SignUpCard setState={setState} />
          )}
        </div>
      </div>
    </main>
  );
};

export default AuthScreen;
