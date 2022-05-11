export type Environments = {
  apiEndpoint: string;
};

const env = (window as any)._env_ ?? process.env;

export const environments: Environments = {
  apiEndpoint: env.REACT_APP_API_ENDPOINT ?? "",
};
