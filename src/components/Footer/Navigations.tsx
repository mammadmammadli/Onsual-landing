import FooterSocials from "@/components/Footer/Socials";

const FooterNavigations = () => {
  return (
    <div className="flex gap-4">
      <div className="lg:min-w-[224px]">
        <ul className="flex flex-col gap-4">
          <li>
            <a
              href="#"
              className="text-xl text-light-utility-high dark:text-dark-utility-high transition-all font-medium hover:text-light-brand-primary dark:hover:text-dark-brand-primary"
            >
              İstifadəçi razılığı
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-xl text-light-utility-high dark:text-dark-utility-high transition-all font-medium hover:text-light-brand-primary dark:hover:text-dark-brand-primary"
            >
              Haqqımızda
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-xl text-light-utility-high dark:text-dark-utility-high transition-all font-medium hover:text-light-brand-primary dark:hover:text-dark-brand-primary"
            >
              Əlaqə
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-xl text-light-utility-high dark:text-dark-utility-high transition-all font-medium hover:text-light-brand-primary dark:hover:text-dark-brand-primary"
            >
              Tez-tez verilən suallar
            </a>
          </li>
        </ul>
      </div>
      <FooterSocials />
    </div>
  );
};

export default FooterNavigations;
