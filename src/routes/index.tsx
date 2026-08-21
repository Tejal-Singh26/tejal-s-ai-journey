import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Learning } from "@/components/portfolio/Learning";
import { Interests } from "@/components/portfolio/Interests";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const title = "Tejal Singh — Aspiring AI/ML Engineer & Robotics Enthusiast";
const description =
  "Portfolio of Tejal Singh, first-year BTech CSE (AI & ML) student at S-VYASA University exploring artificial intelligence, machine learning and robotics.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Learning />
        <Interests />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
