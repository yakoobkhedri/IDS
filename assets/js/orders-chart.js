const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['تکمیل شده','لغو', 'در حال پردازش'],
    datasets: [{
      data: [20, 3, 10]
    }]
  },
  options: {

    legend: {

      display: true,
      labels: {
        fontColor: '#FFFFFF'
      },
      position: 'bottom'
    },
    title: {
      display: true,
    }
  }

});
new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['1', '2', '3', '4', '5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
    datasets: [{
      fontColor: '#64CCC5',
      label: 'فروش این ماه',
      data: [200, 300, 100, 300, ,200,100, 300, 500, 400, ,200,100, 300, 500, 500, ,100,200, 400, 500, 500, ,200,200, 300, 500, 500, ,200,200, 300, 500, 500, ,200,400]
    }]
  },
  options: {
   
  },
  
});