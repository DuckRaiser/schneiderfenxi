document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('europeChart').getContext('2d');
  
  // Data for the chart
  const data = {
    labels: ['France', 'Germany', 'UK', 'Spain', 'Hungary', 'Poland', 'Italy', 'Others'],
    datasets: [
      {
        label: 'Number of Facilities',
        data: [12, 8, 7, 5, 3, 4, 3, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)',
          'rgba(199, 199, 199, 0.7)',
          'rgba(83, 102, 255, 0.7)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(199, 199, 199, 1)',
          'rgba(83, 102, 255, 1)',
        ],
        borderWidth: 1
      }
    ]
  };
  
  // Business area data
  const businessAreas = {
    'France': ['Power Distribution', 'Automation', 'R&D', 'HQ'],
    'Germany': ['Industrial Automation', 'Energy Management', 'Digital Solutions'],
    'UK': ['Software Development', 'AVEVA Solutions', 'Power Systems'],
    'Spain': ['Smart Grid Solutions', 'Renewable Integration', 'Medium Voltage'],
    'Hungary': ['Electronic Components', 'Control Systems', 'Low Voltage'],
    'Poland': ['Manufacturing', 'Electronic Components', 'Copper Products'],
    'Italy': ['Manufacturing', 'Energy Management', 'Sustainability'],
    'Others': ['Various Business Areas']
  };

  // Chart configuration
  const config = {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            boxWidth: 15,
            padding: 15
          }
        },
        tooltip: {
          callbacks: {
            afterLabel: function(context) {
              const label = context.label;
              return 'Business Areas: ' + businessAreas[label].join(', ');
            }
          }
        }
      },
      layout: {
        padding: 20
      },
      cutout: '40%'
    }
  };

  // Create the chart
  new Chart(ctx, config);
});
