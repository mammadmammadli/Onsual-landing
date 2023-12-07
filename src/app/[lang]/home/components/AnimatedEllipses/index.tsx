const AnimatedEllipses = () => {
  return (
    <div className="absolute h-screen top-0 left-0 w-screen z-[-1] hidden lg:block">
      <div
        className="top-[30%] left-[20%] h-[224px] w-[224px] bg-light-brand-primary dark:bg-dark-brand-primary absolute z-0 rounded-full"
        style={{
          filter: "blur(240px)",
          backdropFilter: "blur(240px)",
          WebkitBackdropFilter: "blur(240px)",
        }}
      />
      <div
        className="top-1/2 right-1/4 h-[224px] w-[224px] bg-light-brand-primary dark:bg-dark-brand-primary absolute z-[0] rounded-full"
        style={{
          filter: "blur(240px)",
          backdropFilter: "blur(240px)",
          WebkitBackdropFilter: "blur(240px)",
        }}
      />
    </div>
  );
};

export default AnimatedEllipses;
