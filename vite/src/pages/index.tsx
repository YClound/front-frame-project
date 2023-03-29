import { lazy } from "react";
const Center = lazy(() => import("./center"));
const Login = lazy(() => import("./login"));
const Page = lazy(() => import("./page"));
const Hello = lazy(() => import("./hello"));
const UserPage = lazy(() => import("./sys/user"));
const RolePage = lazy(() => import("./sys/role"));
export { Center, Login, Page, Hello, UserPage, RolePage };