//NOTE https://www.chartjs.org/docs/latest/charts/line.html?h=bordercolor


import React, { useContext, useEffect } from 'react'
import {GlobalContext} from '../../context/GlobalState';
import { BarChart } from './BarChart';
import { LineChart } from './LineChart';
import { PieChart } from './PieChart';
import { RadarChart } from './RadarChart';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Charts = () => {

  //SECTION Pulls data from api (Amount/Text)
  const { transactions, getTransactions } = useContext(GlobalContext)

  //SECTION Maps out Amounts
  let amounts = transactions.map(transaction => transaction.amount)

  //SECTION Maps out Text
  let text = transactions.map(transaction => transaction.text)
  // console.log(transactions, text, amounts);

  //SECTION Changes Colors For Charts
  const changeColor = (context) => {
    var index = context.dataIndex;
    var value = context.dataset.data[index];
    return value < 0 ? 'rgba(204, 68, 51, 1)' :  // changes negative values in red
      'rgba(102, 170, 51, 1)';// else changes values(positive) in red 
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getTransactions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="m-5">
      <h3 className="mx-auto">Transaction Charts</h3>
      <Tabs>
        <TabList>
          <Tab>Line Chart</Tab>
          <Tab>Bar Chart</Tab>
          <Tab >Pie Chart</Tab>
          <Tab >Radar Chart</Tab>
        </TabList>
        <TabPanel>
          <div className="chart-fluid">
            <LineChart text={text} amount={amounts} changeColor={changeColor} />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="chart-fluid">

            <BarChart text={text} amount={amounts} changeColor={changeColor} />
          </div>

        </TabPanel>
        <TabPanel>
          <div className="chart-fluid">

            <PieChart text={text} amount={amounts} changeColor={changeColor} />
          </div>

        </TabPanel>
        <TabPanel>
          <div className="chart-fluid">
            <RadarChart text={text} amount={amounts} changeColor={changeColor} />
          </div>

        </TabPanel>
      </Tabs>

    </div>
  )
}

export default Charts

