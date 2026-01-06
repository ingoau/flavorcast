import { flavortownApi } from "./flavortownApi";

export default async function listUserProjects(userId: string) {
  const user = await flavortownApi.users.get(userId);
  return await Promise.all(
    user.project_ids.map(async (projectId) => {
      const project = await flavortownApi.projects.get(projectId);
      return project;
    }),
  );
}
