import ProfileName from "../elements/ProfileName/profilename";
import SplitText from "../elements/SplitText/SplitText";
import Socmed from "../elements/Sosmed/sosmed";
import { socmedData } from "../../data/socmedData";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full gap-12 md:gap-8">
      <div className="flex flex-col gap-8 justify-center items-center md:items-start text-center md:text-left order-2 md:order-1">
        <SplitText
          text="Hello 👋"
          className="text-5xl sm:text-6xl md:text-7xl font-semibold"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
        />
        <ProfileName />
        <div className="flex space-x-6">
          {socmedData.map((socmed) => (
            <Socmed
              key={socmed.id}
              Icon={socmed.Icon}
              sosmedName={socmed.name}
              sosmedUrl={socmed.link}
            />
          ))}
        </div>
      </div>
      <div className="w-3/4 sm:w-1/2 items-center justify-center flex order-1 md:order-2">
        <Image
          src="/assets/pphome.png"
          alt="Profile Picture"
          width={500}
          height={500}
          className="hover:rounded-3xl hover:shadow-2xl hover:scale-105 ease-in-out duration-500 hover:border-4  hover:drop-shadow-2xl"
        ></Image>
      </div>
    </div>
  );
};

export default Profile;
