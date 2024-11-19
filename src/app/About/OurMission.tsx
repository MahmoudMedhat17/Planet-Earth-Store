const OurMission = () => {
  return (
    <section className="mt-12 px-6">
      <div className="flex flex-col md:flex-row gap-8 lg:items-center">
        <img src="ourMissionPic.jpg" alt="OurMissionPic" className="md:w-1/2" />
        <div className="pt-10 space-y-8 md:flex-1">
          <h2 className="font-semibold text-3xl">OUR MISSION</h2>
          <p className="opacity-60">
            Hello, my name is Tyler Moore and with the help of many people I
            made this template. I made it so it is super easy to update and so
            that it flows perfectly with my tutorials. Lots of love and hundreds
            of hours went into making it. I hope you love it as much as I do.{" "}
            <br /> I wish you the best of luck with your business, enjoy the
            adventure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
