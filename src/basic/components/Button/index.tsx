import * as React from "react";
import "./index.css";

type Prop = React.PropsWithChildren<{}>;

const Button: React.FC<Prop> = ({ children }) => {
  return <button className="button">{children}</button>;
};

export default Button;
