import React from 'react';
import LineChart from '../../../homepage/components/Charts/LineChartTemplate';
import MetricsComponentWrapper from '../../../utils/MetricsComponentWrapper';

const BytesReceivedByPod = ({ metrics }) => {
  return (
    <div>
      <MetricsComponentWrapper title=''>
        <LineChart
          title='Bytes Received By Pod'
          label='Bytes Received By Pod'
          chartData={metrics}
        />
      </MetricsComponentWrapper>
    </div>
  );
};

export default BytesReceivedByPod;
