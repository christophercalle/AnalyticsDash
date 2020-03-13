function generateData(count,start, growth){
  // create an empty array
  const data = [];
  // loop over the count
  for (let i = 0; i < count; i++){
    // push a random number onto the array
    data.push(Math.floor(start + (Math.random() * i) * growth));
  }
      
  // return array 
  return data;
}


export const chartData = [
  {
  name: 'Clean Tech',
  data: generateData(12,30,.25),
  color: '#1a53ff'
}, {
  name: 'Conventional Energy',
  data: generateData(12,10,0.2),
  color: '#4d79ff'
}, {
  name: 'Operational Improvement',
  data: generateData(12,6,.3),
  color: '#809fff'
}, {
  name: 'Other',
  data: generateData(12,5,.5),
  color: '#b3c6ff'
}
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function format(num) {
  return `$${num} Billion`
}

export const tableRows = months.map((month, i ) => ({
  month,
  cleanTech: format(chartData[0].data[i]),
  conventionalEnergy: format(chartData[1].data[i]),
  operationalImprovement: format(chartData[2].data[i]),
  other: format(chartData[3].data[i]),
}))

export const tableColumns = [
  {
    width: 240,
    label: 'Month',
    dataKey: 'month'
  },
  {
    width: 240,
    label: 'Clean Tech',
    dataKey: 'cleanTech',
    numeric: true
  },
  {
    width: 240,
    label: 'Conventional Energy',
    dataKey: 'conventionalEnergy',
    numeric: true
  },
  {
    width: 240,
    label: 'Operational Improvement',
    dataKey: 'operationalImprovement',
    numeric: true
  },
  {
    width: 240,
    label: 'Other',
    dataKey: 'other',
    numeric: true
  }
]