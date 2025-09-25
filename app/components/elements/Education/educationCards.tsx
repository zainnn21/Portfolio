interface EducationProps {
  location: string;
  faculty: string;
  degree: string;
  duration: string;
  gpa: string;
}

const Education = ({
  location,
  faculty,
  degree,
  duration,
  gpa,
}: EducationProps) => {
  return (
    <div className="p-8 rounded-xl shadow-2xl border-4 cursor-pointer hover:-translate-y-2 transition-transform duration-300 ease-in-out bg-background/80 backdrop-blur-sm hover:border-green-400/30 hover:shadow-green-400/10">
      <h2 className="text-3xl font-bold text-[#0CB36B] mb-4">{location}</h2>
      <h3 className="text-2xl font-bold mb-2">{faculty}</h3>
      <p className="font-semibold ">{degree}</p>
      <p className="text-right">
        {duration} | <span>{gpa}</span>
      </p>
    </div>
  );
};

export default Education;
