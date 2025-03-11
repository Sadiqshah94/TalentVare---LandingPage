import React from "react";

interface SectionHeaderProps {
  title: string;  
  userName: string;
  subtitle: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, userName, subtitle, className }) => {
  return (
    <div className={className}>
      <h3 className="text-xl font-semibold">
        {title}, <span className="text-primary">{userName}!</span>
      </h3>
      <p className="text-sm text-[#585D6E]">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
