import { AppImages } from "./AppImages";

export const statistics = [
  {
    title: "Profile Visitors",
    value:140,
  },
  {
    title: "Resume Viewers",
    value: 20,
  },
  {
    title: "My Jobs",
    value: 88,
  }
]

export const tags = [
  {
    name:"FrontEnd"
  },
  {
    name:"Backend"
  },
  {
    name:"Graphic Desginer"
  }
]


export const jobCards = [
  {
    id: 1,
    title: "UI/UX Designer",
    company: "Teams",
    location: "Seattle, USA (Remote)",
    posted: "1 day ago",
    applicants: 22,
    isPromoted: true,
  },
  {
    id: 2,
    title: "Frontend Engineer",
    company: "Google",
    location: "Mountain View, USA",
    posted: "3 days ago",
    applicants: 45,
    isPromoted: false,
  },
  {
    id: 3,
    title: "Backend Engineer",
    company: "Amazon",
    location: "New York, USA (Hybrid)",
    posted: "5 hours ago",
    applicants: 12,
    isPromoted: true,
  },
  {
    id: 4,
    title: "Product Manager",
    company: "Meta",
    location: "San Francisco, USA",
    posted: "2 weeks ago",
    applicants: 33,
    isPromoted: false,
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "Netflix",
    location: "San Francisco, USA",
    posted: "6 days ago",
    applicants: 18,
    isPromoted: false,
  },
];
export const departmentOptions = [
  { label: "Finance", value: "finance" },
  { label: "Marketing", value: "marketing" },
  { label: "HR", value: "hr" },
  { label: "IT", value: "it" },
];

export const User = {
  name: "Albert Flores",
  role: "Senior Product Designer | UI/UX Designer | Graphic Designer | Web...",
  location: "Clinton, Maryland",
  images: {
    background: AppImages.bg,  
    profile: AppImages.user,  
  }
};
