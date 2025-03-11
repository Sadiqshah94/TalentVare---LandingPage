import { JobCardProps } from "../interface/types";
import {Bookmark, Button, Clock, Link, MapPin} from '../index';


const JobCard: React.FC<JobCardProps> = ({ jobs }) => {
  const { title, company, location, posted, applicants, isPromoted } = jobs;
  return (
    <div className="bg-boxColor rounded-lg px-3 py-3">
      <p className="font-bold text-xs mb-2">
        {isPromoted ? (
          <span className="text-red-500">Promoted</span>
        ) : (
          <span className="font-bold">Standard</span>
        )}
      </p>
      <div className="flex gap-4">
        <img src="/assets/imgs/job-img.svg" alt="Job" />
        <div>
          <p className="text-sm">{title}</p>
          <p className="text-sm">{company}</p>
        </div>
      </div>
      <div>
        <ul>
          <li className="flex gap-2 mb-2 mt-2">
            <MapPin className="w-4 h-4" />
            <p className="text-xs">{location}</p>
          </li>
          <li className="flex gap-2">
            <Clock className="w-4 h-4" />
            <p className="text-xs">
              {posted} |{" "}
              <Link className="underline" to="/">
                {applicants} applicants
              </Link>
            </p>
          </li>
        </ul>
        <div className="mt-3 flex justify-between gap-4 items-center">
          <Button className="w-32 py-2 px-3 font-normal border-sm bg-primary text-white">
            Apply Now
          </Button>
          <Bookmark className="w-5 h-5 text-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
