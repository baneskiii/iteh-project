import "./Plot.css";
import {
  XYPlot,
  LineSeries,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
} from "react-vis";

function Plot({ oprema }) {
  const data = [];
  for (var i = 0; i < oprema.length; i++) {
    data.push({ x: oprema[i].id, y: oprema[i].cena });
    console.log(data);
  }
  return (
    <div>
      <h3>Ukupan broj proizvoda u ponudi: {oprema.length}</h3>

      <div style={{ margin: "15px" }}>
        <br />
        <br />
        <h2>Najprodavanija oprema</h2>
        <XYPlot height={300} width={600}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries data={data} color="red" />
        </XYPlot>
      </div>
    </div>
  );
}

export default Plot;
