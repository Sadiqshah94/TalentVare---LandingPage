import {
  UserInfo,
  JobFeature,
  JobFilter,
  SectionHeader,
  UserStatistics,
  jobCards,
  statistics,
  User,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./index";
const FindJobs = () => {
  return (
    <div className="my-3 container max-w-[1443px] m-auto h-screen ">
      <div className="block lg:flex  h-auto">
        {/* left side  */}
        <div className="w-full lg:w-[380px] h-auto relative lg:fixed overflow-y-auto transparent-scrollbar">
          {/* user info  */}
          <UserInfo User={User} />
          {/* user Profile info  */}
          <UserStatistics statistics={statistics} />
          {/* event  */}
          <div className="my-3 bg-white py-2 px-3 rounded-lg">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="py-0">
                  <h2 className="text-base font-bold">My Calendar</h2>
                </AccordionTrigger>
                <p>Upcoming Interviews</p>
                <AccordionContent>Data will display here</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
    {/* right side  */}
        <div className="flex-1 rounded-lg p-4 h-full ml-0 lg:ml-[400px] overflow-auto">
          <div>
            <SectionHeader
              title="Find your Dream Job"
              userName="Albert"
              subtitle=" Explore the latest job openings and apply for the best
              opportunities available today!"
            />
            <JobFilter/>

            <JobFeature
              title="Feature Jobs"
              linkText="See Featured Jobs"
              linkUrl="/featured-jobs"
              jobCards={jobCards}
            />
            <JobFeature
              title="Recommended Jobs"
              linkText="See Featured Jobs"
              linkUrl="/featured-jobs"
              jobCards={jobCards}
            />
            <JobFeature
              title="Top Hiring Jobs"
              linkText="See Featured Jobs"
              linkUrl="/featured-jobs"
              jobCards={jobCards}
            />
            <JobFeature
              title="Newest Job Openings"
              linkText="See Featured Jobs"
              linkUrl="/featured-jobs"
              jobCards={jobCards}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
