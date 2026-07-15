export type ApiErrorType = {
  success: boolean;
  error: string;
  sc: number;
};

class ApiError extends Error {
  success: boolean;
  error: string;
  sc: number;
  constructor({ error, sc }: { error: string; sc: number }) {
    super(error);
    this.success = false;
    this.error = error;
    this.sc = sc;
  }
}

export default ApiError;
