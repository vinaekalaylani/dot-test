import { ConfigProvider } from "antd";
import { Navigate, useRoutes } from "react-router-dom";

export default function App() {
  const { token } = localStorage;

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
      element: (
        <div className="items-center justify-center">
          <div className="text-3xl">
            Login
          </div>
        </div>
      ),
    },
    {
      path: "/",
      element: token ? (
        <div className="items-center justify-center">
          <div className="text-3xl">
            Login
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      ),
    },
  ]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#004F97",
          colorPrimaryBg: "#e6f4ff",
        },
      }}>
      {element}
    </ConfigProvider>
  );
}
