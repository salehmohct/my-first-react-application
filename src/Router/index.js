import { lazy } from "react";

const Login = lazy(() => import("../Pages/Login"));
const ForgetPassword = lazy(() => import("../Pages/ForgetPassword"));
const SignUp = lazy(() => import("../Pages/SignUp"));
const Verfication = lazy(() => import("../Pages/Verfication"));
const Verfied = lazy(() => import("../Pages/Verfied"));
const ResponsiveDrawer = lazy(() => import("../Component/ResponsiveDrawer"));
const AutoGrid = lazy(() => import("../Pages/Dashboard"));
const CompanyDetails = lazy(() => import("../Pages/CompanyDetails"));
const ProfileDetails = lazy(() => import("../Pages/ProfileDetails"));
const ReprotPage = lazy(() => import("../Pages/ReportPage"));
const Gri = lazy(() => import("../Pages/GriReport"));
const Sebi = lazy(() => import("../Pages/SEBI"));
const CustomizeReport = lazy(() => import("../Pages/CustomizeReport"));
const MyReport = lazy(() => import("../Pages/MyReport"));
const DataUpload = lazy(() => import("../Pages/DataUpload"));
const BulkUpload = lazy(() => import("../Pages/BulkUpload"));
const Environement = lazy(() => import("../Pages/Environement"));
const Social = lazy(() => import("../Pages/Social"));
const Governance = lazy(() => import("../Pages/Governance"));

export const Paths = {
  home: "/",
  forgetPassword: "/forgetPassword",
  SignUp: "/SignUp",
  Verfication: "/Verfication",
  Verfied: "/Verfied",
  Dashboard: "/Dashboard",
  CompanyDetails: "/CompanyDetails",
  ProfileDetails: "/ProfileDetails",
  ReprotPage: "/ReprotPage",
  Gri: "/ReprotPage/Gri",
  Sebi: "/ReprotPage/Sebi",
  CustomizeReport: "/ReprotPage/CustomizeReport",
  MyReport: "/ReprotPage/MyReport",
  DataUpload: "/DataUpload",
  BulkUpload: "/BulkUpload",
  // Children: [
  //   {
  //     title: "Environement",
  //     path: "/Environement",
  //   },
  //   { title: "Social", path: "/Social" },
  //   {
  //     title: "Governance",
  //     path: "/Governance",
  //   },
  // ],
  Environement: "/Environement",
  Social: "/Social",
  Governance: "/Governance",
};

export const router = [
  { index: true, element: <Login /> },
  { path: Paths.forgetPassword, element: <ForgetPassword /> },
  { path: Paths.SignUp, element: <SignUp /> },
  { path: Paths.Verfication, element: <Verfication /> },
  { path: Paths.Verfied, element: <Verfied /> },
  {
    path: Paths.Dashboard,
    element: <ResponsiveDrawer name="Dashboard" Pages=<AutoGrid /> />,
  },
  {
    path: Paths.CompanyDetails,
    element: (
      <ResponsiveDrawer name="Company details" Pages=<CompanyDetails /> />
    ),
  },
  {
    path: Paths.ProfileDetails,
    element: (
      <ResponsiveDrawer name="Profile details" Pages=<ProfileDetails /> />
    ),
  },
  {
    path: Paths.ReprotPage,
    element: <ResponsiveDrawer name="Reprot" Pages=<ReprotPage /> />,
  },
  {
    path: Paths.Gri,
    element: <ResponsiveDrawer name="GRI Report" Pages=<Gri /> />,
  },
  {
    path: Paths.Sebi,
    element: <ResponsiveDrawer name="SEBI Report" Pages=<Sebi /> />,
  },
  {
    path: Paths.CustomizeReport,
    element: (
      <ResponsiveDrawer name="Customize Report" Pages=<CustomizeReport /> />
    ),
  },
  {
    path: Paths.MyReport,
    element: <ResponsiveDrawer name="MyReport" Pages=<MyReport /> />,
  },
  {
    path: Paths.Environement,
    element: <ResponsiveDrawer name="Environement" Pages=<Environement /> />,
  },
  {
    path: Paths.Social,
    element: <ResponsiveDrawer name="Social" Pages=<Social /> />,
  },
  {
    path: Paths.Governance,
    element: <ResponsiveDrawer name="Governance" Pages=<Governance /> />,
  },
  {
    path: Paths.DataUpload,
    element: <ResponsiveDrawer name="DataUpload" Pages=<DataUpload /> />,
  },
  {
    path: Paths.BulkUpload,
    element: <ResponsiveDrawer name="BulkUpload" Pages=<BulkUpload /> />,
  },
];
