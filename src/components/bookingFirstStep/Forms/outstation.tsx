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
} from "antd";
import API from "../../../config/api";
import axios from "axios";

const { RangePicker } = DatePicker;

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

  const onFinish = async (val: any) => {
    const { user_from, user_to, dateRange, timeRange } = val;

    const pickUpDate = dateRange.toISOString();
    const dropOffDate = dateRange.toISOString();
    const timeOfPickup = timeRange;
    const modes = props.types;

    navigate("/bookingSecondStep", {
      state: {
        tripType,
        selectedRoute,
        pickUpDate,
        dropOffDate,
        timeOfPickup,
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
        "http://localhost:8080/Pickuplocation/location"
      );
      setData(response.data);
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
    const filteredData = data.filter((d: any) =>
      d.place.toLowerCase().includes(newValue.toLowerCase())
    );
    console.log("=============>", filteredData);
    console.log("=============>", filteredData);

    // setFilteredOptions(filteredData);
  };
  const handleFromChange = (newValue: any) => {
    console.log("====", newValue);
    let toPlaces = data.filter((item: any) => item.place === newValue);
    console.log("===toPlaces====");
    console.log(toPlaces);
    console.log("===toPlaces====");
    setToPlace(toPlaces);
  };
  const handleToChange = (id: any) => {
    let route = data.find((item: any) => item.id === id);
    setSelectedRoute(route);
  };

  return (
    <div className="mt-3">
      <Form form={form} onFinish={onFinish}>
        <div className="row mx-0 gy-3">
          <div className="col-12">
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={tripType === "oneWay"}
                  onChange={() => setTripType("oneWay")}
                />
                One Way
              </label>
              <label style={{ marginLeft: "10px" }}>
                <input
                  type="checkbox"
                  checked={tripType === "roundTrip"}
                  onChange={() => setTripType("roundTrip")}
                />
                Round Trip
              </label>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <div className="form-label fw-bold">FROM</div>
            <Form.Item name="user_from" className="fw-bold">
              {/* <Input
                placeholder="Start typing City"
                className="form-control border-0 border-bottom rounded-0"
              /> */}
              <Select
                className="CustonSelect"
                showSearch
                defaultActiveFirstOption={false}
                placeholder={"Start Date"}
                suffixIcon={null}
                filterOption={false}
                onSearch={handleSearch}
                onChange={handleFromChange}
                notFoundContent={null}
                options={(filteredOptions.length > 0
                  ? filteredOptions
                  : data
                ).map((d: any) => ({
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
            <Form.Item name="user_to" className="fw-bold">
              <Select
                showSearch
                value={value}
                placeholder={"End Date"}
                defaultActiveFirstOption={false}
                suffixIcon={null}
                filterOption={false}
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
            <Form.Item name="dateRange">
              <DatePicker
                format="YYYY-MM-DD"
                placeholder="Pick up date"
                className="form-control border-0 border-bottom rounded-0"
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
              />
            </div>
          )}
          <div
            className={
              tripType === "oneWay" ? "col-md-3" : "col-md-2 col-sm-6 col-12"
            }
          >
            <label htmlFor="inputEmail4" className="form-label fw-bold">
              PICK UP AT
            </label>
            <Form.Item name="timeRange">
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
              htmlType={"submit"}
            >
              Explore Cabs
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}
