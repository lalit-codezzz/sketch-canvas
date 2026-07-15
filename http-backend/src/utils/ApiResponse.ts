class ApiResponse<T> {
  success: boolean;
  message: string;
  sc: number;
  data?: T;
  constructor({ success, message, sc, data }: { success: boolean; message: string; sc: number; data?: T }) {
    this.success = success;
    this.message = message;
    this.sc = sc;
    this.data = data;    
  }
}

export default ApiResponse;
