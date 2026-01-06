import { API_BASE } from "../constants";
import { User } from "./types";

export async function get(userId: number) {
  const request = await fetch(`${API_BASE}/users/${userId}`);
  const json = await request.json();
  return json as User;
}
