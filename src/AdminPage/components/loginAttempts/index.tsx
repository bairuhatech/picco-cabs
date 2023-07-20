const LoginAttempts = () => {
  return (
    <div className="table-responsive w-100">
      <h2 className="py-3 ps-2">Login Attempts</h2>
      <table className="table table-striped align-self-start table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Date and Time</th>
            <th scope="col">Joined In</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>John</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Albert</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
         
        </tbody>
      </table>
    </div>
  );
};
export default LoginAttempts;
