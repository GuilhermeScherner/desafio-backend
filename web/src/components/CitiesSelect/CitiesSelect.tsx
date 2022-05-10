import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { useAppDispatch, useTypedSelector } from "store";
import { RequestStatusEnum } from "store/enums";
import { suggestionListThunk } from "store/reducers";
import { debounce } from "lodash";
import { Suggestion } from "services/apiClient/suggestion/list";
import { Checkbox, FormControlLabel } from "@mui/material";

export const CitiesSelect = () => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<Suggestion[]>([]);
  const [localization, setLocalization] = React.useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const geolocationState = useTypedSelector((state) => state.geolocation);

  const suggestionListState = useTypedSelector(
    (state) => state.suggestion.list
  );
  const asyncRequest = debounce((event) => {
    if (localization && geolocationState.geolocation.latitude)
      dispatch(
        suggestionListThunk({
          q: event.target.value,
          lat: geolocationState.geolocation.latitude,
          lon: geolocationState.geolocation.longitude,
        })
      );
  }, 1000);

  const handleOnChange = (event: any) => {
    setLoading(true);
    asyncRequest(event);
  };
  useEffect(() => {
    if (suggestionListState.status !== RequestStatusEnum.LOADING)
      setLoading(false);

    if (suggestionListState.status === RequestStatusEnum.SUCCESS)
      setOptions(suggestionListState.data?.suggestions!);
  }, [suggestionListState.data?.suggestions, suggestionListState.status]);

  return (
    <>
      <Autocomplete
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        options={options}
        noOptionsText={"Sem Opção"}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        getOptionLabel={(option) => option.name}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Cidades"
            onChange={handleOnChange}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {suggestionListState.status === RequestStatusEnum.LOADING ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
      {geolocationState.geolocation.latitude && (
        <FormControlLabel
          value={localization}
          onChange={() => setLocalization((prevState) => !prevState)}
          control={<Checkbox />}
          label="Quer enviar a localizção"
        />
      )}
    </>
  );
};
