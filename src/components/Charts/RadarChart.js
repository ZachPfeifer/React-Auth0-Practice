import React from 'react'

import { Radar } from "react-chartjs-2";


export const RadarChart = ({ text, amount, changeColor }) => {
  const data = {

    labels: text,
    datasets: [
      {
        label: text,
        fill: true,
        backgroundColor: changeColor,
        borderColor: 'rgba(191, 148, 86, 1)',
        pointBorderColor: changeColor,
        pointBackgroundColor: "rgba(179,181,198,1)",
        data: [8.77, 55.61, 21.69, 6.62, 6.82]
      },
    ]

  }


  return (
    <div id="line">
      <Radar
        data={data}
        width={1000}
        height={500}
        options={{
          title: {
            display: true,
            text: 'Spending Chart',
            fontSize: 25
          },
          legend: {
            display: false
          },
          maintainAspectRatio: false,
          responsive: true,
          responsiveAnimationDuration: 0,

        }}
      />
    </div>
  )
}
