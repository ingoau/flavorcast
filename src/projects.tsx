import { ActionPanel, Action, List, Keyboard, Icon } from "@raycast/api";
import { usePromise } from "@raycast/utils";
import listUserProjects from "./lib/listUserProjects";
import { FLAVORTOWN_BASE } from "./lib/constants";
import Devlogs from "./devlogs";

export default function Command() {
  const { isLoading, data } = usePromise(listUserProjects);

  return (
    <List isLoading={isLoading} isShowingDetail>
      {data?.map((item) => (
        <List.Item
          key={item.id}
          title={item.title}
          detail={
            <List.Item.Detail
              markdown={`# ${item.title}\n${item.description}`}
              metadata={
                <List.Item.Detail.Metadata>
                  <List.Item.Detail.Metadata.Label title="Devlogs" text={String(item.devlog_ids.length)} />
                  <List.Item.Detail.Metadata.Label
                    title="Created At"
                    text={new Date(item.created_at).toLocaleString()}
                  />
                  <List.Item.Detail.Metadata.Label
                    title="Updated At"
                    text={new Date(item.updated_at).toLocaleString()}
                  />
                  <List.Item.Detail.Metadata.Label title="Demo URL" text={String(item.demo_url)} />
                  <List.Item.Detail.Metadata.Label title="Repo URL" text={String(item.repo_url)} />
                  <List.Item.Detail.Metadata.Label title="Readme URL" text={String(item.readme_url)} />
                </List.Item.Detail.Metadata>
              }
            />
          }
          actions={
            <ActionPanel>
              <Action.OpenInBrowser url={`${FLAVORTOWN_BASE}/projects/${item.id}`} />
              <Action.Push title="View Devlogs" target={<Devlogs projectId={item.id} />} icon={Icon.List} />
              <Action.OpenInBrowser
                url={`${FLAVORTOWN_BASE}/projects/${item.id}/devlogs/new`}
                title="Create Devlog"
                icon={Icon.Plus}
                shortcut={Keyboard.Shortcut.Common.New}
              />
              <Action.OpenInBrowser url={item.demo_url} title="Open Demo URL" icon={Icon.Globe} />
              <Action.OpenInBrowser url={item.repo_url} title="Open Repo URL" icon={Icon.Code} />
              <Action.OpenInBrowser url={item.readme_url} title="Open Readme URL" icon={Icon.Document} />
              <Action.CopyToClipboard
                content={`${FLAVORTOWN_BASE}/projects/${item.id}`}
                title="Copy Link"
                shortcut={Keyboard.Shortcut.Common.Copy}
              />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
