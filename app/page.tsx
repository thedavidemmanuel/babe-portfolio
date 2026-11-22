import { a11y } from "@/content/site";
import { MotionRoot } from "@/components/MotionRoot";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Profile } from "@/components/Profile";
import { Experience } from "@/components/Experience";
import { Practice } from "@/components/Practice";
import { Research } from "@/components/Research";
import { Training } from "@/components/Training";
import { Contact } from "@/components/Contact";
import { SiteFooter } from "@/components/SiteFooter";
import styles from "./page.module.css";

export default function Home() {
  return (
    <MotionRoot>
      <a href="#main" className={styles.skip}>
        {a11y.skipLink}
      </a>
      <SiteHeader />
      <Hero />
      <main id="main" tabIndex={-1} className={styles.main}>
        <Profile />
        <Experience />
        <Practice />
        <Research />
        <Training />
        <Contact />
      </main>
      <SiteFooter />
    </MotionRoot>
  );
}
