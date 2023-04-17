import React, { useState } from "react";
function Timedetail({ location, current, condition }) {
  function currentTime() {
    let date = new Date();
    let dd = date.getDate();
    let MM = date.getMonth() + 1;
    let yy = date.getFullYear();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let session = "AM";

    if (hh == 0) {
      hh = 12;
    }
    if (hh > 12) {
      hh = hh - 12;
      session = "PM";
    }

    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    MM = MM < 10 ? "0" + MM : MM;

    var t = setTimeout(function () {
      currentTime();
    }, 1000);

    return (
      dd + "/" + MM + "/" + yy + " | " + hh + ":" + mm + ":" + " " + session
    );
  }
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center justify-center my-2">
        <p className="text-white text-base sm:text-lg font-extralight mr-4">
          {location}
        </p>
        <p className="text-white text-base sm:text-lg font-extralight mr-4">
          {current || currentTime()}
        </p>
      </div>
    </div>
  );
}

export default Timedetail;