import BrowsePage from "../screens/common/BrowsePage";
import MainPage from "../screens/common/MainPage";
import VehiclePage from "../screens/common/VehiclePage";
import LoginPage from "../screens/common/LoginPage";
import RegisterPage from "../screens/common/RegisterPage";
import ProfilePage from "../screens/common/ProfilePage";
import AdminDashboardPage from "../screens/admin/AdminDashboardPage";
import AdminDashboardVehiclePage from "../screens/admin/AdminDashboardVehiclePage";
import PendingUsersPage from "../screens/admin/PendingUsersPage";
import AllUsersPage from "../screens/admin/AllUsersPage";
import DriverLoginPage from "../screens/common/DriverLoginPage";
import AdminDriverPage from "../screens/admin/AdminDriverPage";

export const appRoutes = [
  {
    id: 1,
    component: MainPage,
    path: "/",
    exact: true,
  },
  {
    id: 2,
    component: VehiclePage,
    path: "/vehicle/:id",
    exact: true,
  },
  {
    id: 3,
    component: BrowsePage,
    path: "/browse",
    exact: true,
  },

  {
    id: 6,
    component: LoginPage,
    path: "/login",
    exact: true,
  },
  {
    id: 7,
    component: RegisterPage,
    path: "/register",
    exact: true,
  },
    {
    id: 7,
    component: DriverLoginPage,
    path: "/driver_login",
    exact: true,
  },
];

export const protectedRoutes = [
  {
    id: 1,
    component: ProfilePage,
    path: "/profile",
    exact: true,
    permission:[ "user"],
  },
  {
    id: 2,
    component: AdminDashboardPage,
    path: "/admin/dashboard",
    exact: true,
    permission:[ "admin"],
  },
  {
    id: 3,
    component: AdminDashboardVehiclePage,
    path: "/admin/vehicle",
    exact: true,
    permission:[ "admin"],
  },
  {
    id: 3,
    component: PendingUsersPage,
    path: "/admin/pending_users",
    exact: true,
    permission:[ "admin"],
  },
    {
    id: 4,
    component: AllUsersPage, 
    path: "/admin/all_users",
    exact: true,
    permission: ["admin"],
  },
     {
    id: 5,
    component: AdminDriverPage,
    path: "/admin/driver",
    exact: true,
    permission:["admin"],
  },
];
// DriverLoginPage



