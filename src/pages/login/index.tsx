import { useNavigate } from "react-router-dom";

import Footer from "../../components/footer";
import InputComp from "../../components/form/input";
import PasswordComp from "../../components/form/password";

import { UserOutlined, UnlockOutlined } from "@ant-design/icons";
import { Button, Card, Form, Layout } from "antd";

export default function LoginPage() {
	/* Store Data */
	/* ----- */

	/* Hooks */
	const [form] = Form.useForm();

	const navigate = useNavigate();

	/* Constant */
	/* ----- */

	/* State */
	/* ----- */

	/* Function */
	const handleSubmit = (values: { username: string; pw: string }) => {
		localStorage.setItem("username", values.username);
		localStorage.setItem("token", "isLoggedIn");
		navigate("/")
	};

	const handleFailed = (error: unknown) => {
		console.log(error);
	};

	/* componentDidMount and componentDidUpdate */
	/* ----- */

	return (
		<Layout className="min-h-screen flex flex-col border">
			<Layout.Content className="flex flex-col items-center justify-center bg-[#23547b]">
				<Card className="w-full max-w-md p-6 rounded-lg shadow-lg">
					<Form
						form={form}
						layout="vertical"
						autoComplete="off"
						onFinish={handleSubmit}
						onFinishFailed={handleFailed}
					>
						<div className="text-center mb-6">
							<h2 className="text-[#23547b] font-bold text-lg mt-3">Todo App</h2>
							<p className="text-gray-600 text-sm">Sign in to manage your tasks.</p>
						</div>

						<InputComp
							size="large"
							name="username"
							placeholder="Enter Username"
							prefix={<UserOutlined className="me-2 text-[#23547b]" />}
							rules={[
								{
									required: true,
									message: "Usernane can't be empty"
								}
							]}
						/>

						<PasswordComp
							size="large"
							name="pw"
							placeholder="Enter Password"
							prefix={<UnlockOutlined className="me-2 text-[#23547b]" />}
							rules={[
								{
									required: true,
									message: "Password can't be empty"
								}
							]}
						/>

						{/* Login Button */}
						<Button type="primary" htmlType="submit" className="w-full bg-[#23547b] hover:bg-blue-700 text-white py-2 rounded-md">
							Sign In
						</Button>
					</Form>
				</Card>
			</Layout.Content>

			{/* Footer */}
			<Footer />
		</Layout>
	);
}
