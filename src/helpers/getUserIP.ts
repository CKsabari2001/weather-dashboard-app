import axios from "axios";

export async function getUserIP() {
  // Get the User IP if not Throw error
  try {
    const resUserID = await axios.get<{ ip: string }>(process.env.BASE_URL_USER_IP ?? "");

    return resUserID.data.ip;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
