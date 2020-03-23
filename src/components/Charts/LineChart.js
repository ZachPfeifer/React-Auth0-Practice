import React from 'react'
import { Line } from "react-chartjs-2";
// import "chartjs-plugin-lineheight-annotation";
import numeral from 'numeral'
import { numberWithCommas } from '../Utility/Utility';



export const LineChart = ({ text, amount, changeColor }) => {

  // console.log(text, amount);

  const data = {
    labels: text,
    datasets: [
      {
        label: 'Transactions',
        backgroundColor: 'rgba(191, 148, 86, .2)',
        borderColor: 'rgba(191, 148, 86, 1)',
        borderWidth: 2,
        pointBackgroundColor: changeColor,
        pointRadius: 6,
        // pointHitRadius: 10,
        // pointBorderWidth: 6,
        hoverBackgroundColor: 'rgba(204, 68, 51, .4)',
        hoverBorderColor: 'rgba(204, 68, 51, .4)',
        data: amount
      }
    ]
  }


  return (
    <div id="line">
      <Line
        data={data}
        width={1000}
        height={500}
        options={{
          title: {
            display: true,
            text: 'Spending Chart',
            fontSize: 25
          },
          responsive: true,
          legend: {
            display: true, align: 'center', position: 'top'
          },
          maintainAspectRatio: false,
          responsiveAnimationDuration: 0,
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
