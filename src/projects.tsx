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
          detail={<List.Item.Detail markdown={`#${item.title}\n${item.description}`} />}
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
