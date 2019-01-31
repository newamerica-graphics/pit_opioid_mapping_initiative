import { Bar } from "@newamerica/charts";
import { Title, Description, ChartContainer } from "@newamerica/meta";
import { DataTable } from "@newamerica/data-table";
import { columns } from "./columns";
import "./index.scss";
import "@newamerica/charts/dist/styles.css";
import "@newamerica/meta/dist/styles.css";
import "@newamerica/data-table/dist/styles.css";

let queue = [];
let data = null;

const settings = {
  bar_chart: el => {
    ReactDOM.render(
      <ChartContainer style={{ maxWidth: 650, margin: "auto" }}>
        <Title>{data.meta[0].title}</Title>
        <Description>{data.meta[0].description}</Description>
        <Bar
          data={data.bar_chart}
          height={400}
          x={d => d["abb"]}
          y={d => +d["contributions"]}
          margin={{ left: 25, top: 10, right: 10, bottom: 35 }}
          renderTooltip={({ datum }) => (
            <div style={{ padding: "0.25rem 0" }}>
              <div style={{ paddingBottom: "0.5rem" }}>
                State: <b>{datum.state}</b>
              </div>
              <div>
                Contributions: <b>{datum.contributions}</b>
              </div>
            </div>
          )}
        />
      </ChartContainer>,
      el
    );
  },
  data_table: el => {
    ReactDOM.render(
      <ChartContainer full>
        <Title style={{ paddingBottom: "2rem" }}>{data.meta[1].title}</Title>
        <DataTable
          data={data.data_table}
          columns={columns}
          showPagination={false}
          minRows={0}
        />
      </ChartContainer>,
      el
    );
  }
};

fetch(
  "https://na-data-projects.s3.amazonaws.com/data/pit/omi_final_report.json"
)
  .then(response => response.json())
  .then(_data => {
    data = _data;
    for (let i = 0; i < queue.length; i++) queue[i]();
  });

window.renderDataViz = function(el) {
  let id = el.getAttribute("id");
  let chart = settings[id];
  if (!chart) return;

  if (data) {
    chart(el);
  } else {
    queue.push(() => chart(el));
  }
};
