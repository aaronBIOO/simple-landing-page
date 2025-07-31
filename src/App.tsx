import Layout from "@/components/Layout";
import { Hero } from "@/components/sections/Hero";
import { Brands } from "@/components/sections/Brands";
import { Services } from "@/components/sections/Services";
import { AboutUs } from "./components/sections/AboutUs";

function App() {

  return (
    <Layout title="theFuture">
      <Hero />
      <Brands />
      <Services />
      <AboutUs />
    </Layout>
  )
}

export default App;
