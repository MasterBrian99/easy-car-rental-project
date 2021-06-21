import BrowsePage from "../screens/common/BrowsePage";
import MainPage from "../screens/common/MainPage";
import VehiclePage from "../screens/common/VehiclePage";
import AdminDashboardPage from "../screens/admin/AdminDashboardPage";
import AdminDashboardVehiclePage from "../screens/admin/AdminDashboardVehiclePage";
import LoginPage from "../screens/common/LoginPage";
import RegisterPage from "../screens/common/RegisterPage";
import ProfilePage from "../screens/common/ProfilePage";

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
    id: 4,
    component: AdminDashboardPage,
    path: "/admin/dashboard",
    exact: true,
  },
  {
    id: 5,
    component: AdminDashboardVehiclePage,
    path: "/admin/dashboard/vehicle",
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
    id: 8,
    component: ProfilePage,
    path: "/profile",
    exact: true,
  },
];
