import TextType from "../TextType/TextType";

const ProfileName = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <h1 className="text-8xl font-bold">I'm Zain</h1>
      </div>
      <div className="flex gap-2">
        <h2 className="text-3xl font-semibold ml-2"> A</h2>
        <TextType
          text={["{FullStack Developer}", "{Game Developer}"]}
          typingSpeed={150}
          pauseDuration={3500}
          showCursor={true}
          cursorCharacter="|"
          className="text-3xl font-semibold "
          textColors={["#0CB36B", "#0CB36B"]}
        />
        <h2 className="text-3xl font-semibold"> based in Jakarta</h2>
      </div>
    </>
  );
};

export default ProfileName;
