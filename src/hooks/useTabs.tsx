import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/common/Tabs";
import { cx } from "@/lib/utils";

type Args = {
  stateType?: "default" | "query_params";
  tabs: {
    id: string;
    component: React.FC<any>;
    title: string;
  }[];
  defaultValue?: string;
};

type RenderTabContentArgs = {
  wrapperClassName?: string;
};

type RenderTabListArgs = {};

type TabsWrapperArgs = { children: React.ReactNode };

export const useTabs = ({ tabs, defaultValue, stateType }: Args) => {
  //
  const RenderTabList = ({}: RenderTabListArgs) => {
    return (
      <TabsList>
        {tabs?.map((item) => {
          return (
            <TabsTrigger key={item?.id} value={item?.id}>
              {item?.title}
            </TabsTrigger>
          );
        })}
      </TabsList>
    );
  };

  //
  const RenderTabContent = ({
    wrapperClassName = "",
  }: RenderTabContentArgs) => {
    return (
      <div className={cx(["p-5", wrapperClassName])}>
        {tabs?.map((i) => {
          return <TabsContent value={i?.id}>{i?.component({})}</TabsContent>;
        })}
      </div>
    );
  };

  //
  const TabsWrapper = ({ children }: TabsWrapperArgs) => {
    return (
      <Tabs defaultValue={defaultValue ? defaultValue : tabs?.[0]?.id}>
        {children}
      </Tabs>
    );
  };

  //
  return {
    RenderTabList,
    RenderTabContent,
    TabsWrapper,
  };
};
