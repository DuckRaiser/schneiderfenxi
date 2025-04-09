document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('investmentChart').getContext('2d');
  
  // Data for the chart
  const data = {
    labels: [
      'Data Centers',
      'Energy Infrastructure',
      'Industrial Automation',
      'Smart Buildings',
      'Sustainable Solutions',
      'Manufacturing Capacity'
    ],
    datasets: [{
      label: 'Investment Allocation ($ millions)',
      data: [350, 280, 220, 170, 130, 250],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 159, 64, 0.7)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };
  
  // Key materials needed data
  const keyMaterials = {
    'Data Centers': ['Copper busbars', 'Power distribution components', 'Cooling solutions', 'UPS systems'],
    'Energy Infrastructure': ['Medium voltage equipment', 'Switchgear components', 'Control systems', 'Energy storage'],
    'Industrial Automation': ['Sensors', 'Control panels', 'Communication cables', 'Precision parts'],
    'Smart Buildings': ['Building management systems', 'Sensors', 'Interface components', 'Connectivity'],
    'Sustainable Solutions': ['Renewable energy interfaces', 'Energy efficient components', 'Smart meters'],
    'Manufacturing Capacity': ['Factory automation', 'Production equipment', 'Supply chain technology']
  };

  // Chart configuration
  const config = {
    type: 'bar',
    data: data,
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Investment Allocation ($ millions)'
          }
        },
        y: {
          grid: {
            display: false
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            afterLabel: function(context) {
              const label = context.label;
              return 'Key Materials: ' + keyMaterials[label].join(', ');
            }
          }
        }
      }
    }
  };

  // Create the chart
  new Chart(ctx, config);
});
