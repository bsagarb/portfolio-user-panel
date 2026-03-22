import React, { useState, useContext } from "react";
import { IoClose } from "react-icons/io5";
import { PortfolioContext } from "../context/PortfolioContext";

export default function Projects({ projects = [] }) {
  const { portfolio, loading } = useContext(PortfolioContext);
  const [activeTab, setActiveTab] = useState("graphic");
  const [showAll, setShowAll] = useState(false);
  const [popupImage, setPopupImage] = useState(null);

  // Filter projects based on tab
  const filteredProjects = portfolio.projects.filter(
    (project) => project.type === activeTab,
  );

  // Show first 4 unless "View More"
  const imagesToShow = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 4);

  return (
    <section id="work" className="px-8 py-20">
      <h2 className="text-4xl font-bold text-center mb-10">
        My <span className="text-blue-300">Projects</span>
      </h2>

      {/* TABS */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => {
            setActiveTab("graphic");
            setShowAll(false);
          }}
          className={`px-6 py-2 rounded-full transition-all duration-300 ${
            activeTab === "graphic"
              ? "bg-purple-600 shadow-[0_0_15px_rgba(150,50,255,0.6)]"
              : "border border-gray-600 text-gray-300"
          }`}
        >
          Graphic Design
        </button>

        <button
          onClick={() => {
            setActiveTab("uiux");
            setShowAll(false);
          }}
          className={`px-6 py-2 rounded-full transition-all duration-300 ${
            activeTab === "uiux"
              ? "bg-purple-600 shadow-[0_0_15px_rgba(150,50,255,0.6)]"
              : "border border-gray-600 text-gray-300"
          }`}
        >
          UI/UX Projects
        </button>
      </div>

      {/* IMAGE GRID */}
      <div
        className="
        grid 
        grid-cols-2 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-6
      "
      >
        {imagesToShow.length === 0 ? (
          <p className="text-gray-500 text-center col-span-full">No Projects</p>
        ) : (
          imagesToShow.map((project) => (
            <div key={project._id} className="flex flex-col items-center">
              <img
                src={project.imageUrl}
                onClick={() => setPopupImage(project.imageUrl)}
                alt={project.name}
                className="
        // rounded-xl cursor-pointer
        // shadow-[0_0_15px_rgba(255,255,255,0.1)]
        // hover:scale-[1.04]
        // hover:shadow-[0_0_25px_rgba(147,96,255,0.4)]
        // transition-all duration-300
         w-full h-full object-cover cursor-pointer
        hover:scale-110 transition-all duration-300
      "
              />

              {project.projectLink && (
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded">
                    View Project
                  </button>
                </a>
              )}
            </div>
          ))
        )}
      </div>

      {/* VIEW MORE / VIEW LESS */}
      {filteredProjects.length > 4 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="
              px-6 py-2 
              border border-blue-400 
              text-blue-300 
              rounded-full 
              hover:bg-blue-500 
              hover:text-white 
              transition-all
            "
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}

      {/* POPUP LIGHTBOX */}
      {popupImage && (
        <div
          className="
          fixed inset-0 
          bg-black/80 
          backdrop-blur-sm 
          flex items-center justify-center 
          z-50
        "
        >
          <button
            onClick={() => setPopupImage(null)}
            className="
              absolute top-6 right-6 
              text-white text-4xl 
              hover:text-red-400 
              transition
            "
          >
            <IoClose />
          </button>

          <img
            src={popupImage}
            alt="Preview"
            className="
              max-w-[90%] 
              max-h-[85vh] 
              object-contain 
              rounded-xl 
              shadow-xl
            "
          />
        </div>
      )}
    </section>
  );
}
