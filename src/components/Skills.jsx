import React from 'react'

export default function Skills(){
  const skills = ["UI Design","UX Research","Wireframing","Product Design","Design Thinking","Logo Design","Photo Manipulation","Motion Graphics","Video Editing","Branding","Design Systems","Material Design","Apple HIG"]
  return (
    <section id="skills" className="px-10 py-20 text-center">
      <h2 className="text-6xl font-bold">Skills & <span className="text-blue-300">Expertise</span></h2>
      <div className=" flex flex-wrap gap-4 justify-center mt-10">
        {skills.map(s => (
          <span key={s} className=" px-6 py-2 border border-gray-600 rounded-full text-gray-300 font-bold 
          hover:shadow-[0 12px 40px rgba(147, 96, 255, 0.14), 0 6px 30px rgba(0, 200, 255, 0.08)]
          ">{s}</span>
        ))}
      </div>
    </section>
  )
}
