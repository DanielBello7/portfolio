import Logo from "@/components/logo";
import Socials from "./socials";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header className="container-xl w-100 d-flex flex-column flex-md-row flex-lg-row justify-content-between align-items-center pt-3 pb-3">
      <Logo />
      <Navigation />
      <Socials />
    </header>
  )
}

