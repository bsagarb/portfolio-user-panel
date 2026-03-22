import React,{useContext} from 'react'
import { PortfolioContext } from "../context/PortfolioContext";


export default function Experience(){
    const { portfolio, loading } = useContext(PortfolioContext);

    const experience = portfolio.experience[0];
  
  return (
    <section className="px-10 py-20">
      <h2 className="text-4xl font-bold text-center mb-10">Professional <span className="text-purple-400">Journey</span></h2>
      <div className="max-w-3xl mx-auto p-10 border border-purple-400 rounded-2xl bg-[#111520] hover:shadow-[0_0_50px_rgba(150,0,255,0.6)]">
        <h3 className="text-2xl font-semibold mb-2">{experience.title}</h3>
        <p className="text-purple-400 mb-4">{experience.company}· {experience.duration}</p>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
            {experience.description.map((item,index)=>(
             <li key={index}>{item}</li>
            ))}
        </ul>
      </div>
    </section>
  )
}
