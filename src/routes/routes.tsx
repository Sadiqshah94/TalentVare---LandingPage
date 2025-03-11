import JobSearch from "@/pages/find-jobs";
import { lazy } from "react";

// Lazy-loaded pages
const TopCompanies = lazy(() => import("@/pages/top-companies"));
const JobTracker = lazy(() => import("@/pages//job-tracker"));
const MyCalendar = lazy(() => import("@/pages/my-calendar"));
const Documents = lazy(() => import("@/pages/documents"));
const Messages = lazy(() => import("@/pages/messages"));
const Notifications = lazy(() => import("@/pages/notifications"));

const routes = [
  { path: "/", element: <JobSearch />,title:"Find a Jobs" },
  { path: "/top-companies", element: <TopCompanies />, title:"Top Comapines" },
  { path: "/job-tracker", element: <JobTracker />, title:"Job Tracker" },
  { path: "/my-calendar", element: <MyCalendar />, title:"My Calendar" },
  { path: "/documents", element: <Documents />, title:"Documents" },
  { path: "/messages", element: <Messages />, title:"Messages" },
  { path: "/notifications", element: <Notifications />, title:"Notifications" },
];

export default routes;
