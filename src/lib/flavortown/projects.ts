import { API_BASE } from "../constants";
import client from "./client";
import { Project } from "./types";

export async function get(projectId: number) {
  const response = await client.get<Project>(`${API_BASE}/projects/${projectId}`);
  return response.data as Project;
}
