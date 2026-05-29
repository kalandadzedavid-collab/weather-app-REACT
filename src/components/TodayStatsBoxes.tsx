const TodayStatsBoxes = ({ description, data }) => {
  return (
    <div className="h-30 rounded-2xl px-2 w-40 py-5 bg-[#22273e]">
      <p className="mb-5 text-sm">{description}</p>
      <h5 className="font-bold text-2xl">{data}</h5>
    </div>
  );
};

export default TodayStatsBoxes;
