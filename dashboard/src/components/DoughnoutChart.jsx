// Here we are creating this 'DoughnoutChart' component to be used in the dashboard of our application.


// Import the core Chart.js object. 
// We rename it as ChartJS to avoid confusion with the React component <Chart /> from react-chartjs-2.
// ChartJS is the base library that powers all chart rendering.
import { Chart as ChartJS } from "chart.js";

// Import specific chart components from Chart.js.
// - ArcElement: defines how arcs (slices) are drawn in pie/doughnut charts.
// - Tooltip: plugin that shows information when hovering over chart segments.
// - Legend: plugin that displays labels for each dataset in a legend box.
import { ArcElement, Tooltip, Legend } from "chart.js";

// Import the Doughnut chart component from react-chartjs-2.
// This is a React wrapper around Chart.js that lets you use <Doughnut /> as a React component.
import { Doughnut } from "react-chartjs-2";

// Register the required Chart.js components.
// Chart.js v3+ requires explicit registration of elements and plugins you want to use.
// Without this, the Doughnut chart won't know how to render arcs or show tooltips/legends.
ChartJS.register(ArcElement, Tooltip, Legend);



// Define a React component called DoughnutChart.
// It accepts a prop named `data`, which contains the chart labels and datasets.
export function DoughnutChart({ data }) {
    // Render a Doughnut chart using the <Doughnut /> component from react-chartjs-2.
    // - `data` is passed in as a prop, so this component is reusable with different datasets.
    // - The <Doughnut /> component internally uses Chart.js to draw the chart.
    // - Any options (like title, legend position, tooltips) can also be passed in if needed.
    return <Doughnut data={data} />;
}


