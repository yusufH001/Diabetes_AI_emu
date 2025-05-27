let ctx = document.getElementById("glucoseChart").getContext("2d");

let labels = ["8AM", "10AM", "12PM", "2PM"];
let glucoseLevels = [180, 160, 140, 130];
let insulinDoses = [0.5, 0.10, 0.3, 0.5];

let myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Glucose Level",
        type: "line",
        data: glucoseLevels,
        borderColor: "blue",
        backgroundColor: "transparent",
        yAxisID: "y1"
      },
      {
        label: "Insulin Dose",
        type: "bar",
        data: insulinDoses,
        backgroundColor: "purple",
        yAxisID: "y2"
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      x: {
        offset: false
      },
      y1: {
        type: "linear",
        position: "left",
        min: 40,
        max: 300,
        title: {
          display: true,
          text: "Glucose (mg/dL)"
        }
      },
      y2: {
        type: "linear",
        position: "right",
        min: 0,
        max: 15,
        title: {
          display: true,
          text: "Insulin (units)"
        },
        grid: {
          drawOnChartArea: false
        }
      }
    }
  }
});


const fixingSugarLevels = ([glucoseLevels],[insulinDoses]) => {
        
}
