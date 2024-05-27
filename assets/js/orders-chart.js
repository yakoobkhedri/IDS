const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');

new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [{
      label: '# of Votes',
      data: [20, 10, 3]
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
    labels: ['جمع کل', 'تکمیل شده', 'در حال انتظار', 'باز پرداخت شده', 'لغو شده'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2]
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