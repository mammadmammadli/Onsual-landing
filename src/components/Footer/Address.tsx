const FooterAddress = () => {
  return (
    <ul className="flex flex-col gap-4">
      <li>
        <span className="text-xl text-light-utility-high dark:text-dark-utility-high transition-all font-medium">
          Nizami küçəsi 203B, Bakı, Azərbaycan
        </span>
      </li>
      <li>
        <a
          href="tel:+994 (55) 850 11 15"
          className="text-xl text-light-utility-high dark:text-dark-utility-high transition-all font-medium hover:text-light-brand-primary dark:hover:text-dark-brand-primary"
        >
          +994 (55) 850 11 15
        </a>
      </li>
      <li>
        <a
          href="mailto:info@onsual.com"
          className="text-xl text-light-utility-high dark:text-dark-utility-high transition-all font-medium hover:text-light-brand-primary dark:hover:text-dark-brand-primary"
        >
          info@onsual.com
        </a>
      </li>
    </ul>
  );
};

export default FooterAddress;
