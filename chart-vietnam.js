document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('vietnamChart').getContext('2d');
  
  // Data for the chart
  const data = {
    labels: [
      'Electrical Equipment', 
      'Building Automation', 
      'Control Systems', 
      'Energy Management', 
      'IoT Solutions'
    ],
    datasets: [{
      label: 'Business Focus in Vietnam',
      data: [35, 25, 20, 15, 5],
      backgroundColor: [
        'rgba(75, 192, 192, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 159, 64, 0.7)'
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      hoverOffset: 20
    }]
  };
  
  // Supply chain needs data
  const supplyChainNeeds = {
    'Electrical Equipment': ['Copper Busbars', 'Metal Contacts', 'Insulators', 'Circuit Breaker Components'],
    'Building Automation': ['Sensors', 'Cables', 'Control Panels', 'Communication Devices'],
    'Control Systems': ['PCBs', 'Electronic Components', 'Enclosures', 'Copper Connectors'],
    'Energy Management': ['Monitoring Devices', 'Power Electronics', 'Metering Components'],
    'IoT Solutions': ['Wireless Modules', 'Smart Sensors', 'Communication Hardware']
  };

  // Chart configuration
  const config = {
    type: 'pie',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 15
          }
        },
        tooltip: {
          callbacks: {
            afterLabel: function(context) {
              const label = context.label;
              return 'Key Components: ' + supplyChainNeeds[label].join(', ');
            }
          }
        }
      },
      layout: {
        padding: 10
      }
    }
  };

  // Create the chart
  new Chart(ctx, config);
});
