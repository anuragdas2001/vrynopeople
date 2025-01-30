import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, Lock, Mail } from "lucide-react";

const SignInPage = () => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In Attempt", { role, email, password, rememberMe });
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Left Branding Section */}
      <div className="flex flex-col justify-center items-center p-12 relative bg-gradient-to-br from-blue-200 to-blue-700 text-white">
        <div className="z-10 text-center">
          <div className="flex items-center justify-center mb-6">
            <img
              src="https://res.cloudinary.com/dgz1duuwu/image/upload/v1737714656/vryno_1_n7zxsm.png"
              alt=""
              className="h-40 w-32"
            />
            <h1 className="text-2xl font-bold -ml-12 mt-4">ryno WorkForce</h1>
          </div>
          <p className="text-xl max-w-md mx-auto leading-relaxed">
            Empowering Organizations Through Intelligent Human Resource
            Solutions
          </p>
        </div>
      </div>

      {/* Right Sign-In Section */}
      <div className="flex flex-col justify-center items-center p-12 bg-background">
        <Card className="w-full max-w-md border-none">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Sign In</CardTitle>
            <CardDescription>Access Your HRMS Account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Role Selection */}
              <div className="space-y-2">
                <Label htmlFor="role">Select Role</Label>
                <div className="relative">
                  <Users
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    size={20}
                  />
                  <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                  >
                    <option value="" disabled>
                      Choose a role
                    </option>
                    <option value="Admin">Admin</option>
                    <option value="HR">HR</option>
                    <option value="Manager">Manager</option>
                    <option value="Employee">Employee</option>
                  </select>
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    size={20}
                  />
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    size={20}
                  />
                  <Input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Remember Me and Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember-me"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="h-4 w-4 text-primary border-gray-300 rounded"
                  />
                  <Label
                    htmlFor="remember-me"
                    className="text-sm font-medium leading-none"
                  >
                    Remember me
                  </Label>
                </div>
                <Button variant="link" size="sm" className="p-0">
                  Forgot Password?
                </Button>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

SignInPage.getLayout = (page: React.ReactElement) => {
  return page;
};

export default SignInPage;
