"use client";
import { ModeToggle } from "../mode-toggle";
import AppLogo from "../app-logo";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center space-x-3">
          <AppLogo />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Clean Water for All
          </h1>
        </div>
        <ModeToggle />
        <Unauthenticated>
          <SignInButton>
            <Button
              size="lg"
              className="bg-[#25D366] px-8 text-white hover:bg-[#128C7E]"
            >
              Sign In
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button
              size="lg"
              className="bg-[#25D366] px-8 text-white hover:bg-[#128C7E]"
            >
              Sign Up
            </Button>
          </SignUpButton>
        </Unauthenticated>
        <AuthLoading>
          <Skeleton className="h-[40px] w-[100px] bg-blue-600" />
        </AuthLoading>
        <Authenticated>
          <UserButton />
        </Authenticated>
      </div>
    </header>
  );
}
