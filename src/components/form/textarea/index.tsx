import { Form, Input } from "antd";
const { TextArea } = Input;

interface TextAreaCompProps {
  placeholder?: string;
  readOnly?: boolean;
  rows?: number;
  [key: string]: any;
}

export default function TextAreaComp(props: TextAreaCompProps) {
  const { placeholder = "", readOnly, rows = 3, ...rest } = props;

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
      <TextArea readOnly={readOnly} rows={rows} placeholder={placeholder} />
    </Form.Item>
  );
}
