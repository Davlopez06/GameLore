import type React from "react";

type Props = {
  children: React.ReactNode;
};

const CardCtn = ({ children } : Props) => {
  return <div className="w-full flex flex-wrap gap-4 justify-center">{children}</div>;
};

export default CardCtn;
