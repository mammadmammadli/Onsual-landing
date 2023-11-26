import Button from "@/components/Button/index";

type CTAButtonProps = {
  href: string;
};

const CTAButton = ({ ...props }: CTAButtonProps) => {
  return (
    <Button className="bg-black px-5" {...props}>
      indi yukle
    </Button>
  );
};

export default CTAButton;
