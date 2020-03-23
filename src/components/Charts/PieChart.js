import React from 'react'

import { Doughnut } from "react-chartjs-2";


export const PieChart = ({ text, amount, changeColor }) => {

  // let amount = transaction.map(amount => transaction.amount)
  // console.log(text, amount);

  const data = {
    labels: text,
    datasets: [
      {
        label: 'Transactions ',
        backgroundColor: changeColor,
        borderColor: 'rgba(191, 148, 86, .2)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(191, 148, 86, .4)',
        hoverBorderColor: 'rgba(191, 148, 86, 1)',
        data: amount
      }
    ]
  };

  return (
    <div>
      <Doughnut
        data={data}
        width={1000}
        height={600}
        options={{
          title: {
            display: true,
            text: 'Spending Chart',
            fontSize: 25
          },
          legend: {
            display: true,
            position: 'right'
          },
          responsive: true,
          maintainAspectRatio: false,
          // scales: {
          //   yAxes: [{
          //     ticks: {
          //       beginAtZero: true
          //     }
          //   }]
          // }
        }}
      />
    </div>
  )
}
