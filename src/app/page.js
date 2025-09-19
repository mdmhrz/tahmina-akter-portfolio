import AboutMe from "@/components/AboutMe/AboutMe";
import Contact from "@/components/Contact/Contact";
import EducationCourses from "@/components/EducationCourses/EducationCourses";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";
import Header from "@/components/ui/Header/Header";
import WorkingProcess from "@/components/WorkingProcess/WorkingProcess";


export default function Home() {
  return (
    <div>
      <div className="bg-primary/10 pt-5 xl:pt-10">
        <Header></Header>
        <Hero></Hero>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <EducationCourses></EducationCourses>
        <WorkingProcess></WorkingProcess>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
}
