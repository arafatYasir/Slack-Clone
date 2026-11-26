import { components } from "./_generated/api";
import { setupConvexAuth } from "@convex-dev/auth/server";

const auth = setupConvexAuth({ component: components.auth });
export const { signOut, refreshSession, isAuthenticated } = auth;