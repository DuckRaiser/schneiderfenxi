document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('usChart').getContext('2d');
  
  // Data for the chart
  const data = {
    labels: [
      'Boston, MA (HQ)',
      'El Paso, TX',
      'Columbia, MO',
      'Lexington, KY',
      'Andover, MA',
      'Mt. Juliet, TN',
      'Others'
    ],
    datasets: [
      {
        label: 'Facility Size (sq ft thousands)',
        data: [220, 420, 350, 380, 180, 250, 600],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
        yAxisID: 'y'
      },
      {
        label: 'Investment ($ millions)',
        data: [120, 180, 150, 110, 80, 60, 0],
        type: 'line',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
        pointRadius: 5,
        pointHoverRadius: 7,
        fill: false,
        yAxisID: 'y1'
      }
    ]
  };

  // Business areas data
  const businessAreas = {
    'Boston, MA (HQ)': 'Corporate HQ, R&D',
    'El Paso, TX': 'Switchgear, Power Distribution',
    'Columbia, MO': 'Circuit Breakers',
    'Lexington, KY': 'Circuit Breakers, Electrical Products',
    'Andover, MA': 'Data Center, Microgrid Research',
    'Mt. Juliet, TN': 'Medium Voltage Market',
    'Others': 'Various Manufacturing, Distribution'
  };

  // Chart configuration
  const config = {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: 'Facility Size (sq ft thousands)'
          },
          grid: {
            borderDash: [2, 2]
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          title: {
            display: true,
            text: 'Investment ($ millions)'
          },
          grid: {
            drawOnChartArea: false
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      },
      plugins: {
        legend: {
          position: 'bottom'
        },
        tooltip: {
          callbacks: {
            afterLabel: function(context) {
              const label = context.label;
              return 'Business Area: ' + businessAreas[label];
            }
          }
        }
      }
    }
  };

  // Create the chart
  new Chart(ctx, config);
});
