import { table } from "console";

const BookingTableData = [
  {
    id: 1,
    book_type: "OneWay",
    status: "done",
    book_category: "Roundtrip",
    pickup: "pickupLocation",
    drop: "dropingLoc",
    Driver: "Driver",
    hrs: "12:00",
    kms: "300",
    amount: "2000",
    pack: "1hr",
    car: "picco mini",
    comments: "good service",
    created_at: "20/12/2022",
    user: "Sathish",
  },
  {
    id: 2,
    book_type: "OneWay",
    status: "done",
    book_category: "Roundtrip",
    pickup: "pickupLocation",
    drop: "dropingLoc",
    Driver: "Driver",
    hrs: "6:00",
    kms: "500",
    amount: "5000",
    pack: "3hr",
    car: "picco sedan",
    comments: "good service",
    created_at: "20/4/2022",
    user: "Sarath",
  },
];

const Bookings = () => {
  return (
    <div className="table-responsive">
      <h2 className="py-3 ps-2">Bookings</h2>
      <table className="table table-striped align-self-start table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Status</th>
            <th scope="col">Book Type</th>
            <th scope="col">One Way/RoundTrip</th>
            <th scope="col">Pickup</th>
            <th scope="col">Drop</th>
            <th scope="Col">Driver</th>
            <th scope="col">Hrs</th>
            <th scope="col">Kms</th>
            <th scope="col">Estimated Amount</th>
            <th scope="col">Pack</th>
            <th scope="col">Car</th>
            <th scope="col">Comments</th>
            <th scope="col">Created At</th>
            <th scope="col">User</th>
          </tr>
        </thead>
        <tbody>
          {BookingTableData.map((item: any) => {
            return (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.status}</td>
                <td>{item.book_type}</td>
                <td>{item.book_category}</td>
                <td>{item.pickup}</td>
                <td>{item.drop}</td>
                <td>{item.Driver}</td>
                <td>{item.hrs}</td>
                <td>{item.kms}</td>
                <td>{item.amount}</td>
                <td>{item.pack}</td>
                <td>{item.car}</td>
                <td>{item.comments}</td>
                <td>{item.created_at}</td>
                <td>{item.user}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
