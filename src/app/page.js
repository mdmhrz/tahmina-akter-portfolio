import Hero from "@/components/Hero/Hero";
import Header from "@/components/ui/Header/Header";


export default function Home() {
  return (
    <div>
      <div className="bg-primary/10 xl:pt-10">
        <Header></Header>

        <Hero></Hero>
      </div>
    </div>
  );
}
