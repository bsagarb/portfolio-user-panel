import {React,useContext} from "react";
import { profileImage,myResume } from "../assets/images";
import { PortfolioContext } from "../context/PortfolioContext";



export default function Hero() {
    const { portfolio, loading } = useContext(PortfolioContext);

    const pdf=portfolio.pdf;
    const profile=portfolio.profile;
    console.log('profile',profile);
    
  
  return (
    <section id='hero' className="px-10 py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

        <div className="flex flex-col md:flex-row items-center gap-20 md:gap-60">

          <div className="max-w-xl space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Hi, I'm <br/>
              <span className="text-blue-400">{profile.firstname} </span>
              <span className="text-blue-200">{profile.lastname}</span>
            </h1>

            <p className="text-xl text-gray-300">
              <button className="
                bg-blue-500 p-2 py-3 rounded-xl text-white
              " >{profile.jobrole}</button> — 
              <span className="text-purple-400 "> {profile.roleDesc}</span>
            </p>

            {/* <p className="text-gray-400 text-lg">Desginer and Mentor at Purplelane Institute</p> */}
            <p className="text-gray-400 text-lg">
              {profile.mainDesc}
            </p>

            <div className="flex gap-4 pt-4">
              <a
              href="#work"
                className="
                  bg-purple-600 px-6 py-3 rounded-xl
                  shadow-[0_0_10px_rgba(150,50,255,0.4)]
                  transition-all duration-300
                  hover:shadow-[0_0_25px_rgba(150,50,255,0.9)]
                  hover:scale-105
                "
              >
                View My Work
              </a>

              <a
              href={pdf.fileUrl}
              download="sagar.pdf"
              target="_blank"
                className="
                  border border-cyan-400 px-6 py-3 rounded-xl
                  shadow-[0_0_10px_rgba(0,200,255,0.3)]
                  transition-all duration-300
                  hover:bg-blue-400
                  hover:border-cyan-300
                  hover:scale-105
                "
              >
                View Resume
              </a>
            </div>
          </div>

          <img
            src={profile.profilePic}
            alt="Profile"
            className="
              w-64 h-64 rounded-full
             shadow-[0_0_40px_rgba(0,150,255,0.2)]
              transition-all duration-300
            "
          />

        </div>
      </div>
    </section>
  );
}
