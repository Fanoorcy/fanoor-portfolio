import Copyright from "@/components/footers/Copyright";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Blogs from "@/components/common/Blogs";
import Brands from "@/components/common/Brands";
import Contact from "@/components/common/Contact2";
import Education from "@/components/common/Education2";
import Facts from "@/components/common/Facts";
import Hero from "@/components/homes/home-1/Hero";
import Portfolio from "@/components/common/Portfolio2";
import Services from "@/components/common/Services";
import Services2 from "@/components/common/Services3";
import Skills from "@/components/common/Skills";
import Skills2 from "@/components/common/Skills2";
import Testimonials from "@/components/homes/home-1/Testimonials";
import CommonComponents from "@/components/common/CommonComponents";

export const metadata = {
  title:
    "Home | Fanoor - IT & Cybersecurity Enthusiast",
  description:
    "IT graduate focused on cybersecurity and ethical hacking, building practical experience in networking, system security, and real-world IT projects through continuous learning.",
};

/*
export default function Home() {
  return (
    <>
      <Header1 />
      <Hero />
      <Services />
      <Facts />
      <Skills />
      <Services2 />
      <Education />
      <Brands />
      //<Portfolio />
      <Skills2 />
      <Testimonials />
      <Contact />
      <Blogs />
      <Footer1 />
      <Copyright />
      <CommonComponents />
    </>
  );
} 

*/

export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#0d1117",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
        Fanoor.dev
      </h1>

      <p style={{ fontSize: "1.2rem", maxWidth: "600px" }}>
        My portfolio is currently under development.
        <br />
        I’m working on creating a professional space to showcase my IT and cybersecurity journey.
      </p>

      <p style={{ marginTop: "30px", opacity: 0.7 }}>
        Coming soon.
      </p>
    </main>
  );
}