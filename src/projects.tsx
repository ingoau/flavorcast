import { ActionPanel, Action, List } from "@raycast/api";
import { usePromise } from "@raycast/utils";
import listUserProjects from "./lib/listUserProjects";
import { FLAVORTOWN_BASE } from "./lib/constants";

export default function Command() {
  const { isLoading, data } = usePromise(listUserProjects);

  return (
    <List isLoading={isLoading} isShowingDetail>
      {data?.map((item) => (
        <List.Item
          key={item.id}
          title={item.title}
          detail={<List.Item.Detail markdown={item.description} />}
          actions={
            <ActionPanel>
              <Action.OpenInBrowser url={`${FLAVORTOWN_BASE}/projects/${item.id}`} />
              <Action.CopyToClipboard content={item.title} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
