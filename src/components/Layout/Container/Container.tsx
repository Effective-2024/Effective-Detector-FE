import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => (
  <div className="bg-background flex min-h-[calc(100vh-128px)] w-full justify-center pt-[62px]">
    <div className="w-full max-w-[1000px] py-12">{children}</div>
  </div>
);

export default Container;
