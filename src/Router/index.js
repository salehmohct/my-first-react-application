import Login from "../Pages/Login";
import ForgetPassword from "../Pages/ForgetPassword";
import SignUp from "../Pages/SignUp";
import Verfication from "../Pages/Verfication";
import Verfied from "../Pages/Verfied";
import ResponsiveDrawer from "../Component/ResponsiveDrawer";
import AutoGrid from "../Pages/Dashboard";
import CompanyDetails from "../Pages/CompanyDetails";
import ProfileDetails from "../Pages/ProfileDetails";
import ReprotPage from "../Pages/ReportPage";
import Gri from "../Pages/GriReport";
import Sebi from "../Pages/SEBI";
import CustomizeReport from "../Pages/CustomizeReport";
import MyReport from "../Pages/MyReport";
import DataUpload from "../Pages/DataUpload";
import BulkUpload from "../Pages/BulkUpload";
import Environement from "../Pages/Environement";
import Social from "../Pages/Social";
import Governance from "../Pages/Governance";
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
