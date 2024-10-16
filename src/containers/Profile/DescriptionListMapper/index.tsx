"use client";
import { DescriptionListBlocks } from "@/types/descriptionList";
import { useId } from "react";

type Props = {
  config: DescriptionListBlocks;
};

const DescriptionListMapper = ({ config }: Props) => {
  return config?.map((item, i) => {
    return (
      <section key={useId()}>
        <h5 className="heading-base">{item?.title}</h5>
        <div className="flex flex-col gap-3 divide-y divide-gray-200">
          {item?.items?.map((record, i) => {
            return (
              <div key={useId()} className="flex w-full pt-4">
                <h5 className="max-w-[190px] w-full heading-sm">
                  {record?.title}
                </h5>
                {typeof record?.content === "string" ? (
                  <div className="flex flex-1 gap-4 items-center w-full">
                    <p>{record?.content}</p>
                    <>{record?.allowEdit && record?.editComp}</>
                  </div>
                ) : (
                  record?.content
                )}
              </div>
            );
          })}
        </div>
      </section>
    );
  });
};

export default DescriptionListMapper;
