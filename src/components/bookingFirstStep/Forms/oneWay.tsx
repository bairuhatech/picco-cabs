import React, { useEffect, useState } from "react";
import classes from "../index.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, DatePicker, TimePicker } from "antd";

const { RangePicker } = DatePicker;

export default function OneWay() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const currTime = new Date();

  currTime.setDate(currTime.getDate());
  var date = currTime.toISOString().substring(0, 10);
  const onFinish = async (val: any) => {
    console.log("Form values:", val);
    let data = {
      pickUpLoc: val.user_from,
      dropOffLoc: val.user_to,
      createdAt: val.return_date,
    };
    navigate("bookingSecondStep", { state: { data: data } });
    try {
      const response = await fetch("http://localhost:5500/create_booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Response Data --> ");
      } else {
        console.error("Error:", response);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const time = currTime
    .getHours()
    .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
  const minute = currTime
    .getMinutes()
    .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });

  return (
    <div className="mt-3">
      <Form form={form} onFinish={onFinish}>
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
              htmlType="submit"
              style={{
                width: "100%",
                backgroundColor: "#198754",
                color: "white",
              }}
            >
              Explore Cabs
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

// import { Form, Button } from "antd";

// // Assuming you have the 'onFinish' function defined somewhere
// // function onFinish(values) {
// //   console.log("Form values:", values);
// //   // Perform actions with the form values, e.g., submit the form
// // }

// const date = "2023-07-26"; // example date value
// const time = "12"; // example time value
// const minute = "30"; // example minute value

// const MyForm = () => {
//   return (
//     <Form onFinish={onFinish}>
//       <div className="row mx-0 gy-3">
//         <Form.Item
//           className="col-md-3 col-sm-6 col-12"
//           name="from"
//           rules={[
//             { required: true, message: "Please enter the starting city!" },
//           ]}
//         >
//           <label htmlFor="inputEmail4" className="form-label fw-bold">
//             FROM
//           </label>
//           <input
//             type="text"
//             className="form-control border-0 border-bottom rounded-0"
//             placeholder="Start typing City"
//             aria-label="First name"
//           />
//         </Form.Item>
//         <Form.Item
//           className="col-md-3 col-sm-6 col-12"
//           name="to"
//           rules={[
//             {
//               required: true,
//               message: "Please enter the destination city!",
//             },
//           ]}
//         >
//           <label htmlFor="inputEmail4" className="form-label fw-bold">
//             TO
//           </label>
//           <input
//             type="text"
//             className="form-control border-0 border-bottom rounded-0"
//             placeholder="Start typing City"
//             aria-label="Last name"
//           />
//         </Form.Item>
//         <Form.Item
//           className="col-md-3 col-6"
//           name="pickupDate"
//           rules={[
//             { required: true, message: "Please select a pick-up date!" },
//           ]}
//         >
//           <label htmlFor="inputEmail4" className="form-label fw-bold">
//             PICK UP
//           </label>
//           <input
//             type="date"
//             className="form-control border-0 border-bottom rounded-0"
//             placeholder="Pick up date"
//             aria-label="Last name"
//             defaultValue={date}
//           />
//         </Form.Item>
//         <Form.Item
//           className="col-md-3 col-6"
//           name="pickupTime"
//           rules={[
//             { required: true, message: "Please select a pick-up time!" },
//           ]}
//         >
//           <div className="form-label fw-bold">PICK UP AT</div>
//           <input
// type="time"
//             className="form-control border-0 border-bottom rounded-0"
//             defaultValue={`${time}:${minute}`}
//             placeholder="Pick up time"
//             // aria-label="Last name"
//           />
//         </Form.Item>
//       </div>
//       <div className="d-flex justify-content-center position-relative">
//         <Button
//           // onClick={() => navigate("bookingSecondStep")}
//           type="primary"
//           htmlType="submit"
//           className={`text-uppercase btn btn-success px-5 fw-bold position-absolute ${classes["btn-explore-cabs"]} ${classes["btn-primary"]}`}
//         >
//           Explore Cabs
//         </Button>
//       </div>
//     </Form>
//   );
// };
