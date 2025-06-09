import { WorkStatusCard } from "./WorkStatusCard";
import { StatsSummary } from "./StatsSummary";
import { RecentJobs } from "./RecentJobs";
import { UserAvatar } from "../../navigation/components/UserAvatar";

export const Dashboard = () => {
  return (
    <div className="relative p-8">
      <div className="flex flex-col gap-6 mb-8">
        <div className="flex items-center gap-5">
          <div className="transform scale-115 mr-7 ml-4">
            <UserAvatar />
          </div>
          <div className="border-l-2 border-gray-200 pl-6">
            <h1 className="text-2xl font-bold mb-2 text-indigo-900">Welcome to your Dashboard</h1>
            <p className="text-indigo-800">
              Track your freelance business at a glance
            </p>
          </div>
        </div>
      </div>

      <StatsSummary />

      <div className="grid grid-cols-3 gap-6">
        <WorkStatusCard className="h-full" />
        <RecentJobs className="col-span-2 h-full" />
      </div>
    </div>
  );
};
