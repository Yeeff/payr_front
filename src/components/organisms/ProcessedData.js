import React from 'react';

function ProcessedData({ data }) {
  return (
    <div className="mt-4">
      <h5>Processed Data:</h5>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>User</th>
            <th>Surcharge Hours</th>
            <th>Overtime Hours</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.surchargeHours}</td>
              <td>{user.overtimeHours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProcessedData;
