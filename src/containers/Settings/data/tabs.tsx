import { TabsContent } from "@/components/common/Tabs";

export const tabs = [
  {
    id: "general",
    component: ({}) => {
      return (
        <TabsContent value="general">
          <>General</>
        </TabsContent>
      );
    },
    title: "General",
  },
  {
    id: "settings_and_privacy",
    component: ({}) => {
      return (
        <TabsContent value="settings_and_privacy">
          <>Settings And Privacy</>
        </TabsContent>
      );
    },
    title: "Settings And Privacy",
  },
  {
    id: "email_and_notification_settings",
    component: ({}) => {
      return (
        <TabsContent value="email_and_notification_settings">
          <>Email And Notification Settings</>
        </TabsContent>
      );
    },
    title: "Email And Notification Settings",
  },
];
