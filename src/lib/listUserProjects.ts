import { flavortownApi } from "./flavortownApi";

export default async function listUserProjects() {
  const user = await flavortownApi.users.get("me");
  return await Promise.all(
    user.project_ids.map(async (projectId) => {
      const project = await flavortownApi.projects.get(projectId);
      return project;
    }),
  );
}
