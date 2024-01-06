"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
require("../index.module.scss");
var react_router_dom_1 = require("react-router-dom");
var axios_1 = require("axios");
var antd_1 = require("antd");
var mentions_1 = require("antd/es/mentions");
var antd_2 = require("antd");
var moment_1 = require("moment");
var bi_1 = require("react-icons/bi");
function Rentals(props) {
    var _this = this;
    var _a;
    var _b = react_1.useState([]), data = _b[0], setData = _b[1];
    var today = new Date();
    var navigate = react_router_dom_1.useNavigate();
    var form = antd_1.Form.useForm()[0];
    var _c = react_1.useState([]), filteredOptions = _c[0], setFilteredOptions = _c[1];
    var _d = react_1.useState([]), toPlace = _d[0], setToPlace = _d[1];
    var _e = react_1.useState("rentals"), tripType = _e[0], setTripType = _e[1];
    var _f = react_1.useState(null), selectedPackage = _f[0], setSelectedPackage = _f[1];
    var _g = react_1.useState([
        { value: "four_hour", label: "4 Hr(40Km)", hours: 4, kms: 40 },
        { value: "eight_hour", label: "8 Hr(80Km)", hours: 8, kms: 40 },
        { value: "twelve_hour", label: "12 Hr(120Km)", hours: 12, kms: 120 },
    ]), packages = _g[0], setPackages = _g[1];
    var _h = react_1.useState(new Date()), datePickup = _h[0], setDatePickup = _h[1];
    var _j = react_1.useState(""), pickupDateString = _j[0], setpickupDateString = _j[1];
    var generateTimeOptions = function () {
        var _a, _b;
        var minStartTime = moment_1["default"]().add(2, "hours").startOf("hour");
        var endTime = moment_1["default"]("11:45 PM", "hh:mm A");
        var timeOptions = [];
        var selectedStartTime = ((_a = datePickup === null || datePickup === void 0 ? void 0 : datePickup.toISOString()) === null || _a === void 0 ? void 0 : _a.slice(0, -14)) === ((_b = today === null || today === void 0 ? void 0 : today.toISOString()) === null || _b === void 0 ? void 0 : _b.slice(0, -14))
            ? moment_1["default"](minStartTime, "hh:mm A")
            : moment_1["default"]("12:00 AM", "hh:mm A");
        var nextInterval = moment_1["default"](selectedStartTime).add(15 - (selectedStartTime.minute() % 15), "minutes");
        while (nextInterval <= endTime) {
            timeOptions.push(nextInterval.format("hh:mm A"));
            nextInterval.add(15, "minutes");
        }
        return timeOptions;
    };
    var handleDateChange = function (date, d) {
        setDatePickup(date);
        setpickupDateString(d);
    };
    var handlePackageChange = function (value) {
        var packageDetails = packages.find(function (pkg) { return pkg.value === value; });
        setSelectedPackage(packageDetails);
    };
    var onFinish = function (val) { return __awaiter(_this, void 0, void 0, function () {
        var Package, timeRange, dateRange, modesecond, RentPlace, RentalTime, RentalDate;
        return __generator(this, function (_a) {
            Package = selectedPackage;
            timeRange = val.timeRange, dateRange = val.dateRange;
            modesecond = props.types;
            RentPlace = val.rentalPlace;
            RentalTime = timeRange;
            RentalDate = dateRange === null || dateRange === void 0 ? void 0 : dateRange.toISOString();
            navigate("/selectCars", {
                state: {
                    modesecond: modesecond,
                    RentPlace: RentPlace,
                    RentalTime: RentalTime,
                    RentalDate: RentalDate,
                    tripType: tripType
                }
            });
            if (props.onClose) {
                props.onClose();
            }
            return [2 /*return*/];
        });
    }); };
    react_1.useEffect(function () {
        fetchData();
    }, []);
    function fetchData() {
        return __awaiter(this, void 0, void 0, function () {
            var response, listingData, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1["default"].get("https://piccocabs-server-46642b82a774.herokuapp.com/Pickuplocation/location")];
                    case 1:
                        response = _a.sent();
                        setData(response.data);
                        listingData = filterUniqueNames(response.data, "place");
                        setFilteredOptions(listingData);
                        console.log(response.data);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error("Error:", error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    var handleSearch = function (newValue) {
        var filteredData = filteredOptions.filter(function (d) {
            return d.place.toLowerCase().includes(newValue.toLowerCase());
        });
        setFilteredOptions(filteredData);
    };
    var filterUniqueNames = function (arr, contiton) {
        var uniqueNames = {};
        return arr.filter(function (item) {
            if (!uniqueNames[item[contiton]]) {
                uniqueNames[item[contiton]] = true;
                return true;
            }
            return false;
        });
    };
    var handleFromChange = function (newValue) {
        var toPlaces = data.filter(function (item) { return item.place === newValue; });
        var toListing = filterUniqueNames(toPlaces, "location");
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
    react_1["default"].createElement("div", { className: "mt-3" },
        react_1["default"].createElement(antd_1.Form, { form: form, onFinish: onFinish },
            react_1["default"].createElement("div", { className: "rental-container mx-0 gy-3 row" },
                react_1["default"].createElement("div", { className: "col-md-3 col-12" },
                    react_1["default"].createElement("label", { htmlFor: "inputEmail4", className: "form-label fw-bold" }, "FROM"),
                    react_1["default"].createElement(antd_1.Form.Item, { name: "rentalPlace", className: "fw-bold", rules: [
                            {
                                required: true,
                                message: "required"
                            },
                        ] },
                        react_1["default"].createElement(antd_1.Select, { className: "CustomSelect", showSearch: true, defaultActiveFirstOption: false, placeholder: "Start Place", defaultValue: (_a = props === null || props === void 0 ? void 0 : props.selectedProps) === null || _a === void 0 ? void 0 : _a.place, suffixIcon: null, filterOption: false, onSearch: handleSearch, onChange: handleFromChange, notFoundContent: null, options: filteredOptions.map(function (d) { return ({
                                value: d.place,
                                label: d.place
                            }); }) }))),
                react_1["default"].createElement("div", { className: "col-md-3 col-12" },
                    react_1["default"].createElement("label", { htmlFor: "inputEmail4", className: "form-label fw-bold" }, "PICK UP"),
                    react_1["default"].createElement(antd_1.Form.Item, { name: "dateRange", rules: [
                            {
                                required: true,
                                message: "required"
                            },
                        ] },
                        react_1["default"].createElement(antd_2.DatePicker, { format: "YYYY-MM-DD", placeholder: "Pick up date", onChange: handleDateChange, value: datePickup, className: "form-control border-0 border-bottom rounded-0", disabledDate: function (current) {
                                return current && current < moment_1["default"](today).startOf("day");
                            } }))),
                react_1["default"].createElement("div", { className: "col-md-3 col-12" },
                    react_1["default"].createElement("label", { htmlFor: "inputEmail4", className: "form-label fw-bold" }, "PICK UP AT"),
                    react_1["default"].createElement(antd_1.Form.Item, { name: "timeRange", rules: [
                            {
                                required: true,
                                message: "required"
                            },
                        ] },
                        react_1["default"].createElement(antd_1.Select, { className: "form-control border-0 rounded-0", placeholder: "Pick up time", defaultValue: props.selectedTime, suffixIcon: react_1["default"].createElement(bi_1.BiTime, { size: 20 }) }, generateTimeOptions().map(function (timeOption) { return (react_1["default"].createElement(mentions_1.Option, { key: timeOption, value: timeOption }, timeOption)); }))))),
            react_1["default"].createElement("div", { className: "d-flex justify-content-center position-relative" },
                react_1["default"].createElement(antd_1.Form.Item, { style: {
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        position: "absolute"
                    } },
                    react_1["default"].createElement(antd_1.Button, { style: {
                            position: "absolute",
                            top: "0px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            backgroundColor: "#6BB546",
                            color: "#ffff",
                            width: "200px",
                            height: "40px",
                            outline: "none",
                            border: "none",
                            fontWeight: "bold"
                        }, htmlType: "submit" }, "Search Cabs"))))));
}
exports["default"] = Rentals;
