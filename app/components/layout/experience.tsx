import ExperienceCards from "../elements/ExperienceCards";
import { experienceData } from "../../data/experienceData";

const Experience = () => {
  return (
    <div className="w-full flex items-center justify-center bg-[#e4e6eb]">
      <div className="md:mx-60 bg-white p-10 rounded-lg shadow-lg w- border-4 border-[#0d3b24] ">
        <h1 className="text-3xl font-bold text-center">Experience</h1>
        {experienceData.map((exp) => (
          <ExperienceCards
            key={exp.id}
            TitleCard={exp.title}
            Location={exp.location}
            Date={exp.date}
            Position={exp.position}
            Responsibilities={exp.responsibilities}
            cardVariant={exp.varianCard}
          />
        ))}
      </div>
    </div>
  );
};
export default Experience;
