import React from "react";

interface ExperienceCardsProps {
  cardVariant: string;
  TitleCard: string;
  Location: string;
  Date: string;
  Position: string;
  Responsibilities: string[];
}

const ExperienceCards: React.FC<ExperienceCardsProps> = (props) => {
  const { cardVariant, TitleCard, Location, Date, Position, Responsibilities } = props;
  return (
    <div className={`mt-8 flex flex-col gap-6 w-1/2 border-4 border-[#0d3b24] rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-2xl ease-in-out duration-500  ${cardVariant}">`}>
        <div className="flex flex-col gap-2 m-4 text-justify">
          <h2 className="text-2xl font-semibold">{TitleCard}</h2>
          <p>
            {Location} <span>|</span>{" "}
            <span className="text-gray-600">{Date}</span>
          </p>
          <p>
            <span className="font-bold">Position:</span> {Position}
          </p>
          <ul>
            {Responsibilities.map((responsibility) => (
              <li key={responsibility} className="list-disc ml-5">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </div>
    
  );
};
export default ExperienceCards;
