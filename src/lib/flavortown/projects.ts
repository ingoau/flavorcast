import { API_BASE } from "../constants";
import { Project } from "./types";

export async function get(id: number) {
  const request = await fetch(`${API_BASE}/projects/${id}`);
  const json = await request.json();
  return json as Project;
}

export async function list() {
  const request = await fetch(`${API_BASE}/projects`);
  const json = await request.json();
  return json as Project[];
}
