/* eslint-disable react/prop-types */
import { useState } from "react";
import { BarChartComponent, AreaChartComponent } from "../components";

const ChartsContainer = ({ data }) => {
  const [barChart, setBarChart] = useState(true);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <h3 className="text-lg font-semibold">Monthly Applications</h3>
        <button
          type="button"
          onClick={() => setBarChart(!barChart)}
          className="btn-primary"
        >
          {barChart ? "Area Chart" : "Bar Chart"}
        </button>
      </div>
      <div className="mt-12">
        {barChart ? (
          <BarChartComponent data={data} />
        ) : (
          <AreaChartComponent data={data} />
        )}
      </div>
    </>
  );
};

export default ChartsContainer;
