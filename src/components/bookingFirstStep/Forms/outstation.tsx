import React, { useEffect, useState } from "react";
import "../index.module.scss";
import {MdTimerOff} from "react-icons/md";
import {BiTime} from "react-icons/bi"

import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  Input,
  DatePicker,
  TimePicker,
  message,
  Select,
  Checkbox,
} from "antd";
import API from "../../../config/api";
import axios from "axios";
import moment from "moment";
import dayjs from 'dayjs';


const { RangePicker } = DatePicker;
moment.locale('en');
const { Option } = Select;

export default function OutStation(props: any) {
    const [form] = Form.useForm();
  const navigate = useNavigate();
  const currTime = new Date();
  const [value, setValue] = useState<string>();
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [tripType, setTripType] = useState<"oneWay" | "roundTrip" | null>(
    "oneWay"
  );
  const [data, setData] = useState<any["options"]>([]);
  const [selectedRoute, setSelectedRoute] = useState<any>({});
  const [toPlace, setToPlace] = useState<any>([]);
  const [datePickup, setDatePickup] = useState<any>(new Date);
  const [pickupDateString, setpickupDateString] = useState<any>("");

  const onFinish = async (val: any) => {
    const { user_from, user_to, dateRange, returnRange, timeRange } = val;

    const pickUpDate = dateRange?.toISOString();
    const dropOffDate = returnRange?.toISOString();
    const returnDate = returnRange?.toISOString();
    const timeOfPickup = timeRange;
    const modes = props.types;

    navigate("/selectCars", {
      state: {
        tripType,
        selectedRoute,
        pickUpDate,
        dropOffDate,
        returnDate,
        timeOfPickup,
        modes,
      },
    });
    if (props.onClose) {
      props.onClose();
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    console.log("=====fetchData=");
    try {
      const response = await axios.get(
        API.BASE_URL + API.GET_PICKUP_LOCATION
        // "https://piccocabs-server-46642b82a774.herokuapp.com/Pickuplocation/location"
        // "http://localhost:8080/Pickuplocation/location"
      );
      setData(response.data);
      let listingData = filterUniqueNames(response.data, "place");
      setFilteredOptions(listingData);
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const time = currTime
    .getHours()
    .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
  const minute = currTime
    .getMinutes()
    .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
  const handleSearch = (newValue: string) => {
    let filteredData = filteredOptions.filter((d: any) =>
      d.place.toLowerCase().includes(newValue.toLowerCase())
    );
    setFilteredOptions(filteredData);
  };
  const filterUniqueNames = (arr: any, contiton: any) => {
    const uniqueNames: any = {};
    return arr.filter((item: any) => {
      if (!uniqueNames[item[contiton]]) {
        uniqueNames[item[contiton]] = true;
        return true;
      }
      return false;
    });
  };
  const handleFromChange = (newValue: any) => {
    let toPlaces = data.filter((item: any) => item.place === newValue);
    let toListing = filterUniqueNames(toPlaces, "location");
    setToPlace(toListing);
  };
  const handleToChange = (id: any) => {
    let route = data.find((item: any) => item.id === id);
    setSelectedRoute(route);
  };
  const handleToSearch = (newValue: string) => {
    let filteredData = toPlace.filter((d: any) =>
      d.location.toLowerCase().includes(newValue.toLowerCase())
    );
    setToPlace(filteredData);
  };
  const today = new Date();

  const generateTimeOptions = () => {
    const minStartTime = moment().add(2, "hours").startOf("hour"); 
    const endTime = moment("11:45 PM", "hh:mm A"); 
    const timeOptions = [];
    let selectedStartTime =datePickup?.toISOString()?.slice(0, -14) === today?.toISOString()?.slice(0, -14) ? moment(minStartTime,"hh:mm A") : moment("12:00 AM", "hh:mm A");
    let nextInterval = moment(selectedStartTime).add(
      15 - (selectedStartTime.minute() % 15),
      "minutes"
    );
  
    while (nextInterval<=endTime) {
      timeOptions.push(nextInterval.format("hh:mm A"));
      nextInterval.add(15, "minutes");
    }
  
    return timeOptions;
  };
  const handleDateChange = (date:any,d:any) => {
    setDatePickup(date)
    setpickupDateString(d)
  }
  return (
    <div className="mt-3">
      <Form form={form} onFinish={onFinish}>
        <div className="row mx-0 gy-3">
          <div
            className="col-3"
            style={{ position: "absolute", top: 10 }}
          ></div>
          <div className="col-md-3 col-sm-6 col-12">
            <div className="form-label fw-bold">FROM</div>
            <Form.Item
              name="user_from"
              className="fw-bold"
              initialValue={props?.selectedProps?.place}
              rules={[
                {
                  required: true,
                  message: "required",
                },
              ]}
            >
              <Select
                className="CustomSelect"
                showSearch
                defaultActiveFirstOption={false}
                placeholder={"Start Place"}
                suffixIcon={null}
                filterOption={false}
                onSearch={handleSearch}
                onChange={handleFromChange}
                notFoundContent={null}
                options={filteredOptions.map((d: any) => ({
                  value: d.place,
                  label: d.place,
                }))}
              />
            </Form.Item>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <label htmlFor="inputEmail4" className="form-label fw-bold">
              TO
            </label>
            <Form.Item
              name="user_to"
              className="fw-bold"
              initialValue={props?.selectedProps?.location}
              rules={[
                {
                  required: true,
                  message: "required",
                },
              ]}
            >
              <Select
                showSearch
                placeholder={"End Place"}
                defaultActiveFirstOption={false}
                suffixIcon={null}
                filterOption={false}
                onSearch={handleToSearch}
                onChange={handleToChange}
                notFoundContent={null}
                options={toPlace.map((item: any) => ({
                  value: item.id,
                  label: item?.location,
                }))}
              />
            </Form.Item>
          </div>
          <div
            className={
              tripType === "oneWay" ? "col-md-3" : "col-md-2 col-sm-6 col-12"
            }
          >
            <label htmlFor="inputEmail4" className="form-label fw-bold">
              PICK UP
            </label>
            <Form.Item
              name="dateRange"
              initialValue={dayjs(props?.selectedDate)}
              rules={[
                {
                  required: true,
                  message: "required",
                },
              ]}
            >
              <DatePicker
                format="YYYY-MM-DD"
                placeholder="Pick up date"
                onChange={handleDateChange}
                value={datePickup}
                className="form-control border-0 border-bottom rounded-0"
                disabledDate={(current) => {
                  let customDate = moment().format("YYYY-MM-DD");
                  return current && current < moment(customDate, "YYYY-MM-DD");
                }}
              />
            </Form.Item>
          </div>
          {/* {tripType === "roundTrip" && (
            <div className="col-md-2 col-sm-6 col-12">
              <label htmlFor="return_date" className="form-label fw-bold">
                RETURN
              </label>
              <Form.Item
                name="returnRange"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <DatePicker
                  format="YYYY-MM-DD"
                  placeholder="Return Date"
                  // defaultValue={dateFormat}
                  className="form-control border-0 border-bottom rounded-0"
                  disabledDate={(current) =>
                    current && current < moment(today).startOf("day")
                  }
                />
              </Form.Item>
            </div>
          )} */}
          <div
            className={
              tripType === "oneWay" ? "col-md-3" : "col-md-2 col-sm-6 col-12"
            }
          >
            <label htmlFor="inputEmail4" className="form-label fw-bold">
              PICK UP AT
            </label>
            <Form.Item
              name="timeRange"
              initialValue={props.selectedTime}
              rules={[
                {
                  required: true,
                  message: "required",
                },
              ]}
            >
              <Select
                className="form-control border-0 rounded-0"
                placeholder="Pick up time"
                suffixIcon={<BiTime size={20} />}
              >
                <MdTimerOff color="red" />
                {generateTimeOptions().map((timeOption) => (
                  <Option key={timeOption} value={timeOption}>
                    {timeOption}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </div>
        </div>
        <div
          className="d-flex justify-content-center position-relative"
          style={{ width: "100%" }}
        >
          <Form.Item
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              position: "absolute",
            }}
          >
            <Button
              style={{
                position: "absolute",
                top: "0px",
                // right: -50,
                left: -100,
                backgroundColor: "#6BB546",
                color: "#ffff",
                width: "200px",
                height: "40px",
                outline: "none",
                border: "none",
                fontWeight: "bold",
              }}
              htmlType="submit"
            >
              Search Cabs
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}
