import React from 'react';
import {Card} from './Card';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  chart: {
      height: '360px',
      type: 'column'
  },
  title: {
      text: 'Stacked column chart'
  },
  xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Total fruit consumption'
      }
  },
  tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
      shared: true
  },
  plotOptions: {
      column: {
          stacking: 'percent'
      }
  },
  series: [{
      name: 'John',
      data: [5, 3, 4, 7, 2]
  }, {
      name: 'Jane',
      data: [2, 2, 3, 2, 1]
  }, {
      name: 'Joe',
      data: [3, 4, 4, 2, 5]
  }]
}

export function Chart() {
  return <Card height={400}>
            <HighchartsReact
              highcharts={Highcharts}
              options={options}/>
        </Card>
}