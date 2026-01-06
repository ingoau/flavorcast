import { API_BASE } from "../constants";
import client from "./client";
import { Devlog } from "./types";

export async function get(projectId: number, devlogId: number) {
  const response = await client.get<Devlog>(`${API_BASE}/projects/${projectId}/devlogs/${devlogId}`);
  return response.data as Devlog;
}
