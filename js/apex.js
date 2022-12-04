var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    // labels: ["yellow", "Blue", "Black"],
    datasets: [{
      backgroundColor: [
        "#98D89E",
        "#F6DC7D",
        "#EE8484"
      ],
      data: [55, 31,  14]
    }]
  }
});