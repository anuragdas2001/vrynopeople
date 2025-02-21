import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  UserCircle,
  MapPin,
  Briefcase,
  GraduationCap,
  History,
} from "lucide-react";
import SidePanel from "@/components/Sidepanel";
// Basic information interfaces
interface CandidateDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  aadhaarNumber: string;
  panNumber: string;
  uanNumber: string;
  officialEmail: string;
}

interface Address {
  street1: string;
  street2?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface AddressDetails {
  presentAddress: Address;
  permanentAddress: Address;
}

interface ProfessionalDetails {
  department: string;
  position: string;
  startDate: string;
  salary: string;
  experience: string;
  sourceOfHire: string;
  skillSet: string;
  highestQualification: string;
  additionalInformation: string;
  location: string;
  currentSalary: string;
  tentativeJoiningDate: string;
}

interface EducationDetails {
  degree: string;
  university: string;
  graduationYear: string;
  specialization: string;
}

interface ExperienceDetails {
  currentCompany: string;
  currentRole: string;
  yearsOfExperience: string;
  skills: string;
  previousExperience: string;
}

// Combined form data interface
interface FormData {
  candidate: CandidateDetails;
  address: AddressDetails;
  professional: ProfessionalDetails;
  education: EducationDetails;
  experience: ExperienceDetails;
}

// Navigation type
interface NavigationItem {
  id: keyof typeof FormSections;
  label: string;
  icon: React.ComponentType;
}

// Form sections enum
// enum FormSections {
//   CANDIDATE = "candidate",
//   ADDRESS = "address",
//   PROFESSIONAL = "professional",
//   EDUCATION = "education",
//   EXPERIENCE = "experience"
// }
const FormSections = {
  CANDIDATE: "candidate",
  ADDRESS: "address",
  PROFESSIONAL: "professional",
  EDUCATION: "education",
  EXPERIENCE: "experience",
};

const navigationData = [
  { id: FormSections.CANDIDATE, label: "Candidate Details", icon: UserCircle },
  { id: FormSections.ADDRESS, label: "Address Details", icon: MapPin },
  {
    id: FormSections.PROFESSIONAL,
    label: "Professional Details",
    icon: Briefcase,
  },
  { id: FormSections.EDUCATION, label: "Education", icon: GraduationCap },
  { id: FormSections.EXPERIENCE, label: "Experience", icon: History },
];

const EmployeeForm = () => {
  const [activeTab, setActiveTab] = useState(FormSections.CANDIDATE);
  const [isSameAsPresent, setIsSameAsPresent] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const [formData, setFormData] = useState({
    // Candidate Details
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",

    // Address Details
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",

    // Professional Details
    department: "",
    position: "",
    startDate: "",
    salary: "",
    experince: "",
    sourceOfHiring: "",
    skills: "",
    highestQualification: "",
    additionalInformation: "",
    location: "",
    currentSalary: "",
    tentativeJoiningDate: "",
    // Education
    degree: "",
    university: "",
    graduationYear: "",
    specialization: "",

    // Experience
    currentCompany: "",
    currentRole: "",
    yearsOfExperience: "",
    previousExperience: "",
  });
  const [professionalData, setprofessionalData] = useState({
    department: "",
    position: "",
    startDate: "",
    salary: "",
    experience: "",
    sourceOfHire: "",
    skillSet: "",
    highestQualification: "",
    additionalInformation: "",
    location: "",
    currentSalary: "",
    tentativeJoiningDate: "",
  });

  const handleProfessionalChange = (value: string) => {
    setprofessionalData({
      ...professionalData,
      department: value, // Update only the department key
    });
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSameAsPresentChange = (e: any) => {
    setIsSameAsPresent(e.target.checked);

    if (e.target.checked) {
      setFormData((prev: any) => ({
        ...prev,
        permanentStreet1: prev.presentStreet1,
        permanentStreet2: prev.presentStreet2,
        permanentCity: prev.presentCity,
        permanentState: prev.presentState,
        permanentZipCode: prev.presentZipCode,
        permanentCountry: prev.presentCountry,
      }));
    }
  };
  const renderCandidateDetails = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dateOfBirth">Date of Birth</Label>
          <Input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <Select
            name="gender"
            onValueChange={(value) =>
              handleChange({ target: { name: "gender", value } })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Aadhaar card number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">PAN card number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">UAN number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Official Email</Label>
          <Input
            id="official-email"
            name="official-email"
            type="email"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </div>
  );

  const renderAddressDetails = () => (
    <div className="space-y-6">
      {/* Present Address */}
      <div className="p-2">
        <h3 className="text-lg font-semibold mb-4">Present Address</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6 md:col-span-2">
            <Label htmlFor="presentStreet1">Street</Label>
            <div className="space-y-2">
              <Input
                id="presentStreet1"
                name="presentStreet1"
                value={formData.street1}
                onChange={handleChange}
                required
                placeholder="Address line 1"
              />
            </div>
            <div className="space-y-2">
              <Input
                id="presentStreet2"
                name="presentStreet2"
                value={formData.street2}
                onChange={handleChange}
                placeholder="Address line 2"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="presentCity">City</Label>
              <Input
                id="presentCity"
                name="presentCity"
                value={formData.city}
                onChange={handleChange}
                required
                placeholder="City"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="presentCountry">Country</Label>
            <Select
              name="presentCountry"
              onValueChange={(value) =>
                handleChange({ target: { name: "presentCountry", value } })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="afghanistan">Afghanistan</SelectItem>
                <SelectItem value="india">India</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="presentState">State</Label>
            <Select
              name="presentState"
              onValueChange={(value) =>
                handleChange({ target: { name: "presentState", value } })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="afghanistan">Afghanistan</SelectItem>
                <SelectItem value="india">India</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="presentZipCode">ZIP Code</Label>
            <Input
              id="presentZipCode"
              name="presentZipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <input
          type="checkbox"
          id="sameAsPresent"
          checked={isSameAsPresent}
          onChange={handleSameAsPresentChange}
          className="mr-2"
        />
        <label htmlFor="sameAsPresent">Same as Present Address</label>
      </div>

      {/* Permanent Address */}
      <div className="p-4 mt-6">
        <h3 className="text-lg font-semibold mb-4">Permanent Address</h3>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-opacity duration-300 ${
            isSameAsPresent ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          <div className="space-y-6 md:col-span-2">
            <Label htmlFor="permanentStreet1">Street</Label>
            <div className="space-y-2">
              <Input
                id="permanentStreet1"
                name="permanentStreet1"
                value={formData.street1}
                onChange={handleChange}
                placeholder="Address line 1"
              />
            </div>
            <div className="space-y-2">
              <Input
                id="permanentStreet2"
                name="permanentStreet2"
                value={formData.street2}
                onChange={handleChange}
                placeholder="Address line 2"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="permanentCity">City</Label>
              <Input
                id="permanentCity"
                name="permanentCity"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="permanentCountry">Country</Label>
            <Select
              name="permanentCountry"
              onValueChange={(value) =>
                handleChange({ target: { name: "permanentCountry", value } })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="afghanistan">Afghanistan</SelectItem>
                <SelectItem value="india">India</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="permanentState">State</Label>
            <Select
              name="permanentState"
              onValueChange={(value) =>
                handleChange({ target: { name: "permanentState", value } })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="afghanistan">Afghanistan</SelectItem>
                <SelectItem value="india">India</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="permanentZipCode">ZIP Code</Label>
            <Input
              id="permanentZipCode"
              name="permanentZipCode"
              value={formData.zipCode}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderProfessionalDetails = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="department">Department</Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Choose Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hr">HR</SelectItem>
              <SelectItem value="engineering">Engineering</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="position">Position</Label>
          <Input
            id="position"
            name="position"
            value={formData.position}
            // onChange={handleProfessionalChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="startDate">Start Date</Label>
          <Input
            id="startDate"
            name="startDate"
            type="date"
            value={formData.startDate}
            // onChange={handleProfessionalChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="salary">Expected Salary</Label>
          <Input
            id="salary"
            name="salary"
            type="number"
            value={formData.salary}
            // onChange={handleProfessionalChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="experience">Experience (Years)</Label>
          <Input
            id="experience"
            name="experience"
            type="number"
            value={formData.experince}
            // onChange={handleProfessionalChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="sourceOfHire">Source of Hire</Label>
          <Input
            id="sourceOfHire"
            name="sourceOfHire"
            value={formData.sourceOfHiring}
            // onChange={handleProfessionalChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="skillSet">Skill Set</Label>
          <Textarea
            id="skillSet"
            name="skillSet"
            value={formData.skills}
            // onChange={handleProfessionalChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="highestQualification">Highest Qualification</Label>
          <Input
            id="highestQualification"
            name="highestQualification"
            value={formData.highestQualification}
            // onChange={handleProfessionalChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="additionalInformation">Additional Information</Label>
          <Textarea
            id="additionalInformation"
            name="additionalInformation"
            value={formData.additionalInformation}
            // onChange={handleProfessionalChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            name="location"
            value={formData.location}
            // onChange={handleProfessionalChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="currentSalary">Current Salary</Label>
          <Input
            id="currentSalary"
            name="currentSalary"
            type="number"
            value={formData.currentSalary}
            // onChange={handleProfessionalChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="tentativeJoiningDate">Tentative Joining Date</Label>
          <Input
            id="tentativeJoiningDate"
            name="tentativeJoiningDate"
            type="date"
            value={formData.tentativeJoiningDate}
            // onChange={handleProfessionalChange}
          />
        </div>
      </div>
    </div>
  );

  const renderEducationDetails = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="degree">Degree</Label>
          <Input
            id="degree"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="university">University/College</Label>
          <Input
            id="university"
            name="university"
            value={formData.university}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="graduationYear">Graduation Year</Label>
          <Input
            id="graduationYear"
            name="graduationYear"
            type="number"
            value={formData.graduationYear}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="specialization">Specialization</Label>
          <Input
            id="specialization"
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </div>
  );

  const renderExperienceDetails = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="currentCompany">Current Company</Label>
          <Input
            id="currentCompany"
            name="currentCompany"
            value={formData.currentCompany}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="currentRole">Current Role</Label>
          <Input
            id="currentRole"
            name="currentRole"
            value={formData.currentRole}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="yearsOfExperience">Years of Experience</Label>
          <Input
            id="yearsOfExperience"
            name="yearsOfExperience"
            type="number"
            value={formData.yearsOfExperience}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="skills">Key Skills</Label>
          <Input
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="e.g., JavaScript, React, Node.js"
            required
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="previousExperience">
            Previous Experience Details
          </Label>
          <Textarea
            id="previousExperience"
            name="previousExperience"
            value={formData.previousExperience}
            onChange={handleChange}
            placeholder="Describe your previous work experience..."
            className="h-32"
          />
        </div>
      </div>
    </div>
  );

  const renderActiveSection = () => {
    switch (activeTab) {
      case FormSections.CANDIDATE:
        return renderCandidateDetails();
      case FormSections.ADDRESS:
        return renderAddressDetails();
      case FormSections.PROFESSIONAL:
        return renderProfessionalDetails();
      case FormSections.EDUCATION:
        return renderEducationDetails();
      case FormSections.EXPERIENCE:
        return renderExperienceDetails();
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <div className="h-screen flex">
        <SidePanel
          activeTab={activeTab}
          onTabChange={setActiveTab}
          Data={navigationData}
          Heading="Employee Form"
          Caption="Enter employee information"
        />

        <div className="flex-1 p-8 overflow-y-auto ">
          <div className="">
            <Card>
              <CardContent className="p-6">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-6"
                >
                  {renderActiveSection()}

                  <div className="flex justify-end space-x-4 pt-6">
                    <Button
                      type="button"
                      variant="outline"
                      className="w-32"
                      onClick={() => {
                        const currentIndex = navigationData.findIndex(
                          (item) => item.id === activeTab
                        );
                        if (currentIndex > 0) {
                          setActiveTab(navigationData[currentIndex - 1].id);
                        }
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      type="button"
                      className="w-32"
                      onClick={() => {
                        const currentIndex = navigationData.findIndex(
                          (item) => item.id === activeTab
                        );
                        if (currentIndex < navigationData.length - 1) {
                          setActiveTab(navigationData[currentIndex + 1].id);
                        }
                      }}
                    >
                      Next
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
