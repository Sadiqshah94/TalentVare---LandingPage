export interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
    posted: string;
    applicants: number;
    isPromoted: boolean;
  }
  
  export interface JobCardProps {
    jobs: Job;
  }


  export interface JobFeatureProps {
    title: string;
    linkText: string;
    linkUrl: string;
    jobCards: any[]; 
  }
  
  export interface JobFilterProps {
    selectedOption: string;
    setSelectedOption: (value: string) => void;
  }