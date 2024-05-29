import { motion } from "framer-motion";
import { variables } from "../../constants/";
import Hero from "./hero";
import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";

export default function Home() {
  return (
    <motion.main className={`container-xl w-100 d-flex flex-column`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <p>{variables.MAIL_API_KEY}</p>
      <Projects />
      <Resume />
      <Contact />
    </motion.main>
  );
}
