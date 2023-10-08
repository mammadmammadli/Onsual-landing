type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Container({ className, children }: ContainerProps) {
  return (
    <div
      className={`w-full max-w-full lg:w-[944px] lg:max-w-[944px] lg:mx-auto ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
}
