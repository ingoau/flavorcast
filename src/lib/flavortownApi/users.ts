import { API_BASE } from "../constants";
import client from "./client";
import { User } from "./types";

export async function get(userId: number) {
  const response = await client.get<User>(`${API_BASE}/users/${userId}`);
  return response.data as User;
}
