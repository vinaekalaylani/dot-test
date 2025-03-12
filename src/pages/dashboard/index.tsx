import { Button, Card, Input, Layout, Table, Tabs, Tag } from "antd";
import Sider from "../../components/sider";
import { AppstoreOutlined, TableOutlined } from "@ant-design/icons";
import { useEffect, useMemo, useState } from "react";

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

const TodoCard = ({ todo }: { todo: Todo }) => {
	return (
		<Card key={todo.id} title={`Task #${todo.id}`} className="shadow-md">
			<p>{todo.title}</p>
			<Tag color={todo.completed ? "green" : "red"}>
				{todo.completed ? "Completed" : "Not Completed"}
			</Tag>
		</Card>
	);
};

export default function DashboardPage() {
	/* Store Data */
	/* ----- */

	/* Constant */
	const columns = [
		{ title: "ID", dataIndex: "id", key: "id" },
		{ title: "Title", dataIndex: "title", key: "title" },
		{
			title: "Status",
			dataIndex: "completed",
			key: "completed",
			render: (completed: boolean) => (
				<Tag color={completed ? "green" : "red"}>
					{completed ? "Completed" : "Not Completed"}
				</Tag>
			)
		}
	];

	/* State */
	const [todos, setTodos] = useState<Todo[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [viewMode, setViewMode] = useState<"table" | "card">("table");
	const [status, setStatus] = useState<string>("-1");
	const [wild, setWild] = useState<string>("");

	/* Hooks */
	const filteredTodos = useMemo(() => {
		return todos.filter((todo) =>
			(status === "-1" || (status === "1" && todo.completed) || (status === "0" && !todo.completed)) &&
			todo.title.toLowerCase().includes(wild.toLowerCase())
		);

	}, [todos, wild, status])

	/* Function */
	/* ----- */

	/* componentDidMount and componentDidUpdate */
	useEffect(() => {
		fetch("https://dummy-json.mock.beeceptor.com/todos")
			.then((res) => res.json())
			.then((data) => {
				setTodos(data);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching todos:", error);
				setLoading(false);
			});
	}, []);


	return (
		<Layout className="min-h-screen bg-[#23547b]">
			<Sider />
			<Layout.Content style={{ background: "#f6f8fe", borderRadius: "15px" }} className="p-3 my-2 me-2">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-xl font-bold">Todo List</h2>
					<Button.Group>
						<Button
							type={viewMode === "table" ? "primary" : "default"}
							icon={<TableOutlined />}
							onClick={() => setViewMode("table")}
						>
							Table
						</Button>
						<Button
							type={viewMode === "card" ? "primary" : "default"}
							icon={<AppstoreOutlined />}
							onClick={() => setViewMode("card")}
						>
							Card
						</Button>
					</Button.Group>
				</div>

				<Tabs
					activeKey={status}
					onChange={(target) => setStatus(target)}
					className="mb-3 ant-layout-card"
					tabBarExtraContent={(
						<Input
							value={wild}
							placeholder="Wildcard search..."
							onChange={(e) => setWild(e.target.value)}
						/>
					)}
					items={[
						{ label: "All", key: "-1" },
						{ label: "Completed", key: "1" },
						{ label: "Not Completed", key: "0" },
					]}
				/>

				{viewMode === "table" ? (
					<div className="ant-layout-card">
						<Table dataSource={filteredTodos} columns={columns} loading={loading} rowKey="id" pagination={{ pageSize: 10 }} />
					</div>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
						{filteredTodos.map((todo) => (
							<TodoCard key={todo.id} todo={todo} />
						))}
					</div>
				)}
			</Layout.Content>
		</Layout>
	)
}