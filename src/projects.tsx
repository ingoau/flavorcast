import { ActionPanel, Action, List } from "@raycast/api";
import { usePromise } from "@raycast/utils";
import listUserProjects from "./lib/listUserProjects";

export default function Command() {
  const { isLoading, data } = usePromise(listUserProjects);

  return (
    <List isLoading={isLoading}>
      {data?.map((item) => (
        <List.Item
          key={item.id}
          title={item.title}
          subtitle={item.description}
          actions={
            <ActionPanel>
              <Action.CopyToClipboard content={item.title} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
