export interface WrapperServiceResponse {
  status: number;
  data: any;
  error?: any;
}

export const wrapperServiceResponse = ({
  status,
  data,
  error,
}: WrapperServiceResponse): WrapperServiceResponse => {
  return {
    status,
    data,
    error,
  };
};
