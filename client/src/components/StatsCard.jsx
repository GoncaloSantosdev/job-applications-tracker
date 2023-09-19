/* eslint-disable react/prop-types */
const StatsCard = ({ icon, number, title }) => {
  return (
    <div className="bg-white text-black hover:bg-blue-700 hover:text-white transition-all shadow rounded px-6 py-6 flex items-center justify-between gap-24">
      <div>
        <p className="text-xl font-semibold">{number}</p>
        <p className="text-lg">{title}</p>
      </div>
      {icon}
    </div>
  );
};

export default StatsCard;
