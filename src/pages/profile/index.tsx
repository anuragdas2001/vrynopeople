import React from "react";
import {
  Camera,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Briefcase,
  GraduationCap,
  Clock,
  FileText,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const EmployeeProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="relative h-48">
        <img
          src="https://res.cloudinary.com/dgz1duuwu/image/upload/v1738041599/doebjnm9uvyoegbbblln.jpg"
          alt="Cover"
          className="w-full h-48 object-cover"
        />
        <div className="absolute -bottom-16 left-8">
          <div className="relative inline-block">
            <img
              src="https://res.cloudinary.com/dgz1duuwu/image/upload/v1719236393/nu2oa9upb9n6kwjrjyxq.jpg"
              alt="Employee"
              className="rounded-full w-48 h-48 border-4 border-white"
            />
            <button className="absolute -bottom-2 -right-2 p-2 bg-white rounded-full shadow-lg">
              <Camera className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Rest of the component remains the same */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        {/* Previous content remains unchanged */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-gray-900">Anurag Das</h1>
              <Badge className="ml-3 text-green-500">Active</Badge>
            </div>
            <h2 className="text-xl text-gray-600 mt-1">
              Software Developer Engineer
            </h2>
            <div className="flex items-center mt-2 text-gray-600">
              <Briefcase className="w-4 h-4 mr-2" />
              <span>Engineering Department</span>
            </div>
          </div>
          <div className="mt-4 md:mt-0 space-x-3">
            <Button variant="outline">Edit Details</Button>
            <Button>View Documents</Button>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-gray-600">
                    Employee ID
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    EMP-2024-0892
                  </div>
                </div>
                <FileText className="w-5 h-5 text-gray-400" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-gray-600">
                    Join Date
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    March 15, 2022
                  </div>
                </div>
                <Calendar className="w-5 h-5 text-gray-400" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-gray-600">
                    Employment Type
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    Full Time
                  </div>
                </div>
                <Clock className="w-5 h-5 text-gray-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-gray-400" />
                <span>anurag.das@shubpy.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-gray-400" />
                <span>+91 7908410616</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                <span>Kolkata, India</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Details */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Professional Details</h3>
            <div className="space-y-4">
              <div>
                <div className="font-medium text-gray-700">Department</div>
                <div className="mt-1">Engineering</div>
              </div>
              <div>
                <div className="font-medium text-gray-700">
                  Reporting Manager
                </div>
                <div className="mt-1">Subham Wadhwa</div>
                <div className="mt-1">Inderpreet Singh</div>
              </div>
              <div>
                <div className="font-medium text-gray-700">Work Location</div>
                <div className="mt-1">Remote</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills & Certifications */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">
              Skills & Certifications
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge>React</Badge>
              <Badge>Node.js</Badge>
              <Badge>AWS Certified</Badge>
              <Badge>Scrum Master</Badge>
              <Badge>Team Leadership</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Button variant="outline" className="flex items-center">
            <FileText className="w-4 h-4 mr-2" />
            Download Profile
          </Button>
          <Button variant="outline" className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            View Leave History
          </Button>
          <Button variant="outline" className="flex items-center">
            <GraduationCap className="w-4 h-4 mr-2" />
            Training Records
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
