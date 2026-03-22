import {React,useContext} from 'react'
import { PortfolioContext } from "../context/PortfolioContext";


const InfoCard = ({ title, subtitle, borderClass }) => {
  return (
    <div className={`about-card border ${borderClass}`}>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400">{subtitle}</p>
    </div>
  )
}

export default function About() {
      const { portfolio, loading } = useContext(PortfolioContext);
      const about=portfolio.about;
  
  return (
    <section id="about" className="text-center px-10 py-20">
      <h2 className="text-purple-400 text-4xl font-bold">
        About Me
      </h2>
      <p className="max-w-2xl mx-auto text-gray-400 mt-4">
       {about.desc}
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <InfoCard title={about.class} subtitle={about.university} borderClass="border-cyan-400" />
        <InfoCard title={about.designation} subtitle={about.company} borderClass="border-purple-500" />
        <InfoCard title={about.address} subtitle={about.workmodel} borderClass="border-blue-500" />
      </div>
    </section>
  )
}
