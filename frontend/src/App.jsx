import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function RootLayout() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-slate-950 text-slate-50">
      <NavBar />

      <div className="flex-1 w-full">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
