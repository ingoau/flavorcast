import { API_BASE } from "../constants";
import { Devlog } from "./types";

export async function get(projectId: number, devlogId: number) {
  const request = await fetch(`${API_BASE}/projects/${projectId}/devlogs/${devlogId}`);
  const json = await request.json();
  return json as Devlog;
}
