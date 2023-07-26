import React from "react";
import classes from "../index.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "antd";

export default function OneWay() {
  const navigate = useNavigate();
  const currTime = new Date();
  currTime.setDate(currTime.getDate());
  var date = currTime.toISOString().substring(0, 10);
  const onFinish = (values: any) => {
    console.log("Form values:", values);
  };
  const time = currTime
    .getHours()
    .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
  const minute = currTime
    .getMinutes()
    .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
  return (
    <div className="mt-3">
      <Form action="" onFinish={onFinish}>
        <div className="row mx-0 gy-3">
          <Form.Item
            className="col-md-3 col-sm-6 col-12"
            name="from"
            // rules={[
            //   { required: true, message: "Please enter the starting city!" },
            // ]}
          >
            <label htmlFor="inputEmail4" className="form-label fw-bold">
              FROM
            </label>
            <input
              type="text"
              className="form-control border-0 border-bottom rounded-0"
              placeholder="Start typing City"
              aria-label="First name"
            />
          </Form.Item>
          <Form.Item
            className="col-md-3 col-sm-6 col-12"
            name="to"
            // rules={[
            //   {
            //     required: true,
            //     message: "Please enter the destination city!",
            //   },
            // ]}
          >
            <label htmlFor="inputEmail4" className="form-label fw-bold">
              TO
            </label>
            <input
              type="text"
              className="form-control border-0  border-bottom rounded-0"
              placeholder="Start typing City"
              aria-label="Last name"
            />
          </Form.Item>
          <Form.Item
            className="col-md-3 col-6"
            name="pickupDate"
            // rules={[
            //   { required: true, message: "Please select a pick-up date!" },
            // ]}
          >
            <label htmlFor="inputEmail4" className="form-label fw-bold">
              PICK UP
            </label>
            <input
              type="date"
              className="form-control border-0  border-bottom rounded-0"
              placeholder="Pick up date"
              aria-label="Last name"
              defaultValue={date}
            />
          </Form.Item>
          <Form.Item
            className="col-md-3 col-6"
            name="pickupTime"
            // rules={[
            //   { required: true, message: "Please select a pick-up time!" },
            // ]}
          >
            <label htmlFor="inputEmail4" className="form-label fw-bold">
              PICK UP AT
            </label>
            <input
              type="time"
              className="form-control border-0  border-bottom rounded-0"
              defaultValue={`${time}:${minute}`}
              placeholder="Pick up time"
              aria-label="Last name"
            />
          </Form.Item>
        </div>
        <div className="d-flex justify-content-center position-relative">
          <Button
            // onClick={() => navigate("bookingSecondStep")}
            type="primary"
            htmlType="submit"
            className={`text-uppercase btn btn-success px-5 fw-bold position-absolute ${classes["btn-explore-cabs"]} ${classes["btn-primary"]}`}
          >
            Explore Cabs
          </Button>
        </div>
      </Form>
    </div>

    //<Form />//
  );
}

// import React from "react";
// import classes from "../index.module.scss";
// import { Link, useNavigate } from "react-router-dom";
// import { Form, Input, DatePicker, TimePicker, Button } from "antd";

// export default function OneWay() {
//   const navigate = useNavigate();
//   const currTime = new Date();
//   currTime.setDate(currTime.getDate());
//   var date = currTime.toISOString().substring(0, 10);
// const onFinish = (values: any) => {
//   console.log("Form values:", values);
//   // Perform any actions with the form data here
// };
//   const time = currTime
//     .getHours()
//     .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
//   const minute = currTime
//     .getMinutes()
//     .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
//   return (
//     <div className="mt-3">
// <Form onFinish={onFinish}>
//         <div className="row mx-0 gy-3">
//           <div className="col-md-3 col-sm-6 col-12">
// <Form.Item
//   label="FROM"
//   name="from"
//   rules={[
//     { required: true, message: "Please enter the starting city!" },
//   ]}
// >
//               <Input placeholder="Start typing City" />
//             </Form.Item>
//           </div>
//           <div className="col-md-3 col-sm-6 col-12">
// <Form.Item
//   label="TO"
//   name="to"
//   rules={[
//     {
//       required: true,
//       message: "Please enter the destination city!",
//     },
//   ]}
// >
//               <Input placeholder="Start typing City" />
//             </Form.Item>
//           </div>
//           <div className="col-md-3 col-6">
// <Form.Item
//   label="PICK UP"
//   name="pickupDate"
//   rules={[
//     { required: true, message: "Please select a pick-up date!" },
//   ]}
// >
//               <DatePicker style={{ width: "100%" }} />
//             </Form.Item>
//           </div>
//           <div className="col-md-3 col-6">
// <Form.Item
//   label="PICK UP AT"
//   name="pickupTime"
//   rules={[
//     { required: true, message: "Please select a pick-up time!" },
//   ]}
// >
//               <TimePicker style={{ width: "100%" }} />
//             </Form.Item>
//           </div>
//         </div>
//         <div className="d-flex justify-content-center position-relative">
//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               Explore Cabs
//             </Button>
//           </Form.Item>
//         </div>
//       </Form>
//     </div>

//     //<Form />//
//   );
