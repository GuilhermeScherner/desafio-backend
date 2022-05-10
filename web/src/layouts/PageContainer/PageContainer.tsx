import React from "react";
import { Container } from "./styles";
import { HeaderLayout } from "components";

type Props = {
  children: React.ReactNode;
};

export const PageContainer = ({ children }: Props) => {
  return (
    <>
      <HeaderLayout />
      <Container>{children}</Container>
    </>
  );
};
