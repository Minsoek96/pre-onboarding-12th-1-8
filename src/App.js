import { RouterProvider } from "react-router-dom";
import { router } from "./pages/Routes";

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
