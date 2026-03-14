"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    setLoading(false);

    if (res.ok) {
      window.location.href = "/admin/dashboard";
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center px-4">

      <Card
        className="
        w-full max-w-md
        bg-white/10
        dark:bg-white/5
        backdrop-blur-xl
        border border-white/20
        shadow-2xl
        "
      >
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">
            Admin Login
          </CardTitle>

          <CardDescription>
            Enter your credentials to access dashboard
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">

          <div className="space-y-2">
            <Label>Email</Label>

            <Input
              type="email"
              placeholder="admin@example.com"
              className="bg-white/20 border-white/20 backdrop-blur-sm"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Password</Label>

            <Input
              type="password"
              placeholder="••••••••"
              className="bg-white/20 border-white/20 backdrop-blur-sm"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button
            className="w-full hover:cursor-pointer"
            onClick={login}
            disabled={loading}
          >
            {loading ? "Signing in..." : "Login"}
          </Button>

        </CardContent>
      </Card>
    </div>
  );
}