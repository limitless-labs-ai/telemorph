"use client";

import Link from "next/link";
import { signup } from "./actions";
import { ArrowButton } from "@/components/ui/arrow-button";
import { useState, useEffect } from "react";
import { isValidPassword, isValidEmail } from "@/utils/validate";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const [isTokenConfigured, setIsTokenConfigured] = useState(true);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    devToken: "",
  });
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  // Check if the ADMIN_DEV_TOKEN is configured in the environment
  useEffect(() => {
    const checkAdminTokenConfig = async () => {
      try {
        const response = await fetch("/api/check-admin-config");
        const data = await response.json();

        if (!data.isConfigured) {
          setIsTokenConfigured(false);
          // Wait a moment before redirecting to show the message
          setTimeout(() => {
            router.push(
              "/sign-up/error?error=Admin token not configured. Please contact a system administrator."
            );
          }, 2000);
        }
      } catch (error) {
        console.error("Failed to check admin configuration:", error);
      }
    };

    checkAdminTokenConfig();
  }, [router]);

  useEffect(() => {
    // Check if passwords match when either password field changes
    setPasswordsMatch(
      formData.password === formData.confirmPassword ||
        formData.confirmPassword === ""
    );

    // Check password validity
    setIsPasswordValid(
      formData.password === "" || isValidPassword(formData.password)
    );

    // Check email validity
    setIsEmailValid(formData.email === "" || isValidEmail(formData.email));

    // Check if all fields are filled, passwords match, and password is valid
    setIsFormValid(
      formData.firstName !== "" &&
        formData.lastName !== "" &&
        formData.email !== "" &&
        isValidEmail(formData.email) &&
        formData.password !== "" &&
        formData.confirmPassword !== "" &&
        formData.password === formData.confirmPassword &&
        isValidPassword(formData.password) &&
        formData.devToken !== ""
    );
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!isTokenConfigured) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
        <div className="w-full max-w-[400px] space-y-8 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Configuration Error
          </h1>
          <p className="text-red-500">
            Admin token not configured. Redirecting to error page...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-[400px] space-y-8">
        {/* Sign Up Form */}
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create Admin Account
            </h1>
            <p className="text-sm text-muted-foreground">
              This page is for creating admin accounts only
            </p>
            <p className="text-sm text-muted-foreground">
              Or{" "}
              <Link href="/sign-in" className="text-primary hover:underline">
                sign in to your account
              </Link>
            </p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full rounded-md border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full rounded-md border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
            <div className="space-y-2">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email address"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full rounded-md border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              {!isEmailValid && formData.email !== "" && (
                <p className="text-sm text-red-500 mt-1">
                  Please enter a valid email address
                </p>
              )}
            </div>
            <div className="space-y-2">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className="w-full rounded-md border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              {!isPasswordValid && formData.password !== "" && (
                <p className="text-sm text-red-500 mt-1">
                  Password must be at least 8 characters long and contain at
                  least one uppercase letter, one lowercase letter, and one
                  number
                </p>
              )}
            </div>
            <div className="space-y-2">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                required
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full rounded-md border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              {!passwordsMatch && formData.confirmPassword !== "" && (
                <p className="text-sm text-red-500 mt-1">
                  Passwords do not match
                </p>
              )}
            </div>
            <div className="space-y-2">
              <input
                id="devToken"
                name="devToken"
                type="password"
                placeholder="Developer Token"
                required
                value={formData.devToken}
                onChange={handleInputChange}
                className="w-full rounded-md border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <p className="text-xs text-muted-foreground">
                A developer token is required to create admin accounts
              </p>
            </div>
            <ArrowButton
              formAction={isFormValid ? signup : undefined}
              className={`w-full ${
                !isFormValid ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!isFormValid}
            >
              Create Admin Account
            </ArrowButton>
          </form>
        </div>
      </div>
    </div>
  );
}
