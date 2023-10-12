import Moon from "./Moon";
import { SVGProps } from "react";
import Sun from "@/components/Icons/Sun";
import BankNote from "@/components/Icons/BankNote";
import BarChart from "@/components/Icons/BarChart";
import Target from "@/components/Icons/Target";
import Login from "@/components/Icons/Login";
import Medal from "@/components/Icons/Medal";

export type IconNames =
  | "moon"
  | "sun"
  | "bar-chart"
  | "bank-note"
  | "target"
  | "medal-first"
  | "medal-second"
  | "medal-third"
  | "login";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconNames;
};

const Icon = ({ name, ...rest }: IconProps) => {
  switch (name) {
    case "moon":
      return <Moon {...rest} />;
    case "sun":
      return <Sun {...rest} />;
    case "bank-note":
      return <BankNote {...rest} />;
    case "bar-chart":
      return <BarChart {...rest} />;
    case "login":
      return <Login {...rest} />;
    case "target":
      return <Target {...rest} />;
    case "medal-first":
      return <Medal type="first" />;
    case "medal-second":
      return <Medal type="second" />;
    case "medal-third":
      return <Medal type="third" />;

    default:
      return null;
  }
};

export default Icon;
