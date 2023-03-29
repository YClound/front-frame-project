import { Suspense } from "react";
import { Login, Center } from "../pages";
import routerConfig, { IRouteData } from "./config";

export const RouteIds = {
  hello: "hello",
  sys: "sys",
  role: "role",
  user: "user",
};

export const routesStructData = [
  {
    id: RouteIds.hello,
  },
  {
    id: RouteIds.sys,
    children: [{ id: RouteIds.role }, { id: RouteIds.user }],
  },
];

const processRoute = (children: IRouteData[], routesData: IRouteData[], prefix: string) => {
  routesData.forEach((routeItem, index) => {
    const { id = '' } = routeItem;
    if (permissions.includes(id)) {
      let routeData = routerConfig[id];
      // 沿途记录，然后拼接成path
      routeData.path = prefix + "/" + id;
      routeData.routeId = id;
      const { component: Component } = routeData;
      if (Component) {
        routeData.element = (
          <Suspense>
            <Component></Component>
          </Suspense>
        );
      }
      children!.push(routeData);
      if (routeItem.children!?.length > 0) {
        routeData.children = [];
        processRoute(routeData.children, routeItem.children!, routeData.path);
      }
    }
  });
};

// 中心路由
export let centerRouteDta: IRouteData = {
  id: RouteIds.hello,
  name: "中心",
  path: "/center",
  element: (
    <Suspense>
      <Center></Center>
    </Suspense>
  ),
  children: [],
};

// 登陆页
export let routeData = [
  {
    name: "登陆页",
    path: "/",
    element: <Login></Login>,
  },
  centerRouteDta,
];


let permissions: string[] = [];
export const createRouteData = (per: string[]) => {
  let result: any[] = [];
  permissions = per;
  processRoute(result, routesStructData, "/center");
  centerRouteDta.children = [];
  centerRouteDta.children = result;
  return routeData;
};

export default routeData;