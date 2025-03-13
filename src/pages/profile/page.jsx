import { useState, useRef } from "react"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs.jsx"
import { Separator } from "../../components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { Eye, EyeOff, Save, Upload, User, Mail, Phone, MapPin, Calendar, Shield } from "lucide-react"

export default function UserProfileEdit() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const fileInputRef = useRef(null)

  const [formData, setFormData] = useState({
    username: "john_doe",
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 555 123 4567",
    address: "New York, USA",
    birthdate: "1990-05-15",
    password: "",
    accountStatus: "active",
    profileImage: "/placeholder.svg?height=150&width=150",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleStatusChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      accountStatus: value,
    }))
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setFormData((prev) => ({
          ...prev,
          profileImage: e.target.result,
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current.click()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate data submission
      await new Promise((resolve) => setTimeout(resolve, 1500))
      alert("Profile updated successfully")
    } catch (error) {
      alert("Error updating profile")
    } finally {
      setIsLoading(false)
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-primary-500"
      case "suspended":
        return "bg-accent-500"
      case "inactive":
        return "bg-neutral-400"
      default:
        return "bg-neutral-400"
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-primary-600 p-6 text-white">
          <h1 className="text-2xl font-bold">User Profile</h1>
          <p className="opacity-80">Manage your account information</p>
        </div>

        <div className="grid md:grid-cols-[250px_1fr] gap-0">
          {/* Sidebar */}
          <div className="bg-neutral-50 p-6 border-r border-neutral-200 flex flex-col items-center">
            <div className="relative group mb-4">
              <Avatar className="w-32 h-32 border-4 border-white shadow-md">
                <AvatarImage src={formData.profileImage} alt={formData.fullName} />
                <AvatarFallback className="bg-primary-100 text-primary-600 text-2xl">
                  {formData.fullName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
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

            <h2 className="text-xl font-bold mt-2 text-center text-neutral-800">{formData.fullName}</h2>
            <p className="text-neutral-500 text-center mb-4">@{formData.username}</p>

            <div className="flex items-center gap-2 mb-4">
              <div className={`w-3 h-3 rounded-full ${getStatusColor(formData.accountStatus)}`}></div>
              <span className="text-sm capitalize text-neutral-600">{formData.accountStatus}</span>
            </div>

            <Separator className="my-4 w-full bg-neutral-200" />

            <div className="w-full space-y-3">
              <div className="flex items-center gap-2 text-neutral-600">
                <Mail className="h-4 w-4 text-primary-500" />
                <span className="text-sm">{formData.email}</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600">
                <Phone className="h-4 w-4 text-primary-500" />
                <span className="text-sm">{formData.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600">
                <MapPin className="h-4 w-4 text-primary-500" />
                <span className="text-sm">{formData.address}</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600">
                <Calendar className="h-4 w-4 text-primary-500" />
                <span className="text-sm">{formData.birthdate}</span>
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
                  value="account"
                  className="data-[state=active]:bg-primary-500 data-[state=active]:text-white"
                >
                  Account Settings
                </TabsTrigger>
              </TabsList>

              <form onSubmit={handleSubmit}>
                <TabsContent value="personal" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-neutral-700">
                        Full Name
                      </Label>
                      <div className="relative">
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="pl-10 border-neutral-300"
                        />
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-500 h-4 w-4" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="username" className="text-neutral-700">
                        Username
                      </Label>
                      <div className="relative">
                        <Input
                          id="username"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          className="pl-10 border-neutral-300"
                        />
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-500">@</span>
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
                      <Label htmlFor="phone" className="text-neutral-700">
                        Phone Number
                      </Label>
                      <div className="relative">
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="pl-10 border-neutral-300"
                        />
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-500 h-4 w-4" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address" className="text-neutral-700">
                        Address
                      </Label>
                      <div className="relative">
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          className="pl-10 border-neutral-300"
                        />
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-500 h-4 w-4" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="birthdate" className="text-neutral-700">
                        Date of Birth
                      </Label>
                      <div className="relative">
                        <Input
                          id="birthdate"
                          name="birthdate"
                          type="date"
                          value={formData.birthdate}
                          onChange={handleChange}
                          className="pl-10 border-neutral-300"
                        />
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-500 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="account" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
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
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="accountStatus" className="text-neutral-700">
                        Account Status
                      </Label>
                      <div className="relative">
                        <Select value={formData.accountStatus} onValueChange={handleStatusChange}>
                          <SelectTrigger id="accountStatus" className="pl-10 border-neutral-300">
                            <SelectValue placeholder="Select account status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="suspended">Suspended</SelectItem>
                            <SelectItem value="inactive">Inactive</SelectItem>
                          </SelectContent>
                        </Select>
                        <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-500 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <div className="mt-8 flex justify-end gap-3">
                  <Button variant="outline" type="button" className="border-neutral-300">
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
  )
}

