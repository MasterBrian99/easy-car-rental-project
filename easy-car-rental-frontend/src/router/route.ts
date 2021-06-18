import BrowsePage from "../screens/common/BrowsePage";
import MainPage from "../screens/common/MainPage";
import VehiclePage from "../screens/common/VehiclePage";

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
];
