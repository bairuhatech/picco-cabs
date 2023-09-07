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
import {AiFillPlusCircle} from 'react-icons/ai';


const { RangePicker } = DatePicker;
const { Option } = Select;

export default function Roundtrip(props: any) {
  console.log("props vernnndoooo",props)
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const currTime = new Date();
  const [value, setValue] = useState<string>();
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedDestinations, setSelectedDestinations] = useState<any[]>([]);
  
  const [tripType, setTripType] = useState<"oneWay" | "roundTrip" | null>(
    "roundTrip"
  );
  const [data, setData] = useState<any["options"]>([]);
  const [selectedRoute, setSelectedRoute] = useState<any>({});
  const [toPlace, setToPlace] = useState<any>([]);
  const [count, setCount] = useState(1);



  const onFinish = async (val: any) => {
    const { user_from, user_to, dateRange, returnRange, timeRange } = val;

    const pickUpDate = dateRange?.toISOString();
    const dropOffDate = returnRange?.toISOString();
    const returnDate = returnRange?.toISOString();
    const timeOfPickup = timeRange;
    const modesSecondary = props.types;

    navigate("/bookingSecondStep", {
      state: {
        tripType,
        selectedRoute,
        pickUpDate,
        dropOffDate,
        returnDate,
        timeOfPickup,
        modesSecondary,
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
  const handleFromChange = (newValue: any) => {
    let toPlaces = data.filter((item: any) => item.place === newValue);
    let toListing = filterUniqueNames(toPlaces, "location");
    console.log("to listing", toListing);
    setToPlace(toListing);
  };
  const handleToChange = (id: any) => {
    let route = data.find((item: any) => item.id === id);
    setSelectedRoute(route);
  };
  const handleToSearch = (newValue: string) => {
    console.log("=========referes", toPlace);
    let filteredData = toPlace.filter((d: any) =>
      d.location.toLowerCase().includes(newValue.toLowerCase())
    );
    setToPlace(filteredData);
  };
  const today = new Date();

  const generateTimeOptions = () => {
    const currentTime = moment(); // Get the current time
    const minStartTime = moment().add(2, "hours").startOf("hour"); // Minimum start time
    const endTime = moment("11:45 PM", "hh:mm A"); // Adjusted end time
    const timeOptions = [];

    let startInterval = currentTime.isBefore(minStartTime)
      ? minStartTime
      : currentTime;
    let nextInterval = moment(startInterval).add(
      15 - (startInterval.minute() % 15),
      "minutes"
    );

    while (nextInterval.isSameOrBefore(endTime)) {
      timeOptions.push(nextInterval.format("hh:mm A"));
      nextInterval.add(15, "minutes");
    }

    return timeOptions;
  };
  
  const handleAdd = () => {
    setCount(count + 1);
  }

  return (
    <div className="mt-3">
      <Form form={form} onFinish={onFinish}>
        <div className="row mx-0 gy-3">
          <div className="col-3" style={{ position: "absolute", top: 10 }}>
            {/* <div>
              <label>
                <Checkbox
                  checked={tripType === "oneWay"}
                  onChange={() => setTripType("oneWay")}
                />
                &nbsp; One Way
              </label>
              <label style={{ marginLeft: "10px" }}>
                <Checkbox
                  checked={tripType === "roundTrip"}
                  onChange={() => setTripType("roundTrip")}
                />
                &nbsp;Round Trip
              </label>
            </div> */}
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <div className="form-label fw-bold">FROM</div>
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
          {/* {Array.from({ length: count }).map((_, index) => ( */}
          {/* <div className="col-md-3 col-sm-6 col-12" key={index}> */}
          <div className="col-md-3 col-sm-6 col-12">
            <label htmlFor="inputEmail4" className="form-label fw-bold">
              TO
            </label>
            <Form.Item
              // name={`user_to${index}`}
              name={"user_to"}
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
            {/* <AiFillPlusCircle size={25} onClick={handleAdd}/> */}
          </div>
          {/* ))} */}
          <div
            className="col-md-2 col-sm-6 col-12"
            // className={
            //   tripType === "oneWay" ? "col-md-3" : "col-md-2 col-sm-6 col-12"
            // }
          >
            <label htmlFor="inputEmail4" className="form-label fw-bold">
              PICK UP
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
                disabledDate={(current) =>
                  current && current < moment(today).startOf("day")
                }
              />
            </Form.Item>
          </div>
          {/* {tripType === "roundTrip" && ( */}
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
                  className="form-control border-0 border-bottom rounded-0"
                  disabledDate={(current) =>
                    current && current < moment(today).startOf("day")
                  }
                />
              </Form.Item>
            </div>
          {/* )} */}
          <div
          className="col-md-2 col-sm-6 col-12"
          >
            <label htmlFor="inputEmail4" className="form-label fw-bold">
              PICK UP AT
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
              <Select
                className="form-control border-0 rounded-0"
                placeholder="Pick up time"
              >
                {generateTimeOptions().map((timeOption) => (
                  <Option key={timeOption} value={timeOption}>
                    {timeOption}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            {/* <Form.Item
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
            </Form.Item> */}
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
              Search Cabs
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}