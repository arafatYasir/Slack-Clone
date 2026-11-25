"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { SignInFlow } from "../types";
import { AuthCardShell, AuthSocialSection } from "./auth-card-shell";
import AuthField from "./auth-field";

interface SignInCardProps {
  setState: (state: SignInFlow) => void;
}

const SignInCard = ({ setState }: SignInCardProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthCardShell
      title="Welcome back"
      description="Sign in to continue to your workspace."
      footerPrompt="Don't have an account?"
      footerAction="Create an account"
      onFooterAction={() => setState("signUp")}
    >
      <form
        className="space-y-4"
      >
        <AuthField
          id="sign-in-email"
          name="email"
          type="email"
          label="Email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          inputMode="email"
          autoCapitalize="none"
          spellCheck={false}
          required
        />
        <AuthField
          id="sign-in-password"
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />

        <Button
          type="submit"
          className="mt-1 h-11 w-full rounded-[10px] bg-brand text-[14px] font-medium text-white shadow-[0_10px_24px_-12px_rgba(92,59,88,0.9)] hover:bg-brand-deep focus-visible:border-brand focus-visible:ring-brand/30 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface disabled:shadow-none"
        >
          Sign in
        </Button>
      </form>

      <AuthSocialSection />
    </AuthCardShell>
  );
};

export default SignInCard;
