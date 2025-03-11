import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectItem,
  } from "@/components/ui/select";
  
  interface SelectDropdownProps {
    options: { label: string; value: string }[];
    selectedValue: string;
    onChange: (value: string) => void;
    placeholder?: string;
    label?: string;
    width?: string;
    className?: string;
    isBorder?: boolean; 
  }
  
  const SelectDropDown = ({
    options,
    className,
    selectedValue,
    onChange,
    placeholder = "Select an option",
    width = "w-[180px]",
    isBorder = true, 
  }:SelectDropdownProps 
  ) => {
    return (
      <Select value={selectedValue} onValueChange={onChange}>
        <SelectTrigger className={`focus:ring-transparent ${className} ${width} ${isBorder ? "" : "border-0 shadow-none"}`}>
        <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem className="font-normal" key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  };
  
  export default SelectDropDown;
  