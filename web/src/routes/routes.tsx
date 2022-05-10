import { RouteType, RouteTypesEnum } from "./types";
import React from "react";
import { Home } from "pages";

export enum RoutesEnum {
  Home = "/",
}

export const routes: RouteType[] = [
  {
    title: "Home",
    path: RoutesEnum.Home,
    element: <Home />,
    type: RouteTypesEnum.PROTECTED,
    visibleOnMenu: true,
    titleSideBar: "Home",
  },

];
