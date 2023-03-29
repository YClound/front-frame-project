import {
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { createRouteData, routeData } from "@/router/index";
import { globalStore } from "@/stores/index";
import { observer } from "mobx-react";
// import { getPermissions } from "./service";
import Login from "./pages/login";
import Center from "./pages/center";

export default observer(() => {
  const { setRouterData, setPermissions } = globalStore;
  const [routerData, setRouter] = useState<any>();
  const navigate = useNavigate();
  const token = sessionStorage.getItem("ACCESS_TOKEN");

  useEffect(() => {
  }, [token, globalStore.token]);

  const toRenderRoute = (item: any) => {
    const { children } = item;
    let arr = [];
    if (children) {
      arr = children.map((item: any) => {
        return toRenderRoute(item);
      });
    }
    return (
      <Route
        children={arr}
        key={item.path}
        path={item.path}
        element={item.element}
      />
    );
  };

  return (
    <>
      {routerData && (
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route
            path="/"
            element={<Center />}
            children={routerData?.[1]?.children?.map((item: any) => {
              return toRenderRoute(item);
            })}
          ></Route>
        </Routes>
      )}
    </>
  );
});