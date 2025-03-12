import { Form, Input } from "antd";

interface InputCompProps {
  size?: "large" | "middle" | "small";
  disabled?: boolean;
  prefix?: React.ReactNode;
  placeholder?: string;
  addonBefore?: React.ReactNode;
  variant?: "filled" | "outlined";
  [key: string]: any;
}

export default function InputComp(props: InputCompProps) {
  const {
    size = "middle",
    disabled = false,
    prefix,
    placeholder = "Enter text...",
    addonBefore,
    variant = "filled",
    ...rest
  } = props;

  /* Store Data */
  /* ----- */

  /* Hooks */
  /* ----- */

  /* Constant */
  /* ----- */

  /* State */
  /* ----- */

  /* Function */
  /* ----- */

  /* componentDidMount and componentDidUpdate */
  /* ----- */

  return (
    <Form.Item {...rest}>
      <Input
        size={size}
        disabled={disabled}
        placeholder={placeholder}
        prefix={prefix}
        addonBefore={addonBefore}
        className={variant === "filled" ? "bg-gray-100" : "border border-gray-300"}
      />
    </Form.Item>
  );
}
