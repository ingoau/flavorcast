import client from "./client";
import { Devlog } from "./types";

export async function get(projectId: number, devlogId: number) {
  const response = await client.get<Devlog>(`projects/${projectId}/devlogs/${devlogId}`);
  return response.data as Devlog;
}

export async function list(projectId: number) {
  const response = await client.get<{
    devlogs: Devlog[];
  }>(`projects/${projectId}/devlogs`);
  return response.data as {
    devlogs: Devlog[];
  };
}
