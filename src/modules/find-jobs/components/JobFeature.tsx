
import { JobFeatureProps } from "../interface/types";
import { Link} from '../index'
import JobCard from "./JobCard";

const JobFeature: React.FC<JobFeatureProps> = ({ title, linkText, linkUrl, jobCards }) => {
  return (
    <div>
      <div className="my-3 flex items-center gap-2">
        <h1 className="text-xl">{title}</h1>
        <Link to={linkUrl} className="text-[#0154AA] text-base underline">
          {linkText}
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {jobCards.map((job, index) => (
          <JobCard jobs={job} key={index} />
        ))}
      </div>
    </div>
  );
};

export default JobFeature;
