import { lazy } from "react";
const FindJobs = lazy(() => import("@/modules/find-jobs/JobList"));

const JobSearch = () => {
  return (
    <div>
      <FindJobs />
    </div>
  );
};

export default JobSearch;
