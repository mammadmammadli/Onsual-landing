import Moon from "./Moon";
import { SVGProps } from "react";
import Sun from "@/components/Icons/Sun";
import BankNote from "@/components/Icons/BankNote";
import BarChart from "@/components/Icons/BarChart";
import Target from "@/components/Icons/Target";
import Login from "@/components/Icons/Login";
import Medal from "@/components/Icons/Medal";
import Apple from "@/components/Icons/Apple";
import GooglePlay from "@/components/Icons/GooglePlay";
import Plus from "@/components/Icons/Plus";
import Minus from "@/components/Icons/Minus";
import Glass from "@/components/Icons/Glass";
import IphoneActions from "@/components/Icons/iphone-actions";
import Close from "@/components/Icons/Close";
import Star from "@/components/Icons/Star";
import QuizRectangle from "@/components/Icons/QuizRectangle";
import Chevron from "@/components/Icons/Chevron";
import Hamburger from "@/components/Icons/Hamburger";
import Ellipse from "./Ellipse";

export type IconNames =
  | "apple"
  | "google-play"
  | "moon"
  | "ellipse"
  | "chevron-down"
  | "sun"
  | "bar-chart"
  | "bank-note"
  | "target"
  | "medal-first"
  | "medal-second"
  | "medal-third"
  | "minus"
  | "plus"
  | "login"
  | "logo"
  | "watch"
  | "light"
  | "close"
  | "medal"
  | "hamburger"
  | "star"
  | "quiz-rectangle";

type IconProps = SVGProps<SVGSVGElement> &
  (
    | {
        name: IconNames;
      }
    | {
        name: "iphone-actions";
        batteryLevel: number;
      }
  );

const Icon = (props: IconProps) => {
  switch (props.name) {
    case "moon":
      return <Moon {...props} />;
    case "sun":
      return <Sun {...props} />;
    case "bank-note":
      return <BankNote {...props} />;
    case "bar-chart":
      return <BarChart {...props} />;
    case "login":
      return <Login {...props} />;
    case "target":
      return <Target {...props} />;
    case "medal-first":
      return <Medal type="first" />;
    case "medal-second":
      return <Medal type="second" />;
    case "medal-third":
      return <Medal type="third" />;
    case "apple":
      return <Apple {...props} />;
    case "google-play":
      return <GooglePlay {...props} />;
    case "plus":
      return <Plus {...props} />;
    case "minus":
      return <Minus {...props} />;
    case "watch":
      return <Glass icon="watch" {...props} />;
    case "light":
      return <Glass icon="light" {...props} />;
    case "medal":
      return <Glass icon="medal" {...props} />;
    case "close":
      return <Close {...props} />;
    case "star":
      return <Star {...props} />;
    case "quiz-rectangle":
      return <QuizRectangle {...props} />;
    case "chevron-down":
      return <Chevron {...props} direction="down" />;
    case "iphone-actions":
      return <IphoneActions mode="dark" {...props} />;
    case "hamburger":
      return <Hamburger {...props} />;
    case "ellipse":
      return <Ellipse />;
    case "logo":
      return 
    default:
      return null;
  }
};

export default Icon;
