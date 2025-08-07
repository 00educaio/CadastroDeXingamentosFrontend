import type { JSX } from "react";
import TopBar from "./TopBar";

type Props = {
  section: string;
};

export default function RightView({ section }: Props) {
  let SectionComponent: JSX.Element;

  switch (section) {
    case "home":
      SectionComponent = <TopBar />;
      break;
    default:
      SectionComponent = <p>Seção não encontrada</p>;
  }

  return (
    <div className="h-full w-full rounded-r-lg bg-pentenaria">
      <TopBar />
      {SectionComponent}
    </div>
  );
}
