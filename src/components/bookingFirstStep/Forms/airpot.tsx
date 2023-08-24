import React, { useEffect, useState } from "react";
import "../index.module.scss";
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


const { RangePicker } = DatePicker;

export default function Airports(props: any) {
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
  const [airport, setAirport] = useState<any>("pickUp");

  const onFinish = async (val: any) => {
    const { Trip, user_from, user_to, dateRange, timeRange } = val;

    const pickUpDate = dateRange.toISOString();
    const dropOffDate = dateRange.toISOString();
    const timeOfPickup = timeRange;
    const Trips = Trip;
    const userfrom = user_from;
    const userto = user_to;
    const modes = props.types;

    navigate("/bookingSecondStep", {
      state: {
        Trips,
        selectedRoute,
        pickUpDate,
        dropOffDate,
        timeOfPickup,
        userfrom,
        userto,
        modes,
      },
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://piccocabs-server-46642b82a774.herokuapp.com/Pickuplocation/location"
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
  const handleTripChange = (newValue: any) => {
    setAirport(newValue);
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
      d.place.toLowerCase().includes(newValue.toLowerCase())
    );
    setToPlace(filteredData);
  };
  const today = new Date();


  return (
    <div className="mt-3">
      <Form form={form} onFinish={onFinish}>
        <div className="row mx-0 gy-3">
          <div className="col-3" style={{ position: "absolute", top: 10 }}>
          </div>
          <div className="col-md-2 col-sm-6 col-12">
            <div className="form-label fw-bold">TRIP</div>
            <Form.Item
              name="Trip"
              className="fw-bold"
              rules={[
                {
                  required: true,
                  message: "required",
                },
              ]}
            >
              {/* <Input
                placeholder="Start typing City"
                className="form-control border-0 border-bottom rounded-0"
              /> */}
              <Select
                className="CustomSelect"
                showSearch
                defaultActiveFirstOption={false}
                placeholder={"Select Trip"}
                suffixIcon={null}
                filterOption={false}
                onChange={handleTripChange}
                notFoundContent={null}
                options={[
                  {
                    value: "pickUp",
                    label: "Pick From Airport",
                  },
                  {
                    value: "drop",
                    label: "Drop To Airport",
                  },
                ]}
              />
            </Form.Item>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <label htmlFor="inputEmail4" className="form-label fw-bold">
              {airport === "pickUp" ? "PICKUP CITY" : "DROP CITY"}
            </label>
            <Form.Item
              name="user_from"
              className="fw-bold"
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
                // value={value}
                placeholder={"Start Place"}
                defaultActiveFirstOption={false}
                suffixIcon={null}
                filterOption={false}
                onSearch={handleSearch}
                onChange={handleFromChange}
                notFoundContent={null}
                options={filteredOptions.map((item: any) => ({
                  value: item.place,
                  label: item.place,
                }))}
              />
            </Form.Item>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <label htmlFor="inputEmail4" className="form-label fw-bold">
              {airport === "pickUp" ? "PICKUP ADDRESS" : "DROP ADDRESS"}
            </label>
            <Form.Item
              name="user_to"
              className="fw-bold"
              rules={[
                {
                  required: true,
                  message: "required",
                },
              ]}
            >
              <Select
                showSearch
                // value={value}
                placeholder={"Enter your address"}
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
              tripType === "oneWay" ? "col-md-2" : "col-md-2 col-sm-6 col-12"
            }
          >
            <label htmlFor="inputEmail4" className="form-label fw-bold">
              {airport === "pickUp" ? "PICK UP" : "DROP UP"}
            </label>
            <Form.Item
              name="dateRange"
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
                className="form-control border-0 border-bottom rounded-0"
                disabledDate={current => current && current < moment(today).startOf('day')}

              />
            </Form.Item>
          </div>
          {tripType === "roundTrip" && (
            <div className="col-md-2 col-sm-6 col-12">
              <label htmlFor="return_date" className="form-label fw-bold">
                RETURN
              </label>
              <input
                type="date"
                className="form-control border-0 border-bottom rounded-0"
                placeholder="return_date"
                aria-label="Last name"
                required
              />
            </div>
          )}
          <div
            className={
              tripType === "oneWay" ? "col-md-2" : "col-md-2 col-sm-6 col-12"
            }
          >
            <label htmlFor="inputEmail4" className="form-label fw-bold">
              {airport === "pickUp" ? "PICK UP AT " : "DROP UP AT"}
            </label>
            <Form.Item
              name="timeRange"
              rules={[
                {
                  required: true,
                  message: "required",
                },
              ]}
            >
              <input
                className="form-control border-0 border-bottom rounded-0"
                placeholder="Pick up time"
                type="time"
                name="timeRange"
                step={600} // 10 minutes in seconds
              />
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
                backgroundColor: "#198754",
                color: "#ffff",
                width: "200px",
                height: "40px",
                outline: "none",
                border: "none",
                fontWeight: "bold",
              }}
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
