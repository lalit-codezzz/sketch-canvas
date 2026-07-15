import axios, { AxiosError } from "axios";
import { HTTP_BACKEND_URL } from "../configs/backend";
import type { Signup } from "../schemas/auth.schema";

export default function useAuth() {
  const signup = async (signupData: Signup) => {
    try {
      const response = await axios.post(
        `${HTTP_BACKEND_URL}/api/auth/signup`,
        signupData,
        { withCredentials: true },
      );
      const data = response.data;
      return data;
    } catch (error) {
      const err = (error as AxiosError).response?.data;
      throw err;
    }
  };

  return { signup };
}
