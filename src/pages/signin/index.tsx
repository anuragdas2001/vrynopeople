import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Lock, Mail } from 'lucide-react';

const SignInPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [role, setRole] = useState("Admin"); // Default role selection

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement actual authentication logic
    console.log('Sign In Attempt', { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Left Branding Section */}
      <div className="flex flex-col justify-center items-center p-12 relative bg-gradient-to-br from-blue-500 to-blue-800 text-white">
        <div className="z-10 text-center">
          <div className="flex items-center justify-center mb-6">
            {/* <Users size={64} className="mr-4" /> */}
            <h1 className="text-5xl font-bold">Vryno</h1>
          </div>
          <h2 className="text-3xl font-semibold mb-4">Workforce Management</h2>
          <p className="text-xl max-w-md mx-auto leading-relaxed">
            Empowering Organizations Through Intelligent Human Resource Solutions
          </p>
        </div>

        {/* Background Design Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full mix-blend-overlay blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay blur-3xl"></div>
        </div>
      </div>

      {/* Right Sign-In Section */}
      <div className="flex flex-col justify-center items-center p-12 bg-background">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Sign In</CardTitle>
            <CardDescription>Access Your HRMS Account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="role">Select Role</Label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Admin">Admin</option>
                <option value="HR">HR</option>
                <option value="Manager">Manager</option>
                <option value="Employee">Employee</option>
              </select>
            </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
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

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
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

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember-me"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="h-4 w-4 text-primary border-gray-300 rounded"
                  />
                  <Label htmlFor="remember-me" className="text-sm font-medium leading-none">
                    Remember me
                  </Label>
                </div>
                <Button variant="link" size="sm" className="p-0">
                  Forgot Password?
                </Button>
              </div>

              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>

            <div className="mt-4 text-center text-sm">
              New to Vryno? {' '}
              <Button variant="link" size="sm" className="p-0">
                Create an Account
              </Button>
            </div>
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
