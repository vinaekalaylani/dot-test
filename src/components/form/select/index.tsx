import { Form, Select } from "antd";

interface SelectCompProps {
	style?: React.CSSProperties;
	disabled?: boolean;
	onChange?: (value: any) => void;
	datas: { value: string | number; label: string; disabled?: boolean }[];
	placeholder?: string;
	defaultValue?: string | number;
	[key: string]: any;
}

export default function SelectComp(props: SelectCompProps) {
	const { style, disabled, onChange, datas, placeholder, defaultValue, ...rest } = props;

	/* Store Data */
	/* ----- */

	/* Hooks */
	/* ----- */

	/* Constant */
	/* ----- */

	/* State */
	/* ----- */

	/* Function */
	const generateOptions = () =>
		datas.map((item, index) => (
			<Select.Option key={index} value={item.value} disabled={item.disabled}>
				{item.label}
			</Select.Option>
		));

	/* componentDidMount and componentDidUpdate */
	/* ----- */

	return (
		<Form.Item {...rest}>
			<Select
				defaultValue={defaultValue}
				style={style}
				placeholder={placeholder}
				disabled={disabled}
				showSearch
				className="w-100"
				optionFilterProp="children"
				onChange={onChange}
				filterOption={(input, option) => {
					const label = typeof option?.children === "string" ? option.children : "";
					return label.toLowerCase().includes(input.toLowerCase());
				}}
			>
				{generateOptions()}
			</Select>
		</Form.Item>
	);
}
