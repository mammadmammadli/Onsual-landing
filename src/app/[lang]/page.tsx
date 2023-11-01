import HomePage from "@/app/[lang]/home";

type HomeProps = {
  params: { lang: string };
};

export default function Home(props: HomeProps) {
  return <HomePage />;
}
