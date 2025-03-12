import "./index.css";
import { JSX, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Icon from "../../components/icon";

import { Avatar, Badge, Divider, Layout, Menu, Tag } from "antd";

interface MenuItem {
	label: string;
	key: string;
	icon?: JSX.Element;
	children?: MenuItem[];
	onClick?: () => void;
}

export default function Sider() {
	const username = localStorage.getItem("username") || "User";

	/* Hooks */
	const navigate = useNavigate();
	const location = useLocation();

	/* State */
	const [collapsed, setCollapsed] = useState(false);

	/* Functions */
	const getItem = (label: string, key: string, isLink: boolean, icon?: JSX.Element, children?: MenuItem[]): MenuItem => ({
		label,
		key,
		icon,
		children,
		...(isLink ? { onClick: () => navigate(key) } : {}),
	});

	const items = [
		getItem("Dashboard", "/dashboard", false, <Icon type="fa" name="faGaugeHigh" />)
	];

	const handleLogout = () => {
		localStorage.clear();
		navigate("/login");
	}

	/* componentDidMount and componentDidUpdate */
	/* ----- */

	return (
		<Layout.Sider theme="light" className="min-h-screen bg-[#23547b]" collapsible collapsed={collapsed} onCollapse={setCollapsed}>
			<div className="flex flex-col justify-between h-full">
				<div>
					<div className="flex justify-center py-3">
						<img height="45" src={"/assets/images/logo.png"} alt="logo" />
					</div>
					<div className="mx-2 mb-3 p-3 bg-[#1c476b] rounded-lg">
						<div className={`flex items-center ${collapsed ? "justify-center" : ""}`}>
							<Badge
								dot
								style={{
									background: "#54BAB9",
									top: "29px",
									right: "5px",
								}}
							>
								<Avatar style={{ backgroundColor: "#ffffff", color: "#23547b" }}>
									{username[0] && username[0].toLocaleUpperCase()}
								</Avatar>
							</Badge>
							{!collapsed && (
								<div className="ms-3 text-white text-sm">
									<div className="truncate font-bold">{username}</div>
									<div className="truncate">User</div>
									<Tag className="bg-red-600 text-white cursor-pointer border-none" onClick={handleLogout}>
										Logout
									</Tag>
								</div>
							)}
						</div>
					</div>
					<Divider className="my-3 bg-blue-900" />
					<Menu selectedKeys={[location.pathname]} mode="inline" items={items} />
				</div>
			</div>
		</Layout.Sider>
	);
}