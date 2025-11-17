import React from 'react'

export default function Experience(){
  return (
    <section className="px-10 py-20">
      <h2 className="text-4xl font-bold text-center mb-10">Professional <span className="text-purple-400">Journey</span></h2>
      <div className="max-w-3xl mx-auto p-10 border border-purple-400 rounded-2xl bg-[#111520] hover:shadow-[0_0_50px_rgba(150,0,255,0.6)]">
        <h3 className="text-2xl font-semibold mb-2">UI/UX & Graphic Designer + Mentor</h3>
        <p className="text-purple-400 mb-4">Purplelane Institute · Jan 2025 – Present</p>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Designed mobile/web interfaces, branding, and design systems</li>
          <li>Conducted UX research, built prototypes, and created design libraries</li>
          <li>Mentored 100+ students in Figma, Photoshop, Illustrator</li>
          <li>Led workshops and contributed to UI/UX content</li>
        </ul>
      </div>
    </section>
  )
}
