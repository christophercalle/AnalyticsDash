import React from 'react';
import {Card} from './Card';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  chart: {
      height: '360px',
      type: 'column',
      style: {
        fontFamily: `'Blinker', san-serif`
      }
  },
  title: {
      text: 'Revenue by Product'
  },
  xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun', 'Jul', 'Aug', 'Sep','Oct', 'Nov', 'Dec']
  },
  yAxis: {
      min: 0,
      reversedStacks: false,
      title: {
          text: 'Billions of Dollars'
      }
  },
  tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
      shared: true
  },
  plotOptions: {
      series: {
        borderWidth: 0
      },
      column: {
          stacking: 'percent'
      }
  },
  series: [{
      name: 'Phones',
      data: [5, 3, 4, 7, 2, 8, 4, 3],
      color: '#002430'
  }, {
      name: 'Services',
      data: [2, 2, 3, 2, 1, 8, 3, 5],
      color: '#004760'
  }, {
    name: 'Laptops',
    data: [2, 2, 3, 2, 1, 8, 3, 5],
    color: '#006A90'
  }, {
      name: 'Tablets',
      data: [3, 4, 4, 2, 5, 1, 4, 9],
      color: '#178CB6'
  }]
}

export function Chart() {
  return <Card height={400}>
            <HighchartsReact
              highcharts={Highcharts}
              options={options}/>
        </Card>
}