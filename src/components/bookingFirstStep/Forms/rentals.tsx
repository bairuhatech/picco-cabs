import React, { useEffect, useState } from "react";
import classes from "../index.module.scss";
import axios from "axios";
import { Select } from "antd";
export default function Rentals() {
  const [data, setData] = useState([]);

  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [packages, setPackages] = useState<any>([
    { value: "one_hour", label: "One Hr(10Km)", hours: 1, kms: 10 },
    { value: "two_hour", label: "Two Hr(20Km)", hours: 2, kms: 20 },
    { value: "four_hour", label: "Four Hr(40Km)", hours: 4, kms: 40 },
    { value: "five_hour", label: "Five Hr(50Km)", hours: 5, kms: 100 },
    { value: "six_hour", label: "Six Hr(60Km)", hours: 6, kms: 200 },
    { value: "eight_hour", label: "Eight Hr(80Km)", hours: 8, kms: 40 },
    { value: "ten_hour", label: "Ten Hr(100Km)", hours: 10, kms: 800 },
    { value: "custom_package", label: "Customize your own Package" },
  ]);

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

  const handleFromChange = (value: any) => {
    console.log("Selected value:", value);
    const packageDetails: any = packages.find(
      (pkg: any) => pkg.value === value
    );

    setSelectedPackage(packageDetails);
  };

  const handleSubmit = async () => {
    if (!selectedPackage) {
      console.log("No package selected.");
      return;
    }

    const requestBody = {
      userId: 1,
      bookType: "outstations",
      tripStatus: "",
      pickUpDate: "2023-08-01T12:00:00Z",
      dropOffDate: "2023-08-02T12:00:00Z",
      pickUpLat: 37.7749,
      pickUpLng: -122.4194,
      pickUpLoc: "",
      dropOffLat: 37.7749,
      dropOffLng: -122.4194,
      dropOffLoc: "",
      pickUpTime: 12,
      hours: selectedPackage.hours,
      kms: selectedPackage.kms,
      estimatedAmt: 50.5,
      rentallPack: 1,
      car: 1,
      comments: "",
      adminStatus: "roaming",
      status: "pending",
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/Booking/booking",
        requestBody
      );

      console.log("API Response:", response.data);

      // Handle success or any further actions
    } catch (error) {
      console.error("Error:", error);

      // Handle error
    }
  };
  return (
    <div className="mt-3">
      <form action="">
        <div className="row mx-0 gy-3">
          <div className="col-md-6 col-12">
            <label htmlFor="inputEmail4" className="form-label fw-bold">
              FROM
            </label>
            <input
              type="text"
              className="form-control border-0 border-bottom rounded-0"
              placeholder="Start typing City"
              aria-label="First name"
            />
          </div>
          <div className="col-md-6 col-12">
            <label htmlFor="inputState" className="form-label fw-bold">
              SELECT PACKAGE
            </label>
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
          </div>
        </div>
        <div className="d-flex justify-content-center position-relative">
          <button
            className={`text-uppercase btn btn-success px-5 fw-bold position-absolute ${classes["btn-explore-cabs"]} `}
            onClick={handleSubmit}
          >
            Explore Cabs
          </button>
        </div>
      </form>
    </div>
  );
}
