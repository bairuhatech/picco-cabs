const Users = () => {
    return (
      <div className="table-responsive w-100">
        <h2 className="py-3 ps-2">Users</h2>
        <table className="table table-striped align-self-start table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">UserName</th>
              <th scope="col">Mobile</th>
              <th scope="col">Email ID</th>
              <th scope="col">Joined In</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Sahal</td>
              <td>743383838394</td>
              <td>sahal@gmail.com</td>
              <td>23/6/2023</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Nihal</td>
              <td>743383838394</td>
              <td>sahal@gmail.com</td>
              <td>23/6/2023</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Rishad</td>
              <td>743383838394</td>
              <td>sahal@gmail.com</td>
              <td>23/6/2023</td>
            </tr>
           
           
          </tbody>
        </table>
      </div>
    );
  };
  export default Users;
  