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
import dayjs from "dayjs";
import {BiTime} from 'react-icons/bi';
// import { AutoComplete } from "antd";
// import Autocomplete from "react-google-autocomplete";
const { RangePicker } = DatePicker;
const { Option } = Select;

export default function Airports(props: any) {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const currTime = new Date();
  const [value, setValue] = useState<string>();
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [tripType, setTripType] = useState<
    "oneWay" | "roundTrip" | "airports" | null
  >("airports");
  const [data, setData] = useState<any["options"]>([]);
  const [selectedRoute, setSelectedRoute] = useState<any>({});
  const [toPlace, setToPlace] = useState<any>([]);
  const [airport, setAirport] = useState<any>("pickUp");
  const [toPlaceOptions, setToPlaceOptions] = useState([]);
  const [datePickup, setDatePickup] = useState<any>(new Date());
  const [pickupDateString, setpickupDateString] = useState<any>("");

  const onFinish = async (val: any) => {
    const { Trip, user_from, user_to, dateRange, timeRange } = val;

    const pickUpDate = dateRange.toISOString();
    const dropOffDate = dateRange.toISOString();
    const timeOfPickup = timeRange;
    const Trips = Trip;
    const userfrom = user_from;
    const userto = user_to;
    const modes = props.types;

    navigate("//selectCars", {
      state: {
        Trips,
        selectedRoute,
        pickUpDate,
        dropOffDate,
        timeOfPickup,
        userfrom,
        userto,
        modes,
        tripType,
        airport,
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
    try {
      const response = await axios.get(
        API.BASE_URL + API.GET_PICKUP_LOCATION
        // "https://piccocabs-server-46642b82a774.herokuapp.com/Pickuplocation/location"
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
  // const handleFromChange = (newValue: any) => {
  //   console.log("=================newValue=================",newValue)
  //     let toPlaces = data.filter((item: any) => item.place === newValue);
  //     let toListing = filterUniqueNames(toPlaces, "location");
  //     setToPlace(toListing);
  //     fetchNearbyPlaces(newValue.lat, newValue.lng);
  //     console.log("====newValue.lat===",newValue.lat)
  // };
  const handleFromChange = (selectedPlaceName: string) => {
    // fetchNearbyPlaces(selectedPlaceName); // Fetch nearby places for user_from
    fetchPlacePredictions(selectedPlaceName); // Fetch place predictions for user_to
  };
  // const handleToChange = (id: any) => {
  //   let route = data.find((item: any) => item.id === id);
  //   setSelectedRoute(route);
  // };
  const handleToSearch = (newValue: string) => {
    let filteredData = toPlace.filter((d: any) =>
      d.place.toLowerCase().includes(newValue.toLowerCase())
    );
    setToPlace(filteredData);
  };
  const today = new Date();

  const generateTimeOptions = () => {
    const minStartTime = moment().add(2, "hours").startOf("hour");
    const endTime = moment("11:45 PM", "hh:mm A");
    const timeOptions = [];
    let selectedStartTime =
      datePickup?.toISOString()?.slice(0, -14) ===
      today?.toISOString()?.slice(0, -14)
        ? moment(minStartTime, "hh:mm A")
        : moment("12:00 AM", "hh:mm A");
    let nextInterval = moment(selectedStartTime).add(
      15 - (selectedStartTime.minute() % 15),
      "minutes"
    );

    while (nextInterval <= endTime) {
      timeOptions.push(nextInterval.format("hh:mm A"));
      nextInterval.add(15, "minutes");
    }

    return timeOptions;
  };
  // const fetchNearbyPlaces = async (placeName: string) => {
  //   console.log("=======================ffffffffffffff", placeName);

  //   const apiKey = "AIzaSyDQi5xajVc33pRko4ciN0vSRhL89gWdF4w"; // Replace with your actual API key
  //   const radius = 20000; // You can adjust the radius as needed

  //   // Use the `placeName` parameter in the API request URL
  //   const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${placeName}&radius=${radius}&key=${apiKey}`;

  //   try {
  //     const response = await fetch(url);
  //     console.log("response vanno nokk============", response);
  //     const data = await response.json();
  //     console.log("data vanno nokk============", data);
  //     console.log("areeeeeeel vanno nokk============", data.results);

  //     if (data.status === "OK") {
  //       const placeOptions = data.results.map((place: any) => ({
  //         value: place.address_components.find((component: any) =>
  //           component.types.includes("locality")
  //         ).long_name,
  //         label: place.address_components.find((component: any) =>
  //           component.types.includes("locality")
  //         ).long_name,
  //       }));
  //       setToPlaceOptions(placeOptions);
  //       console.log("placeOptions vanno nokk============", placeOptions);
  //     } else {
  //       // Handle the case where the API request was not successful.
  //       console.error("Google Maps Places API request failed.");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data from Google Maps Places API:", error);
  //   }
  // };

  const fetchPlacePredictions = async (input: string) => {
    const apiKey = "AIzaSyDQi5xajVc33pRko4ciN0vSRhL89gWdF4w";
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${apiKey}`;
    try {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "YourAppName/1.0",
      };
      const response = await axios.get(url, { headers });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDateChange = (date: any, d: any) => {
    setDatePickup(date);
    setpickupDateString(d);
  };
  const onSelect = (value: any) => {
    console.log("onSelect", value);
  };

  return (
    <div className="mt-3">
      <Form form={form} onFinish={onFinish}>
        <div className="row mx-0 gy-3">
          <div
            className="col-3"
            style={{ position: "absolute", top: 10 }}
          ></div>
          <div className="col-md-2 col-sm-6 col-12">
            <div className="form-label fw-bold">Ride Type</div>
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
                    value: "Pickup",
                    label: "Pick From Airport",
                  },
                  {
                    value: "Drop",
                    label: "Drop To Airport",
                  },
                ]}
              />
            </Form.Item>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <label htmlFor="inputEmail4" className="form-label fw-bold">
              {/* {airport === "pickUp" ? "PICKUP CITY" : "DROP CITY"} */}
              PICKUP CITY
            </label>
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
                // value={value}
                placeholder={"Start Place"}
                defaultActiveFirstOption={false}
                suffixIcon={null}
                filterOption={false}
                onSearch={handleSearch}
                onChange={handleFromChange}
                // onChange={(selectedValue) => handleFromChange(selectedValue)}
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
              {/* DROP ADDRESS */}
              {airport === "Drop" ? "DROP ADDRESS" : "PICKUP ADDRESS"}
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
              <Select />
            </Form.Item>
          </div>
          <div
            className={
              tripType === "oneWay" ? "col-md-2" : "col-md-2 col-sm-6 col-12"
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
                // defaultValue={dayjs(props?.selectedDate)}
                className="form-control border-0 border-bottom rounded-0"
                disabledDate={(current) =>
                  current && current < moment(today).startOf("day")
                }
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
              PICK UP AT
            </label>
            <Form.Item
              name="timeRange"
              initialValue={props?.selectedTime}
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
                allowClear
                suffixIcon={<BiTime size={20} />}
              >
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
