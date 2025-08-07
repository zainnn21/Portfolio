import ExperienceCards from "../elements/ExperienceCards";
import { experienceData } from "../../data/experienceData";

const Experience = () => {
  return (
    <div className=" md:ml-10 bg-white p-10 rounded-lg shadow-lg w- border-4 border-[#0d3b24] w-1/2 ">
      <h1 className="text-3xl font-bold text-center ">Experience</h1>
      <div className="flex flex-col gap-8 mt-5">
        {experienceData.map((exp) => (
          <ExperienceCards
            key={exp.id}
            TitleCard={exp.title}
            Location={exp.location}
            DateJob={exp.date}
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
