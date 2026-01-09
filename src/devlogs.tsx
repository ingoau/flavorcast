import { List } from "@raycast/api";
import { usePromise } from "@raycast/utils";
import { flavortownApi } from "./lib/flavortownApi";

export default function Devlogs({ projectId }: { projectId: number }) {
  const { isLoading, data } = usePromise(() => {
    return flavortownApi.devlogs.list(projectId);
  });

  return (
    <List isLoading={isLoading} isShowingDetail>
      {data?.devlogs.map((devlog) => (
        <List.Item key={devlog.id} title={new Date(devlog.created_at).toLocaleString()} />
      ))}
    </List>
  );
}
