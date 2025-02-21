import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Users,
  AlertCircle,
  CheckCircle2,
  Clock,
  Search,
  Filter,
} from "lucide-react";

const AdminOnboardingDashboard = () => {
  const [filterStatus, setFilterStatus] = useState("all");
  const router = useRouter();
  const employees = [
    {
      name: "Sarah Chen",
      department: "Engineering",
      startDate: "2025-01-15",
      progress: 75,
      status: "in_progress",
      pending: 2,
      dueDate: "2025-02-05",
    },
    {
      name: "James Wilson",
      department: "Marketing",
      startDate: "2025-01-20",
      progress: 25,
      status: "delayed",
      pending: 6,
      dueDate: "2025-02-10",
    },
    {
      name: "Maria Garcia",
      department: "Sales",
      startDate: "2025-01-10",
      progress: 100,
      status: "completed",
      pending: 0,
      dueDate: "2025-01-31",
    },
    {
      name: "Alex Kumar",
      department: "Product",
      startDate: "2025-01-25",
      progress: 0,
      status: "not_started",
      pending: 8,
      dueDate: "2025-02-15",
    },
  ];

  const getStatusBadge = (status:string) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    switch (status) {
      case "completed":
        return `${baseClasses} bg-green-100 text-green-800`;
      case "in_progress":
        return `${baseClasses} bg-blue-100 text-blue-800`;
      case "delayed":
        return `${baseClasses} bg-red-100 text-red-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };
  const handleAddEmployee = () => {
    router.push("/onboarding/add");
  };
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Onboarding Dashboard
            </h1>
            <p className="text-gray-600 mt-2">
              Manage and track employee onboarding progress
            </p>
          </div>
          <Button
            onClick={handleAddEmployee}
            className="bg-blue-600 hover:bg-blue-700"
          >
            + New Employee
          </Button>
        </div>

        {/* Overview Cards */}
        <div className="grid gap-6 mb-8 grid-cols-1 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">
                Total Onboarding
              </CardTitle>
              <Users className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <div className="text-sm text-gray-500">Active employees</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">
                Completed
              </CardTitle>
              <CheckCircle2 className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <div className="text-sm text-gray-500">Fully onboarded</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">
                In Progress
              </CardTitle>
              <Clock className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <div className="text-sm text-gray-500">Currently onboarding</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-700">
                Requires Attention
              </CardTitle>
              <AlertCircle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <div className="text-sm text-gray-500">Delayed or at risk</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="Search employees..." className="pl-10" />
              </div>
              <div className="flex gap-4">
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-[180px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="in_progress">In Progress</SelectItem>
                    <SelectItem value="delayed">Delayed</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Employee Table */}
        <Card>
          <CardHeader>
            <CardTitle>Employee Onboarding Status</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Start Date</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Pending Tasks</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employees.map((employee, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {employee.name}
                    </TableCell>
                    <TableCell>{employee.department}</TableCell>
                    <TableCell>{employee.startDate}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress
                          value={employee.progress}
                          className="h-2 w-20"
                        />
                        <span className="text-sm text-gray-500">
                          {employee.progress}%
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={getStatusBadge(employee.status)}>
                        {employee.status
                          .replace("_", " ")
                          .charAt(0)
                          .toUpperCase() +
                          employee.status.slice(1).replace("_", " ")}
                      </span>
                    </TableCell>
                    <TableCell>{employee.pending}</TableCell>
                    <TableCell>{employee.dueDate}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminOnboardingDashboard;
