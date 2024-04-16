import { FC, HtmlHTMLAttributes } from "react";

interface InputWrapperProps extends HtmlHTMLAttributes<HTMLDivElement> {}

const InputWrapper: FC<InputWrapperProps> = ({ ...props }) => {
  return (
    <div
      className="flex items-start justify-center capitalize gap-2 flex-col"
      {...props}
    />
  );
};
export default InputWrapper;
