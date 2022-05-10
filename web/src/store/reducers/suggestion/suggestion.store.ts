import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  SuggestionListRequest,
  SuggestionListResponse,
} from "services/apiClient/suggestion/list";
import { ApiClient } from "services";

import { AsyncParamsOperationType, ResponseStoreType } from "store/interfaces";
import { RequestStatusEnum } from "store/enums";

export const suggestionListThunk = createAsyncThunk(
  "suggestion/list",
  async (params: SuggestionListRequest) => {
    return await ApiClient.suggestion.list(params);
  }
);

type ExampleStoreType = {
  list: AsyncParamsOperationType<SuggestionListResponse>;
};

const initialState: ExampleStoreType = {
  list: {
    status: RequestStatusEnum.IDLE,
    params: {},
  },
};

export const Suggestion = createSlice({
  name: "SuggestionSlice",
  initialState: initialState,
  reducers: {
    listExampleReset(state) {
      state.list.errorMessage = undefined;
      state.list.status = RequestStatusEnum.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        suggestionListThunk.fulfilled,
        (state, action: ResponseStoreType) => {
          state.list.status = RequestStatusEnum.SUCCESS;
          state.list.data = action.payload;
        }
      )
      .addCase(
        suggestionListThunk.pending,
        (state, action: ResponseStoreType) => {
          state.list.status = RequestStatusEnum.LOADING;
          state.list.params = action.meta.arg;
        }
      )
      .addCase(
        suggestionListThunk.rejected,
        (state, action: ResponseStoreType) => {
          state.list.status = RequestStatusEnum.FAILED;
          state.list.errorMessage = action?.payload?.message ?? "Erro interno";
        }
      );
  },
});

export const { listExampleReset } = Suggestion.actions;

export const SuggestionReducer = Suggestion.reducer;
