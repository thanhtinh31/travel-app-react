import React from 'react'
import Countdown from 'react-countdown';
import { ClockCircleOutlined } from '@ant-design/icons';
const Completionist = () => <span>Đã kết thúc</span>;
// Renderer callback with condition
const renderer = ({total, days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span style={{color:'red'}}>{days} ngày:{hours}:{minutes}:{seconds}</span>;
  }
};
function CountDown(props) {
    // console.log(props.dayStart.getDate())
  var d = new Date(props.dayStart); 
  return (
    <><ClockCircleOutlined style={{fontSize:20,color:'red'}} /> <Countdown
    date={d}
    renderer={renderer}
    /> 
    </>
  )
}

export default CountDown