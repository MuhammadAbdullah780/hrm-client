"use client";
import { Divider } from "@/components/common/Divider";
import MaxWidth from "@/components/common/MaxWidth";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/common/Tabs";
import React from "react";
import { tabs } from "./data/tabs";

type Props = {};

const SettingsContainer = (props: Props) => {
  return (
    <Tabs defaultValue="general" className="w-full h-full">
      <div className="bg-white">
        <MaxWidth>
          <h1 className="heading-1 mb-6 px-5 pt-5">Account Settings</h1>
          <TabsList className="px-5">
            {tabs?.map((item) => {
              return (
                <TabsTrigger key={item?.id} value={item?.id}>
                  {item?.title}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </MaxWidth>
      </div>

      <div className="p-5">
        {tabs?.map((i) => {
          return i?.component({});
        })}
      </div>
    </Tabs>
  );
};

export default SettingsContainer;
