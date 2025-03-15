import { useState, useRef } from "react";
import Button from "../../components/ui/Button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Switch } from "../../components/ui/switch";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { Separator } from "../../components/ui/separator";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import {
  Eye,
  EyeOff,
  Save,
  Upload,
  User,
  Mail,
  Briefcase,
  Building2,
  Users,
} from "lucide-react";

export default function UserProfileEdit() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    departmentId: "engineering",
    companyId: "acme-corp",
    jobTitle: "Senior Developer",
    isActive: true,
    password: "",
    profileImage: "/placeholder.svg?height=150&width=150",
  });

  // Mock data for departments and companies (for display only)
  const departments = [
    { id: "engineering", name: "Engineering" },
    { id: "marketing", name: "Marketing" },
    { id: "sales", name: "Sales" },
    { id: "hr", name: "Human Resources" },
    { id: "finance", name: "Finance" },
  ];

  const companies = [
    { id: "acme-corp", name: "ACME Corporation" },
    { id: "globex", name: "Globex Inc." },
    { id: "initech", name: "Initech" },
    { id: "umbrella", name: "Umbrella Corp" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleToggleChange = (checked) => {
    setFormData((prev) => ({
      ...prev,
      isActive: checked,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData((prev) => ({
          ...prev,
          profileImage: e.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate data submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      alert("Profile updated successfully");
    } catch (error) {
      alert("Error updating profile", error);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const getCompanyName = (id) => {
    const company = companies.find((c) => c.id === id);
    return company ? company.name : id;
  };

  const getDepartmentName = (id) => {
    const department = departments.find((d) => d.id === id);
    return department ? department.name : id;
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-primary-600 p-6 text-white">
          <h1 className="text-2xl font-bold">Employee Profile</h1>
          <p className="opacity-80">Manage employee information</p>
        </div>

        <div className="grid md:grid-cols-[250px_1fr] gap-0">
          {/* Sidebar */}
          <div className="bg-neutral-50 p-6 border-r border-neutral-200 flex flex-col items-center">
            <div className="relative group mb-4">
              <Avatar className="w-32 h-32 border-4 border-white shadow-md">
                <AvatarImage
                  src={formData.profileImage}
                  alt={`${formData.firstName} ${formData.lastName}`}
                />
                <AvatarFallback className="bg-primary-100 text-primary-600 text-2xl">
                  {formData.firstName[0]}
                  {formData.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <div
                className="absolute inset-0 bg-black bg-opacity-40 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer"
                onClick={triggerFileInput}
              >
                <Upload className="text-white" />
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
            </div>

            <h2 className="text-xl font-bold mt-2 text-center text-neutral-800">
              {formData.firstName} {formData.lastName}
            </h2>
            <p className="text-neutral-500 text-center mb-2">
              {formData.jobTitle}
            </p>

            <div className="flex items-center gap-2 mb-4">
              <Badge
                variant={formData.isActive ? "default" : "secondary"}
                className={
                  formData.isActive ? "bg-primary-500" : "bg-neutral-400"
                }
              >
                {formData.isActive ? "Active" : "Inactive"}
              </Badge>
            </div>

            <Separator className="my-4 w-full bg-neutral-200" />

            <div className="w-full space-y-3">
              <div className="flex items-center gap-2 text-neutral-600">
                <Mail className="h-4 w-4 text-primary-500" />
                <span className="text-sm">{formData.email}</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600">
                <Building2 className="h-4 w-4 text-primary-500" />
                <span className="text-sm">
                  {getCompanyName(formData.companyId)}
                </span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600">
                <Users className="h-4 w-4 text-primary-500" />
                <span className="text-sm">
                  {getDepartmentName(formData.departmentId)}
                </span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600">
                <Briefcase className="h-4 w-4 text-primary-500" />
                <span className="text-sm">{formData.jobTitle}</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 bg-white">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="mb-6 bg-neutral-100">
                <TabsTrigger
                  value="personal"
                  className="data-[state=active]:bg-primary-500 data-[state=active]:text-white"
                >
                  Personal Information
                </TabsTrigger>
                <TabsTrigger
                  value="company"
                  className="data-[state=active]:bg-primary-500 data-[state=active]:text-white"
                >
                  Company Details
                </TabsTrigger>
              </TabsList>

              <form onSubmit={handleSubmit}>
                <TabsContent value="personal" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-neutral-700">
                        First Name
                      </Label>
                      <div className="relative">
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="pl-10 border-neutral-300"
                        />
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-500 h-4 w-4" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-neutral-700">
                        Last Name
                      </Label>
                      <div className="relative">
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="pl-10 border-neutral-300"
                        />
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-500 h-4 w-4" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-neutral-700">
                        Email Address
                      </Label>
                      <div className="relative">
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="pl-10 border-neutral-300"
                        />
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-500 h-4 w-4" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-neutral-700">
                        Password
                      </Label>
                      <div className="relative">
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="••••••••"
                          className="pl-10 border-neutral-300"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 text-neutral-500 hover:text-primary-500"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="company" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-neutral-700">Company</Label>
                      <div className="flex items-center p-2 border rounded-md border-neutral-200 bg-neutral-50">
                        <Building2 className="h-4 w-4 text-primary-500 mr-2" />
                        <span>{getCompanyName(formData.companyId)}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-neutral-700">Department</Label>
                      <div className="flex items-center p-2 border rounded-md border-neutral-200 bg-neutral-50">
                        <Users className="h-4 w-4 text-primary-500 mr-2" />
                        <span>{getDepartmentName(formData.departmentId)}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-neutral-700">Job Title</Label>
                      <div className="flex items-center p-2 border rounded-md border-neutral-200 bg-neutral-50">
                        <Briefcase className="h-4 w-4 text-primary-500 mr-2" />
                        <span>{formData.jobTitle}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="isActive" className="text-neutral-700">
                        Status
                      </Label>
                      <div className="flex items-center space-x-2 pt-2">
                        <Switch
                          id="isActive"
                          checked={formData.isActive}
                          onCheckedChange={handleToggleChange}
                          className="data-[state=checked]:bg-primary-500"
                        />
                        <Label htmlFor="isActive" className="cursor-pointer">
                          {formData.isActive ? "Active" : "Inactive"}
                        </Label>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <div className="mt-8 flex justify-end gap-3">
                  <Button
                    variant="outline"
                    type="button"
                    className="border-neutral-300"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-primary-500 hover:bg-primary-600 text-white px-6"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                        <span>Saving...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Save className="h-4 w-4" />
                        <span>Save Changes</span>
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
