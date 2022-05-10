import React from "react";
import { ProtectedRouteType, routes, RouteTypesEnum } from "routes";
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, Stack } from "@mui/material";
import { Container, ListItemTextStyled } from "./styles";

export const HeaderLayout = () => {
  return (
    <Container>
      <Stack direction="row" spacing={2}>
        {routes
          .filter((route) => route.type === RouteTypesEnum.PROTECTED)
          .map((route) => route as ProtectedRouteType)
          .filter((route) => route.visibleOnMenu)
          .map((route) => (
            <Link
              style={{ textDecoration: "none" }}
              key={route.path}
              to={route.path!}
            >
              <ListItem button={true} key={route.path}>
                {route.icon && <ListItemIcon>{route.icon}</ListItemIcon>}
                <ListItemTextStyled>{route.titleSideBar}</ListItemTextStyled>
              </ListItem>
            </Link>
          ))}
      </Stack>
    </Container>
  );
};
