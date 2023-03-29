import { Login, Center, Page, Hello, UserPage, RolePage } from "../pages";

export type IRouteData = {
  children?: IRouteData[];
  element?: JSX.Element;
  meta?: {
    title?: string
  },
  component?: React.LazyExoticComponent<React.FC<any>>
  state?: object,
  path?: string;
  routeId?: string;
  id?: string;
  name?: string;
}

export type IConfig = {
  [key: string]: IRouteData
}

const config: IConfig = {
  center: {
    meta: {
      title: "中心",
    },
  },
  hello: {
    meta: {
      title: "首页",
    },
    component: Hello,
  },
  sys: {
    meta: {
      title: "系统管理",
    },
  },
  user: {
    meta: {
      title: "用户管理",
    },
    component: UserPage,
  },
  role: {
    meta: {
      title: "角色管理",
    },
    component: RolePage,
    state: { a: 1111 },
  },
}
export default config;