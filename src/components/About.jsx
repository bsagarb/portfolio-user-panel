import React from 'react'

const InfoCard = ({ title, subtitle, borderClass }) => {
  return (
    <div className={`about-card border ${borderClass}`}>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400">{subtitle}</p>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="text-center px-10 py-20">
      <h2 className="text-purple-400 text-4xl font-bold">
        About Me
        {/* <span className="text-blue-300">Empathy</span> &{' '} */}
        {/* <span className="text-purple-400">Precision</span> */}
      </h2>
      <p className="max-w-2xl mx-auto text-gray-400 mt-4">
        I'm a UI/UX & Graphic Designer passionate about crafting user-first
        digital experiences and visually striking brand identities.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <InfoCard title="B.Sc Computer Science" subtitle="Andhra University" borderClass="border-cyan-400" />
        <InfoCard title="Designer & Mentor" subtitle="Purplelane Institute" borderClass="border-purple-500" />
        <InfoCard title="Based in India" subtitle="Available Remotely" borderClass="border-blue-500" />
      </div>
    </section>
  )
}
