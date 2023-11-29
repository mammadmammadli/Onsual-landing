const FooterSocials = () => {
  return (
    <div>
      <ul className="flex flex-col items-end gap-4">
        <li>
          <a
            href="#"
            className="text-xl text-light-utility-high dark:text-dark-utility-high transition-all font-medium hover:text-light-brand-primary dark:hover:text-dark-brand-primary"
          >
            Twitter / X
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-xl text-light-utility-high dark:text-dark-utility-high transition-all font-medium hover:text-light-brand-primary dark:hover:text-dark-brand-primary"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-xl text-light-utility-high dark:text-dark-utility-high transition-all font-medium hover:text-light-brand-primary dark:hover:text-dark-brand-primary"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterSocials;
