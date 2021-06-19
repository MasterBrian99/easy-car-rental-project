import BrowsePage from "../screens/common/BrowsePage";
import MainPage from "../screens/common/MainPage";
import VehiclePage from "../screens/common/VehiclePage";
import AdminDashboardPage from "../screens/admin/AdminDashboardPage";
import AdminDashboardVehiclePage from "../screens/admin/AdminDashboardVehiclePage";

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
];
