import React from 'react'
import numeral from 'numeral'
import { Bar } from "react-chartjs-2";
import { numberWithCommas } from '../Utility/Utility';


export const BarChart = ({ text, amount, changeColor }) => {

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

  // let data = api.get("line-data");
  return (
    <div id="bar">
      <Bar
        data={data}
        width={1000}
        height={800}
        options={{
          title: {
            display: true,
            text: 'Spending Chart',
            fontSize: 25
          },
          legend: {
            display: true,
          },
          maintainAspectRatio: true,
          responsive: true,
          scales: {
            yAxes: [{
              ticks: {
                callback: function (value, index, values) {
                  // add comma as thousand separator
                  return numberWithCommas(value)
                },
              }
            }]
          },
          tooltips: {
            callbacks: {
              label: function (tooltipItem, data) {
                var label = data.datasets[tooltipItem.datasetIndex].label || ''

                if (label) {
                  label += ': '
                }
                label += numeral(tooltipItem.yLabel).format('0,0')
                return label
              },
            },
          },
        }}
      />
    </div>
  )
}
