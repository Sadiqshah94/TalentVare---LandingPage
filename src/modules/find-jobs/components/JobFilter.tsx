import {
  AppImages,
  Badge,
  Button,
  departmentOptions,
  SelectDropDown,
  InputField,
  tags,
  useState,
} from "../index";

const JobFilter = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("");
  return (
    <div>
      <div className="bg-boxColor block sm:flex   gap-2 px-4 py-5  my-3 rounded-lg ">
        <InputField
          type="text"
          isInputWithIcon
          labelCaption="Job Title, Company, or Keywords"
          className="focus-visible:ring-0 selectBorder bg-transparent rounded-none border-r-2   "
        />
        <SelectDropDown
          options={departmentOptions}
          selectedValue={selectedDepartment}
          onChange={setSelectedDepartment}
          placeholder="Select Location"
          label="Departments"
          width="w-full sm:w-[250px]"
          isBorder={false}
        />
        <SelectDropDown
          options={departmentOptions}
          selectedValue={selectedJobType}
          onChange={setSelectedJobType}
          placeholder="Job Type"
          label="Departments"
          width="w-full sm:w-[250px]"
          className="selectBorder rounded-none border-0 border-l-2"
        />
        <Button className="w-full sm:w-[250px] py-2  px-3 font-normal border-sm bg-primary text-white">
          <img src={AppImages.whiteSearch} alt="Search" /> Search
        </Button>
      </div>
      <div className="border-b-0 sm:border-b-2 flex-wrap sm:no-wrap flex gap-1 sm:gap-3 items-center">
        <p>Similar:</p>
        <div className="flex-wrap sm:no-wrap flex gap-2 sm:gap-4">
          {tags.map((tag, index) => {
            return (
              <div
                key={index}
                className="block sm:flex items-center gap-2 my-0 sm:my-2"
              >
                <Badge
                  className="text-gray-500 font-normal py-2 border-2 text-center border-gray px-4 "
                  variant="outline"
                >
                  {tag.name}
                </Badge>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JobFilter;
