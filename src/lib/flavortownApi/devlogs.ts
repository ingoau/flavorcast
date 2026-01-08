import client from "./client";
import { Devlog } from "./types";

export async function get(projectId: number, devlogId: number) {
  const response = await client.get<Devlog>(`projects/${projectId}/devlogs/${devlogId}`);
  return response.data as Devlog;
}
