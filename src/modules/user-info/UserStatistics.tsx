import React from "react";

interface StatisticsProps {
  statistics: { title: string; value: number }[];
}
const UserStatistics: React.FC<StatisticsProps> = ({ statistics }) => {
  return (
    <div className="my-3 bg-white p-6 rounded-lg">
      {statistics.map((item, index) => {
        return (
          <div
            key={index}
            className="flex justify-between border-b-2 border-borderColor pb-1 mb-4 last:pb-0 last:mb-0"
          >
            <p className="text-gray-600 text-sm">{item?.title}</p>
            <span className="text-base text-primary ">{item?.value}</span>
          </div>
        );
      })}
    </div>
  );
};

export default UserStatistics;
