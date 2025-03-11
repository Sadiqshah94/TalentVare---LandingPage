import { LucideIcon } from "lucide-react";
import { Input } from "../input";
import { Label } from "../label";
import { clsx } from "clsx";

interface InputFieldProps {
  label?: string;
  labelCaption?: string;
  numbers?: number;
  size?: any;
  multiline?: boolean;
  disabled?: boolean;
  name?: string;
  type?:
    | "text"
    | "password"
    | "email"
    | "tel"
    | "number"
    | "date"
    | "checkbox"
    | "url"
    | "file"
    | "range"
    | "search"
    | "color"
    | "radio";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: any;
  value?: any;
  options?: { label: string; value: string }[];
  maxRows?: number;
  id?: string;
  error?: any;
  helperText?: any;
  isPassword?: boolean;
  isInputWithIcon?: boolean;
  autoComplete?: string;
  onClick?: () => void;
  required?: boolean;
  className?: string;
  accept?: string;
  icon?: LucideIcon;
  imageUrl?: string; 
  isBg?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  accept,
  id,
  icon: Icon,
  imageUrl,
  type = "text",
  autoComplete = "off",
  value,
  onChange,
  options,
  numbers,
  onBlur,
  isPassword,
  isInputWithIcon,
  multiline = false,
  disabled = false,
  error,
  helperText,
  labelCaption,
  onClick,
  required,
  isBg="transparent",
  name,
  className,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <Label
          htmlFor={id}
          className={clsx("text-gray-700  font-semibold mb-2", {
            "text-red-500": error,
          })}
        >
          {label}
        </Label>
      )}

      <div className="relative">
        {isInputWithIcon && (
          <>
            {Icon && <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />}
            {imageUrl && (
              <img
                src={imageUrl}
                alt="input-icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full"
              />
            )}
          </>
        )}

        <Input
          accept={accept}
          id={id}
          disabled={disabled}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          placeholder={labelCaption}
          onBlur={onBlur}
          required={required}
          name={name}
          className={clsx(
            "bg-[#F6F9FF]  text-sm w-full px-4 py-2 border-0 rounded-md focus:ring-2 focus:ring-blue-500",
            {
              "border-red-500": error,
              "text-red-500": error,
              "focus:ring-red-500": error,
              "pl-10": isInputWithIcon && (Icon || imageUrl), // Adjust left padding if an icon or image is present
            },
            className
          )}
          size="small"
          type={type}
          {...props}
        />
      </div>

      {error && helperText && <p className="text-sm text-red-500 mt-1">{helperText}</p>}
    </div>
  );
};

export { InputField };
