import { stringToObjectNotation } from "@/functions/stringToObject";
import { cx } from "@/lib/utils";
import { Nested } from "@/types/common";
import React from "react";

export type StaticTableColumns<T extends Record<string, any>> = {
  title: string;
  dataIndex: Nested<T>;
  render?: React.FC<T>;
  align?: "start" | "end" | "middle";
  width?: number;
  fallback?: string;
}[];

type Props = {
  columns: StaticTableColumns<any>;
  data: Record<string, any>[];
};

const StaticTable = ({ columns, data }: Props) => {
  return (
    <div className="border rounded-lg overflow-x-auto overflow-y-hidden grid bg-white grid-cols-1">
      <table className="w-full table-auto border-collapse text-sm">
        <thead className="bg-gray-50 text-gray-600 font-medium border-b">
          <tr>
            {columns?.map((column, i) => {
              const { align = "start", width = "max-content" } = column;

              return (
                <th
                  style={{ minWidth: width }}
                  className={cx([
                    "py-3 px-6 w-full uppercase",
                    align === "start" && "text-start",
                    align === "end" && "text-end",
                    align === "middle" && "text-center",
                  ])}
                  key={i}>
                  {column?.title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="text-gray-600 divide-y">
          {data.map((item, idx) => (
            <tr key={idx}>
              {columns?.map((column, i) => {
                const { align = "start", width = "max-content" } = column;

                console.log(
                  stringToObjectNotation(
                    item?.[String(column?.dataIndex)],
                    item,
                  ),
                  "STR_TO_OBJ",
                );

                return (
                  <td
                    style={{ minWidth: width }}
                    className={cx([
                      "px-6 py-4 whitespace-nowrap w-full",
                      align === "start" && "text-start",
                      align === "end" && "text-end",
                      align === "middle" && "text-center",
                    ])}>
                    {column?.render
                      ? column?.render(item)
                      : stringToObjectNotation(
                          String(column?.dataIndex),
                          item,
                        ) ||
                        column?.fallback ||
                        "-"}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaticTable;
