"use strict";

// JS Goes here - ES6 supported
var daysSince = document.getElementById("days-since-latest");

if (daysSince) {
  var aDay = 1000 * 60 * 60 * 24;
  var dateSince = new Date(daysSince.getAttribute("data-latest-incident-date"));
  var now = new Date();
  var timeSince = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()) - new Date(dateSince.getUTCFullYear(), dateSince.getUTCMonth(), dateSince.getUTCDate());
  var endDays = Math.floor(timeSince / aDay);
  var count = endDays === 1 ? "".concat(endDays, " day") : "".concat(endDays, " days");
  daysSince.innerHTML = "".concat(count, " since last incident");
}