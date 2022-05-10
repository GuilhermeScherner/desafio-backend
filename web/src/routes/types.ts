import React from "react";
import { RouteObject } from "react-router-dom";

export enum RouteTypesEnum {
  PROTECTED,
  UNPROTECTED,
}

export type BaseRouteType = RouteObject & {
  title: string;
  children?: RouteType[];
  type: RouteTypesEnum;
  permissions?: string[];
};

export type UnprotectedRouteType = BaseRouteType;

export type ProtectedRouteType = BaseRouteType & {
  icon?: React.ReactNode;
  visibleOnMenu: boolean;
  titleSideBar: string;
};

export type RouteType = ProtectedRouteType | UnprotectedRouteType;
