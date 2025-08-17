import ProfileName from "../elements/ProfileName/profilename";
import SplitText from "../elements/SplitText/SplitText";
import Socmed from "../elements/Sosmed/sosmed";
import { socmedData } from "../../data/socmedData";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="flex justify-between items-center h-screen w-full">
      <div className="flex flex-col gap-8 justify-center ">
        <SplitText
          text="Hello 👋"
          className="text-7xl font-semibold"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
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
      <div className="w-1/2 items-center justify-center flex ">
        <Image
          src="/assets/pphome.png"
          alt="Profile Picture"
          width={550}
          height={550}
          className="hover:rounded-3xl hover:shadow-2xl hover:scale-105 ease-in-out duration-500 hover:border-4  hover:drop-shadow-2xl"
        ></Image>
      </div>
    </div>
  );
};

export default Profile;
