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
      <Container className="lg:px-[64px]">
        <div className="flex flex-col gap-[64px] lg:gap-[120px] pb-8 lg:pb-[56px]">
          <div className="flex justify-between flex-col md:flex-row gap-[64px] md:gap-0">
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
