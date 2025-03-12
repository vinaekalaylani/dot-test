import { Button, Form, Input, Space } from "antd";

interface PasswordCompProps {
	size?: "large" | "middle" | "small";
	disabled?: boolean;
	prefix?: React.ReactNode;
	placeholder?: string;
	variant?: "filled" | "outlined";

	form?: any;
	change?: boolean;
	isChange?: boolean;
	setIsChange?: (val: boolean) => void;

	advanceRules?: boolean;
	rules?: any[];
	[key: string]: any;
}

export default function PasswordComp(props: PasswordCompProps) {
	const {
		size = "middle",
		disabled = false,
		prefix,
		placeholder = "Enter password...",
		variant = "filled",

		form,
		change = false,
		isChange = false,
		setIsChange = () => { },

		advanceRules = false,
		rules = [],
		...rest
	} = props;

	/* Store Data */
	/* ----- */

	/* Hooks */
	/* ----- */

	/* Constant */
	const advance = [
		{ min: 8, message: "Password must be at least 8 characters long." },
		{ max: 30, message: "Password must be at most 30 characters long." },
		() => ({
			validator(_: any, value: string) {
				if (!value) return Promise.resolve();

				const errors: string[] = [];

				if (!/[a-z]/.test(value)) errors.push("Lowercase letter [a-z]");
				if (!/[A-Z]/.test(value)) errors.push("Uppercase letter [A-Z]");
				if (!/[0-9]/.test(value)) errors.push("Number [0-9]");
				if (!/[^A-Za-z0-9]/.test(value)) errors.push("Symbol [!@#$%^&*]");

				return errors.length
					? Promise.reject(new Error("Password must contain: " + errors.join(", ")))
					: Promise.resolve();
			},
		}),
		...rules,
	];

	/* State */
	/* ----- */

	/* Function */
	const generateComp = () => {
		if (change) {
			return isChange ? (
				<Space.Compact block>
					<Input.Password
						style={{ width: "100%" }}
						size={size}
						variant={variant}
					/>
					<Button
						onClick={() => {
							setIsChange(false);
							form?.setFieldsValue({ pw: "***oldpassword***" });
						}}
					>
						Cancel
					</Button>
				</Space.Compact>
			) : (
				<Button
					disabled={disabled}
					type="primary"
					onClick={() => setIsChange(true)}
				>
					Change Password
				</Button>
			);
		}

		return (
			<Input.Password
				size={size}
				prefix={prefix}
				placeholder={placeholder}
				className={variant === "filled" ? "bg-gray-100" : "border border-gray-300"}
			/>
		);
	};

	/* componentDidMount and componentDidUpdate */
	/* ----- */

	return (
		<Form.Item {...rest} rules={advanceRules ? advance : rules}>
			{generateComp()}
		</Form.Item>
	);
}
