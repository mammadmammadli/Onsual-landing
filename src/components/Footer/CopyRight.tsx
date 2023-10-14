const FooterCopyRight = () => {
  const year = new Date().getFullYear();

  return (
    <div className="flex justify-between flex-col md:flex-row gap-4">
      <span className="text-xl font-medium text-light-utility-high dark:text-dark-utility-high transition-all">
        &copy; {year} Onsual, bütün hüquqlar qorunur
      </span>
      <span className="text-xl font-medium text-light-utility-high dark:text-dark-utility-high">
        Azərbaycandan sevgilərlə ❤️
      </span>
    </div>
  );
};

export default FooterCopyRight;
