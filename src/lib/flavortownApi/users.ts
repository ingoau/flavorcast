import client from "./client";
import { User } from "./types";

export async function get(userId: string) {
  const response = await client.get<User>(`users/${userId}`);
  return response.data as User;
}
