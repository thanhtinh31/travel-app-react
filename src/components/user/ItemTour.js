import React from 'react'
import Countdown from 'react-countdown';
const Completionist = () => <span>You are good to go!</span>;
// Renderer callback with condition
const renderer = ({total, days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{days} ngày:{hours}:{minutes}:{seconds}</span>;
  }
};

function ItemTour(props) {

    var d = new Date(props.data.dayStart); 
    console.log(d.getDay())
    // d.setDate(25);
    // d.setMonth(2);
    // d.setFullYear(2023);
  return (
    <>
    id tour: {props.data.id} 
    <br/>
    Hướng dẫn viên: {props.data.tourGuide}
    <br/>
    <Countdown
    date={d}
    renderer={renderer}
    />
    <br/><br/>
  </>
  )
}

export default ItemTour