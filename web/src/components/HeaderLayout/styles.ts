import { Colors } from "styles";
import { ListItemText, styled as styledMui } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  box-shadow: 0 5px 20px 1px ${Colors.primary.main};
`;

export const ListItemTextStyled = styledMui(ListItemText)`    
    & .MuiTypography-root {
        font-weight: 700 !important;
        color: ${Colors.primary.main};
    }
`;
