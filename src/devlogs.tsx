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
        <List.Item
          key={devlog.id}
          title={new Date(devlog.created_at).toLocaleString()}
          detail={
            <List.Item.Detail
              markdown={`${devlog.body}`}
              metadata={
                <List.Item.Detail.Metadata>
                  <List.Item.Detail.Metadata.Label
                    title="Created At"
                    text={new Date(devlog.created_at).toLocaleString()}
                  />
                  <List.Item.Detail.Metadata.Label
                    title="Updated At"
                    text={new Date(devlog.updated_at).toLocaleString()}
                  />
                  <List.Item.Detail.Metadata.Label title="Likes" text={String(devlog.likes_count)} />
                  <List.Item.Detail.Metadata.Label
                    title="Time Logged"
                    text={(() => {
                      const hours = Math.floor(devlog.duration_seconds / 3600);
                      const minutes = Math.floor((devlog.duration_seconds % 3600) / 60);
                      return `${hours}h ${minutes}m`;
                    })()}
                  />
                </List.Item.Detail.Metadata>
              }
            />
          }
        />
      ))}
    </List>
  );
}
