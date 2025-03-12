import { Navigate, useRoutes } from "react-router-dom";

import LoginPage from "./pages/login";
import DashboardPage from "./pages/dashboard";

import { ConfigProvider } from "antd";

export default function App() {
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

  const element = useRoutes([
    {
      path: "/login",
      element: <LoginPage/>,
    },
    {
      path: "/",
      element: localStorage.getItem("token") ? <DashboardPage /> : <Navigate to="/login" />,
    },
  ]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#23547b",
          colorPrimaryBg: "#e6f4ff",
        },
        components: {
          Menu: {
						algorithm: true,
						itemBg: "rgb(35, 84, 123)",
						itemSelectedBg: "rgb(255, 255, 255)", // menu item
						itemSelectedColor: "rgb(35, 84, 123)", // menu item
						itemHoverBg: "rgb(255, 255, 255)", // menu item
						itemHoverColor: "rgba(35, 84, 123, 0.88)", // menu item
						itemActiveBg: "rgb(23, 66, 99)", // menu item
						itemColor: "rgba(255, 255, 255, 1)",
						groupTitleColor: "rgb(255, 255, 255)",
						colorPrimaryBorder: "rgba(255, 255, 255, 0)",
						itemMarginInline: 8,
						itemHeight: 33,
					},
        }
      }}>
      {element}
    </ConfigProvider>
  );
}
