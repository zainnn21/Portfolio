interface EducationProps {
  title: string;
  subtitle: string;
  line1: string;
  line2: string;
  line3: string;
}

const Education = ({
  title,
  subtitle,
  line1,
  line2,
  line3,
}: EducationProps) => {
  return (
    <div className="cursor-pointer rounded-xl border-4 bg-background/80 p-6 shadow-2xl backdrop-blur-sm transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:border-green-400/30 hover:shadow-green-400/10 md:p-8">
      <h2 className="mb-2 text-2xl font-bold text-[#0CB36B] md:text-3xl">
        {title}
      </h2>
      <h3 className="mb-4 text-xl font-bold md:text-2xl">{subtitle}</h3>
      <p className="font-semibold">{line1}</p>
      <div className="mt-2 flex flex-col items-start text-sm text-foreground/80 sm:flex-row sm:items-center sm:justify-between">
        <span>{line2}</span>
        {line3 && <span>{line3}</span>}
      </div>
    </div>
  );
};

export default Education;
