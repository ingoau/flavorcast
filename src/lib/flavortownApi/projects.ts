import client from "./client";
import { Project } from "./types";

export async function get(projectId: number) {
  const response = await client.get<Project>(`projects/${projectId}`);
  return response.data as Project;
}
