import React from "react";
import { Link } from "react-router-dom";
import * as moment from "moment";
import { Badge } from "reactstrap";

const formateDate = (date, format) => {
  const dateFormat = format ? format : "DD MMM Y";
  const date1 = moment(new Date(date)).format(dateFormat);
  return date1;
};
const toLowerCase1 = (str) => {
  return str === "" || str === undefined ? "" : str.toLowerCase();
};

const  PlanId = (cell) => {
  return (
    <Link to="#" className="text-body fw-bold">
      {cell.value ? cell.value : ""}
    </Link>
  );
};

const Name = (cell) => {
  return cell.value ? cell.value : "";
};

const Price = (cell) => {
  return cell.value ? cell.value : "";
};

const Duration = (cell) => {
  return cell.value ? cell.value : "";
};

const Interval = (cell) => {
  return cell.value ? cell.value : "";
};

const DisplayInterval = (cell) => {
  return cell.value ? cell.value : "";
};

const Features = (cell) => {
  return cell.value ? cell.value : "";
};

const Recommended = (cell) => {
  return cell.value ? cell.value : "";
};

const Order = (cell) => {
  return cell.value ? cell.value : "";
};

const Enabled = (cell) => {
  return cell.value ? cell.value : "";
};

const Action = (cell) => {
  return cell.value ? cell.value : "";
};

export { Name, Price, Duration, Interval, DisplayInterval, Features, Recommended, Order, Enabled, Action, PlanId, formateDate, toLowerCase1 };
