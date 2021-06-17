import AdminDashboard from "../screens/dashboard/AdminDashboard";
import Browse from "../screens/Browse";
import Home from "../screens/Home";
import VehicleInfo from "../screens/VehicleInfo";
import AdminDashboardVehicle from "../screens/dashboard/AdminDashboardVehicle";

export const appRoutes = [
  {
    id: 1,
    path: "/",
    component: Home,
    exact: true,
  },
  {
    id: 2,
    path: "/browse",
    component: Browse,
    exact: true,
  },
  {
    id: 3,
    path: "/vehicle/:id",
    component: VehicleInfo,
    exact: true,
  },
  {
    id: 4,
    path: "/dashboard",
    component: AdminDashboard,
    exact: true,
  },
  {
    id: 5,
    path: "/dashboard/vehicle",
    component: AdminDashboardVehicle,
    exact: true,
  },
];
