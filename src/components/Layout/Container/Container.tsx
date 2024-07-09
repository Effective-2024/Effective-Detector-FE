import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => (
  <div className="from-background-primary flex min-h-[calc(100vh-128px)] justify-center bg-white bg-gradient-to-b to-white to-50% pt-[62px]">
    <div className="w-full max-w-[840px] pt-[28px]">{children}</div>
  </div>
);

export default Container;
