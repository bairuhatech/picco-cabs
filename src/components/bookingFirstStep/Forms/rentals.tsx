import React, { useEffect, useState } from "react";
import "../index.module.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Select, Form, Button, Input } from "antd";
import { Option } from "antd/es/mentions";
import { DatePicker } from "antd";
import moment from "moment";
import dayjs from "dayjs";
import { BiTime } from "react-icons/bi";
import API from "../../../config/api";

export default function Rentals(props: any) {
  const [data, setData] = useState([]);
  const today = new Date();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [toPlace, setToPlace] = useState<any>([]);
  const [tripType, setTripType] = useState<"oneWay" | "roundTrip" | "rentals">(
    "rentals"
  );

  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [packages, setPackages] = useState<any>([
    { value: "four_hour", label: "4 Hr(40Km)", hours: 4, kms: 40 },
    { value: "eight_hour", label: "8 Hr(80Km)", hours: 8, kms: 40 },
    { value: "twelve_hour", label: "12 Hr(120Km)", hours: 12, kms: 120 },
  ]);
  const [datePickup, setDatePickup] = useState<any>(new Date());
  const [pickupDateString, setpickupDateString] = useState<any>("");

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

  const handleDateChange = (date: any, d: any) => {
    setDatePickup(date);
    setpickupDateString(d);
  };

  const handlePackageChange = (value: any) => {
    const packageDetails: any = packages.find(
      (pkg: any) => pkg.value === value
    );

    setSelectedPackage(packageDetails);
  };
  const onFinish = async (val: any) => {
    const Package = selectedPackage;

    const { timeRange, dateRange } = val;
    const modesecond = props.types;
    const RentPlace = val.rentalPlace;
    const RentalTime = timeRange;
    const RentalDate = dateRange?.toISOString();

    navigate("/selectCars", {
      state: {
        modesecond,
        RentPlace,
        RentalTime,
        RentalDate,
        tripType,
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

  return (
    // <div className="mt-3">
    //   <Form form={form} onFinish={onFinish}>
    //     <div
    //       className="rental-container mx-0 gy-3"
    //       style={{ display: "flex", justifyContent: "space-evenly" }}
    //     >
    //       <div className="col-md-3 col-12">
    //         <label htmlFor="inputEmail4" className="form-label fw-bold">
    //           FROM
    //         </label>
    //         <Form.Item
    //           name="rentalPlace"
    //           className="fw-bold"
    //           rules={[
    //             {
    //               required: true,
    //               message: "required",
    //             },
    //           ]}
    //         >
    //           <Select
    //             className="CustomSelect"
    //             showSearch
    //             defaultActiveFirstOption={false}
    //             placeholder={"Start Place"}
    //             defaultValue={props?.selectedProps?.place}
    //             suffixIcon={null}
    //             filterOption={false}
    //             onSearch={handleSearch}
    //             onChange={handleFromChange}
    //             notFoundContent={null}
    //             options={filteredOptions.map((d: any) => ({
    //               value: d.place,
    //               label: d.place,
    //             }))}
    //           />
    //         </Form.Item>
    //       </div>

    //       <div className="col-md-3 col-12">
    //         <label htmlFor="inputEmail4" className="form-label fw-bold">
    //           PICK UP
    //         </label>

    //         <Form.Item
    //           name="dateRange"
    //           rules={[
    //             {
    //               required: true,
    //               message: "required",
    //             },
    //           ]}
    //         >
    //           <DatePicker
    //             format="YYYY-MM-DD"
    //             placeholder="Pick up date"
    //             onChange={handleDateChange}
    //             value={datePickup}
    //             // defaultValue={dayjs(props?.selectedDate)}
    //             className="form-control border-0 border-bottom rounded-0"
    //             disabledDate={(current) =>
    //               current && current < moment(today).startOf("day")
    //             }
    //           />
    //         </Form.Item>
    //       </div>
    //       <div className="col-md-3 col-12">
    //         <label htmlFor="inputEmail4" className="form-label fw-bold">
    //           PICK UP AT
    //         </label>
    //         <Form.Item
    //           name="timeRange"
    //           rules={[
    //             {
    //               required: true,
    //               message: "required",
    //             },
    //           ]}
    //         >
    //           <Select
    //             className="form-control border-0 rounded-0"
    //             placeholder="Pick up time"
    //             defaultValue={props.selectedTime}
    //             suffixIcon={<BiTime size={20} />}
    //           >
    //             {generateTimeOptions().map((timeOption) => (
    //               <Option key={timeOption} value={timeOption}>
    //                 {timeOption}
    //               </Option>
    //             ))}
    //           </Select>
    //         </Form.Item>
    //       </div>
    //     </div>
    //     <div className="d-flex justify-content-center position-relative">
    //       <Form.Item
    //         style={{
    //           width: "100%",
    //           display: "flex",
    //           justifyContent: "center",
    //           position: "absolute",
    //         }}
    //       >
    //         <Button
    //           style={{
    //             position: "absolute",
    //             top: "0px",
    //             // right: -50,
    //             left: -100,
    //             backgroundColor: "#198754",
    //             color: "#ffff",
    //             width: "200px",
    //             height: "40px",
    //             outline: "none",
    //             border: "none",
    //             fontWeight: "bold",
    //           }}
    //           htmlType="submit"
    //         >
    //           Search Cabs
    //         </Button>
    //       </Form.Item>
    //     </div>
    //   </Form>
    // </div>
    // <div className="mt-3">
    //   <Form form={form} onFinish={onFinish}>
    //     <div className="rental-container mx-0 gy-3 row">
    //       <div className="col-md-3 col-12">
    //         <label htmlFor="inputEmail4" className="form-label fw-bold">
    //           FROM
    //         </label>
    //         <Form.Item
    //           name="rentalPlace"
    //           className="fw-bold"
    //           rules={[
    //             {
    //               required: true,
    //               message: "required",
    //             },
    //           ]}
    //         >
    //           <Select
    //             className="CustomSelect"
    //             showSearch
    //             defaultActiveFirstOption={false}
    //             placeholder={"Start Place"}
    //             defaultValue={props?.selectedProps?.place}
    //             suffixIcon={null}
    //             filterOption={false}
    //             onSearch={handleSearch}
    //             onChange={handleFromChange}
    //             notFoundContent={null}
    //             options={filteredOptions.map((d: any) => ({
    //               value: d.place,
    //               label: d.place,
    //             }))}
    //           />
    //         </Form.Item>
    //       </div>
    //       <div className="col-md-3 col-12">
    //         <label htmlFor="inputEmail4" className="form-label fw-bold">
    //           PICK UP
    //         </label>
    //         <Form.Item
    //           name="dateRange"
    //           rules={[
    //             {
    //               required: true,
    //               message: "required",
    //             },
    //           ]}
    //         >
    //           <DatePicker
    //             format="YYYY-MM-DD"
    //             placeholder="Pick up date"
    //             onChange={handleDateChange}
    //             value={datePickup}
    //             className="form-control border-0 border-bottom rounded-0"
    //             disabledDate={(current) =>
    //               current && current < moment(today).startOf("day")
    //             }
    //           />
    //         </Form.Item>
    //       </div>
    //       <div className="col-md-3 col-12">
    //         <label htmlFor="inputEmail4" className="form-label fw-bold">
    //           PICK UP AT
    //         </label>
    //         <Form.Item
    //           name="timeRange"
    //           rules={[
    //             {
    //               required: true,
    //               message: "required",
    //             },
    //           ]}
    //         >
    //           <Select
    //             className="form-control border-0 rounded-0"
    //             placeholder="Pick up time"
    //             defaultValue={props.selectedTime}
    //             suffixIcon={<BiTime size={20} />}
    //           >
    //             {generateTimeOptions().map((timeOption) => (
    //               <Option key={timeOption} value={timeOption}>
    //                 {timeOption}
    //               </Option>
    //             ))}
    //           </Select>
    //         </Form.Item>
    //       </div>
    //     </div>
    //     <div className="d-flex justify-content-center position-relative">
    //       <Form.Item
    //         style={{
    //           width: "100%",
    //           display: "flex",
    //           justifyContent: "center",
    //           position: "absolute",
    //         }}
    //       >
    //         <Button
    //           style={{
    //             position: "absolute",
    //             top: "0px",
    //             left: "50%", // Center the button
    //             transform: "translateX(-50%)", // Center the button
    //             backgroundColor: "#198754",
    //             color: "#ffff",
    //             width: "200px",
    //             height: "40px",
    //             outline: "none",
    //             border: "none",
    //             fontWeight: "bold",
    //           }}
    //           htmlType="submit"
    //         >
    //           Search Cabs
    //         </Button>
    //       </Form.Item>
    //     </div>
    //   </Form>
    // </div>
    <div className="mt-3">
      <Form form={form} onFinish={onFinish}>
        <div className="rental-container mx-0 gy-3 row">
          <div className="col-lg-4 col-md-6 col-12 mb-3">
            <label htmlFor="inputEmail4" className="form-label fw-bold">
              FROM
            </label>
            <Form.Item
              name="rentalPlace"
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
          <div className="col-lg-4 col-md-6 col-12 mb-3">
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
                disabledDate={(current) =>
                  current && current < moment(today).startOf("day")
                }
              />
            </Form.Item>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-3">
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
        <div className="d-flex justify-content-center position-relative">
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
                left: "50%", // Center the button
                transform: "translateX(-50%)", // Center the button
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
