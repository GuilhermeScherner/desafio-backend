import React, { useEffect, useCallback } from "react";
import { PageContainer } from "layouts";
import { GridContainer } from "./styles";
import { CitiesSelect, GeolocationInfo } from "components";
import { setGeolocation, useAppDispatch } from "store";
import { Grid } from "@mui/material";

export const Home = () => {
  const dispatch = useAppDispatch();
  const success = useCallback(
    (pos: any) => {
      const crd = pos.coords;
      dispatch(
        setGeolocation({ latitude: crd.latitude, longitude: crd.longitude })
      );
    },
    [dispatch]
  );

  const errors = (err: any) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            navigator.geolocation.getCurrentPosition(success);
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(success, errors, {
              enableHighAccuracy: true,
              timeout: 5000,
              maximumAge: 0,
            });
          }
        });
    }
  }, [success]);
  return (
    <PageContainer>
      <GridContainer
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} sm={8} md={12}>
          <span> Selecione uma cidade</span>
        </Grid>

        <Grid item xs={2} sm={4} md={6}>
          <CitiesSelect />
        </Grid>

        <Grid item xs={4} sm={8} md={12}>
          <GeolocationInfo />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};
