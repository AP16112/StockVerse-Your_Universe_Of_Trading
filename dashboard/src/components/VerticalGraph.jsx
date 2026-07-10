// Here we are creating this 'VerticalGraph' component to be used in the dashboard of our application.


// Import the core Chart.js object. 
// We rename it as ChartJS to avoid confusion with the React component <Chart /> from react-chartjs-2.
// ChartJS is the base library that powers all chart rendering.
import { Chart as ChartJS } from "chart.js";

// Import specific building blocks (called "chart components") from Chart.js.
// These are required to register chart types and features before using them in React.
// - CategoryScale: handles categorical x-axis (like months, product names).
// - LinearScale: handles numeric y-axis (like values, counts).
// - BarElement: defines how bars are drawn in a bar chart.
// - Title: plugin for chart titles.
// - Tooltip: plugin for hover tooltips.
// - Legend: plugin for chart legends (labels for datasets).
import { CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Import the Bar chart component from react-chartjs-2.
// This is a React wrapper around Chart.js that lets you use charts as React components.
// Example: <Bar data={...} options={...} />
import { Bar } from "react-chartjs-2";


// In Chart.js version 3 and above, you must explicitly register the chart components (scales, elements, plugins) you want to use.
// Without registration, Chart.js won't know how to render your chart.

// Here we are registering the following components with Chart.js:
// - CategoryScale: handles categorical x-axis values (e.g., months, product names).
// - LinearScale: handles numeric y-axis values (e.g., counts, prices).
// - BarElement: defines how bars are drawn in a bar chart.
// - Title: plugin that adds a chart title.
// - Tooltip: plugin that shows data details when hovering over chart elements.
// - Legend: plugin that displays dataset labels in a legend box.
// Once registered, these components become available globally and can be used by any chart type you render (like <Bar /> from react-chartjs-2).
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


// Define chart options that control how the chart looks and behaves.
// These options are passed into the <Bar /> component from react-chartjs-2.
export const options = {
    // Makes the chart responsive (it resizes automatically with the container).
    responsive: true,

    // Configure built-in Chart.js plugins.
    plugins: {
        // Legend plugin: controls how dataset labels are displayed.
        legend: {
            position: "top", // Places the legend at the top of the chart.
        },

        // Title plugin: adds a title to the chart.
        title: {
            display: true,        // Enables the title.
            text: "Holdings",     // Text displayed as the chart title.
        },
    },
};


// Define a React component that renders a vertical bar chart.
// It receives `data` as a prop, which contains labels and datasets.
export function VerticalGraph({ data }) {
    // The <Bar /> component comes from react-chartjs-2.
    // It uses Chart.js internally but is wrapped as a React component.
    // We pass in the `options` (chart configuration) and `data` (chart values).
    return <Bar options={options} data={data} />;
}
