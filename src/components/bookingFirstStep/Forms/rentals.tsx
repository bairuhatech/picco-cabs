import React, { useEffect, useState } from "react";
import classes from "../index.module.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Select, Form, Button, Input } from "antd";

export default function Rentals(props: any) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [packages, setPackages] = useState<any>([
    { value: "one_hour", label: "1 Hr(10Km)", hours: 1, kms: 10 },
    { value: "two_hour", label: "2 Hr(20Km)", hours: 2, kms: 20 },
    { value: "four_hour", label: "4 Hr(40Km)", hours: 4, kms: 40 },
    { value: "five_hour", label: "5 Hr(50Km)", hours: 5, kms: 100 },
    { value: "six_hour", label: "6 Hr(60Km)", hours: 6, kms: 200 },
    { value: "eight_hour", label: "8 Hr(80Km)", hours: 8, kms: 40 },
    { value: "ten_hour", label: "10 Hr(100Km)", hours: 10, kms: 800 },
    { value: "custom_package", label: "Customize your own Package" },
  ]);

  const handleFromChange = (value: any) => {
    console.log("Selected value:", value);
    const packageDetails: any = packages.find(
      (pkg: any) => pkg.value === value
    );

    setSelectedPackage(packageDetails);
  };

  const onFinish = async (val: any) => {
    // const { user_from, user_to, dateRange, timeRange } = val;

    const Package = selectedPackage;
    // const timeOfPickup = timeRange;
    const modesecond = props.types;

    const RentPlace = val.rentalPlace;
    console.log("enteringggggggggggggggggg", RentPlace);
    console.log(modesecond);
    navigate("/bookingSecondStep", {
      state: {
        Package,
        modesecond,
        RentPlace,
      },
    });
  };

  return (
    <div className="mt-3">
      {/* <form action=""> */}
      <Form form={form} onFinish={onFinish}>
        <div className="row mx-0 gy-3">
          <div className="col-md-6 col-12">
            <label htmlFor="inputEmail4" className="form-label fw-bold">
              FROM
            </label>
            <Form.Item name="rentalPlace">
              <Input
                type="text"
                className="form-control border-0 border-bottom rounded-0"
                placeholder="Start typing City"
                aria-label="First name"
              />
            </Form.Item>
          </div>
          <div className="col-md-6 col-12">
            <Form.Item name="place">
              <label htmlFor="inputState" className="form-label fw-bold">
                SELECT PACKAGE
              </label>
              <br />
              <Select
                className="CustonSelect"
                showSearch
                defaultActiveFirstOption={false}
                placeholder={"Select Package"}
                suffixIcon={null}
                filterOption={false}
                onChange={handleFromChange}
                notFoundContent={null}
                options={packages.map((pkg: any) => ({
                  value: pkg.value,
                  label: pkg.label,
                }))}
              />
            </Form.Item>
          </div>
        </div>
        <div className="d-flex justify-content-center position-relative">
         <Form.Item
            style={{ width: "100%", display: "flex", justifyContent: "center", position: "absolute", }}
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
              }}
             htmlType={"submit"}>Explore Cabs</Button>
          </Form.Item>
        </div>
      </Form>
      {/* </form> */}
    </div>
  );
}
