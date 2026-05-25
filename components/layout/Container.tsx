import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export function Container({ children, className = "", as: Tag = "div" }: ContainerProps) {
  return (
    <Tag className={`max-w-7xl mx-auto px-6 lg:px-8 ${className}`}>{children}</Tag>
  );
}
