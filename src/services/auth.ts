import axios from "axios";
export const createUser = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(
      `http://localhost:7600/api/v1/auth/register`,
      data
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};
