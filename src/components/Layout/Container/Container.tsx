import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => (
  <div className="from-background-primary min-h-[calc(100vh-128px)] bg-white bg-gradient-to-b to-white to-50% pt-[62px]">
    {children}
  </div>
);

export default Container;
