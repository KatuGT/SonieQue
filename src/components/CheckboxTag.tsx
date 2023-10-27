import React, { useEffect, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { Chip } from "@nextui-org/react";

interface CheckboxTagProps {
  texto: string;
  color:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
  field: any;
}

const CheckboxTag = ({ color, texto, field }: CheckboxTagProps) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(field.value.includes(texto));
  }, [field.value, texto]);

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;

    const newValue = checked
      ? [...field.value, value]
      : field.value.filter((val: string) => val !== value);
    field.onChange(newValue);
  };

  return (
    <label className="checkboxTag cursor-pointer">
      <input
        {...field}
        type="checkbox"
        className="hidden"
        onChange={handleCheckbox}
        checked={isChecked}
        value={texto}
        name="tags"
      />
      <Chip
        startContent={<CheckIcon />}
        variant={isChecked ? "solid" : "faded"}
        color={color}
      >
        {texto}
      </Chip>
    </label>
  );
};

export default CheckboxTag;
