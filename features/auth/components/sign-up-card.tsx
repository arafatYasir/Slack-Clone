"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { SignInFlow } from "../types";
import { AuthCardShell, AuthSocialSection } from "./auth-card-shell";
import AuthField from "./auth-field";

interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}

const SignUpCard = ({ setState }: SignUpCardProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordsMismatch = confirmPassword.length > 0 && password !== confirmPassword;

  return (
    <AuthCardShell
      title="Create your account"
      description="Use your email or another service to get started."
      footerPrompt="Already have an account?"
      footerAction="Sign in"
      onFooterAction={() => setState("signIn")}
    >
      <form
        className="space-y-4"
      >
        <AuthField
          id="sign-up-email"
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
          id="sign-up-password"
          name="password"
          type="password"
          label="Password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
          required
        />
        <AuthField
          id="sign-up-confirm-password"
          name="confirmPassword"
          type="password"
          label="Confirm password"
          placeholder="Re-enter your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          autoComplete="new-password"
          error={passwordsMismatch ? "Passwords don't match." : undefined}
          required
        />

        <Button
          type="submit"
          disabled={passwordsMismatch}
          className="mt-1 h-11 w-full rounded-[10px] bg-brand text-[14px] font-medium text-white shadow-[0_10px_24px_-12px_rgba(92,59,88,0.9)] hover:bg-brand-deep focus-visible:border-brand focus-visible:ring-brand/30 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface disabled:shadow-none"
        >
          Create account
        </Button>
      </form>

      <AuthSocialSection />
    </AuthCardShell>
  );
};

export default SignUpCard;
