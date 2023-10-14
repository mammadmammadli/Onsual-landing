import Container from "@/components/Container";
import Logo from "@/components/Logo";
import Link from "next/link";
import AppleStore from "@/components/Button/AppleStore";
import GooglePlay from "@/components/Button/GooglePlay";
import Address from "@/components/Footer/Address";
import Navigations from "@/components/Footer/Navigations";
import FooterCopyRight from "@/components/Footer/CopyRight";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="flex flex-col gap-[120px]">
          <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-0">
            <Link href="/">
              <Logo containerClassName="h-8 w-[134px]" />
            </Link>

            <div className="flex gap-3">
              <AppleStore />
              <GooglePlay />
            </div>
          </div>

          <div className="flex justify-between flex-col lg:flex-row gap-[64px] lg:gap-0">
            <Address />
            <Navigations />
          </div>

          <FooterCopyRight />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
