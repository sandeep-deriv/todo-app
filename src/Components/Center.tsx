import React from "react";

interface CenterProps {
  children: React.ReactNode;
}

const Center = ({ children }: CenterProps) => {
  return <div className="todo d-flex v-center h-center">{children}</div>;
};

export default Center;
