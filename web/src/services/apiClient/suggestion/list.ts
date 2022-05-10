import axios from "../axiosConfig";

export type SuggestionListRequest = {
  q?: string;
  lat?: number;
  lon?: number;
};

export type Suggestion = {
  name: string;
  latitude: number;
  longitude: number;
  score: number;
};

export type SuggestionListResponse = {
  suggestions: Suggestion[];
};

export const list = (
  request: SuggestionListRequest
): Promise<SuggestionListResponse> => {
  return axios.get(`suggestions`, { params: { ...request } });
};
