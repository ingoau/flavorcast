import { API_BASE } from "../constants";
import { Project } from "./types";

export async function get(projectId: number) {
  const request = await fetch(`${API_BASE}/projects/${projectId}`);
  const json = await request.json();
  return json as Project;
}
