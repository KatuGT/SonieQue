import {
  RadioGroup,
  Radio,
  useRadio,
  VisuallyHidden,
  cn,
} from "@nextui-org/react";
import React from "react";

const RadioButtonImage = (props: any) => {
  const {
    Component,
    children,
    isSelected,
    description,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
    getControlProps,
  } = useRadio(props);

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        "group flex items-center flex-col hover:opacity-70 active:opacity-50 justify-between tap-highlight-transparent",
        "max-w-[300px] cursor-pointer rounded-lg gap-4 p-4",
        "data-[selected=true]:border-primary"
      )}
    >
      <div {...getLabelWrapperProps()}>
        {children && <span {...getLabelProps()}>{children}</span>}
      </div>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <span {...getWrapperProps()}>
        <span {...getControlProps()} />
      </span>
    </Component>
  );
};

export default RadioButtonImage;
