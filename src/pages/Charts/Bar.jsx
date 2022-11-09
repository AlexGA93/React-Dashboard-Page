import React from 'react';

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
  Legend
} from '@syncfusion/ej2-react-charts';

// headers
import { ChartsHeader } from '../../components';

// data
import {
  barCustomSeries, 
  barPrimaryXAxis, 
  barPrimaryYAxis
} from '../../data/dummy';

//  state
import { useStateContext } from '../../contexts/ContextProvider';

const Area = () => {

  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>

      <ChartsHeader category={"Bar"} title={"Olympic Medal Counts - RIO"} />

      <ChartComponent
        id="bar-chart"
        height="420px"
        width=''
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 }}}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        legendSettings={{ background: "white" }}
      >
        
        <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
      
        <SeriesCollectionDirective>
          {
            barCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))
          }
        </SeriesCollectionDirective>
      
      </ChartComponent>
    </div>
    
  )
}

export default Area