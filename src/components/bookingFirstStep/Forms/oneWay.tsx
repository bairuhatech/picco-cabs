import React, { useEffect, useState } from "react";
import classes from "../index.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, DatePicker, TimePicker, message } from "antd";
import API from "../../../config/api";
import axios from "axios";
// import moment from "moment";

const { RangePicker } = DatePicker;

export default function OneWay() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const currTime = new Date();

  // currTime.setDate(currTime.getDate());
  // var date = currTime.toISOString().substring(0, 10);

  const onFinish = async (val: any) => {
    console.log("====================", val);
    const { user_from, user_to, dateRange, return_date } = val;

    const pickUpLoc = user_from;
    const dropOffLoc = user_to;
    const pickUpDate = dateRange.toISOString();
    const dropOffDate = dateRange.toISOString();
    // const pickUpTime = return_date.split(":")[0];
    console.log("pickUpLoc:", pickUpLoc);
    console.log("dropOffLoc:", dropOffLoc);
    console.log("pickUpDate:", pickUpDate);
    console.log("dropOffDate:", dropOffDate);
    // console.log("pickUpTime:", pickUpTime);
    navigate("/bookingSecondStep", {
      state: {
        pickUpLoc,
        dropOffLoc,
        pickUpDate,
        dropOffDate,
        // pickUpTime,
      },
    });
  };
  // useEffect(() => {
  //   form.setFieldsValue({ dateRange: [moment(), moment().add(1, "day")] });
  // }, []);

  const time = currTime
    .getHours()
    .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
  const minute = currTime
    .getMinutes()
    .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });

  return (
    <div className="mt-3">
      <Form form={form} onFinish={onFinish}>
        <div></div>
        <div className="row mx-0 gy-3">
          <div className="col-md-3 col-sm-6 col-12">
            <div className="form-label fw-bold">FROM</div>
            <Form.Item name="user_from" className="fw-bold">
              <Input
                placeholder="Start typing City"
                className="form-control border-0 border-bottom rounded-0"
              />
            </Form.Item>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <label htmlFor="inputEmail4" className="form-label fw-bold">
              TO
            </label>
            <Form.Item name="user_to" className="fw-bold">
              <Input
                placeholder="Start typing City"
                className="form-control border-0  border-bottom rounded-0"
              />
            </Form.Item>
          </div>
          <div className="col-md-3 col-6">
            <label htmlFor="inputEmail4" className="form-label fw-bold">
              PICK UP
            </label>
            <Form.Item name="dateRange">
              <DatePicker
                format="YYYY-MM-DD"
                placeholder="Pick up date"
                className="form-control border-0 border-bottom rounded-0"
              />
            </Form.Item>
          </div>
          <div className="col-md-3 col-4">
            <label htmlFor="inputEmail4" className="form-label fw-bold">
              PICK UP AT
            </label>
            <Form.Item name="return_date">
              <Input
                className="form-control border-0  border-bottom rounded-0"
                defaultValue={`${time}:${minute}`}
                placeholder="Pick up time"
                type="time"
              />
            </Form.Item>
          </div>
        </div>
        <div
          className="d-flex justify-content-center position-relative"
          style={{ width: "100%" }}
        >
          <Form.Item
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Button
              // onClick={() => navigate("/bookingSecondStep")}
              htmlType="submit"
            >
              Explore Cabs
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}
