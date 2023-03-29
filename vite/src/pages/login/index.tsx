import { Card } from "antd";
import type { ReactNode } from "react";

const { Meta } = Card;

const Login: React.FC<any> = (props: { children: ReactNode }) => (
  <Card
    hoverable
    style={{ width: 400 }}
  >
    {props.children}
  </Card>
);

export default Login;