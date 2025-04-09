document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('supplyChainChart').getContext('2d');
  
  // Data for the chart
  const data = {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024', '2025 (Projected)'],
    datasets: [
      {
        label: 'China Production %',
        data: [65, 60, 54, 48, 42, 35, 30],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: 'Vietnam Production %',
        data: [5, 8, 12, 15, 18, 22, 25],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        label: 'Europe Production %',
        data: [20, 22, 23, 25, 27, 30, 32],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      },
      {
        label: 'US Production %',
        data: [10, 10, 11, 12, 13, 13, 13],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      }
    ]
  };

  // Chart configuration
  const config = {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false
          }
        },
        y: {
          stacked: true,
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: 'Percentage of Global Production'
          }
        }
      },
      plugins: {
        legend: {
          position: 'bottom'
        },
        tooltip: {
          mode: 'index',
          intersect: false
        }
      }
    }
  };

  // Create the chart
  new Chart(ctx, config);
});
