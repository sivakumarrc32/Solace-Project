import React from "react";
import "./Dashboard.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
    const tableData = [
      { id: "INSP - 10245", property: "Greenview apartme...", agent: "Bluenest reality", inspector: "John Mathews", status: "Pending", updated: "2 mins ago", color: "#fff3cd", text: "#856404" },
      { id: "INSP - 10244", property: "Palm residency - Villa", agent: "Urbankey estates", inspector: "Sarah collins", status: "Assigned", updated: "1 hour ago", color: "#cfe2ff", text: "#084298" },
      { id: "INSP - 10243", property: "Lakeview towers", agent: "Bluenest reality", inspector: "Mark robinson", status: "Active", updated: "Today, 11:30 AM", color: "#e2e3e5", text: "#41464b" },
      { id: "INSP - 10242", property: "Maple street house", agent: "Primelet agents", inspector: "Emma watson", status: "Completed", updated: "2 days ago", color: "#d1e7dd", text: "#0f5132" },
    ];


  
    return (
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-md-2 sidebar">
            <h3 className="mb-5 d-flex align-items-center">
               <img src="/image.png" alt="logo" width="40px" height="40px" /> Solace
            </h3>
            <nav className="nav flex-column">
              <a className="nav-link active mb-2 " href="#"><i class="bx bx-grid"></i> Dashboard</a>
              <a className="nav-link mb-2" href="#"><i className="bi bi-people me-2"></i> Agents</a>
              <a className="nav-link mb-2" href="#"><i className="bi bi-person-badge me-2"></i> Inspectors</a>
              <a className="nav-link mb-2" href="#"><i className="bi bi-building me-2"></i> Properties</a>
              <a className="nav-link mb-2" href="#"><i className="bi bi-clipboard-check me-2"></i> Inspections</a>
            </nav>
          </div>
  
          <div className="col-md-10 p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <input type="text" className="form-control w-25 shadow-sm border-0" placeholder="Search agents..." />
              <div className="d-flex align-items-center">
                <div className="bg-white p-2 rounded shadow-sm me-3"></div>
                <div className="d-flex align-items-center bg-white p-2 rounded shadow-sm">
                  <div className="rounded-circle">
                    <img src="/Admin.jpg" className="rounded-circle me-3 adminImg" width="40px" height="40px" alt="admin" />
                  </div>
                  <div>
                    <p className="mb-0 fw-bold small">Dinesh Karthick</p>
                    <small className="text-muted">Admin</small>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="row g-3 mb-5">
              {[ 
                { label: "Total Clients", val: 200, color: "#28a745" },
                { label: "Total Properties", val: 10, color: "#28a745" },
                { label: "Total Inspections", val: 2, color: "#dc3545" },
                { label: "Pending", val: 2, color: "#ffc107" },
                { label: "Closed", val: 10, color: "#ffc107" }
              ].map((stat, i) => (
                <div className="col" key={i}>
                  <div className="stat-card shadow-sm bg-white">
                    <small className="text-muted">{stat.label}</small>
                    <h2 className="fw-bold mt-2">{stat.val}</h2>
                    <div className="border-indicator" style={{ backgroundColor: stat.color }}></div>
                  </div>
                </div>
              ))}
            </div>
  
            <h5 className="mb-3 fw-bold">Quick actions</h5>
            <div className="row g-3 mb-5">
              {["Create Inspection", "Add Property", "Add Agent", "Add Inspector"].map((action, i) => (
                <div className="col-md-3" key={i}>
                  <div className="action-card shadow-sm">
                    <div className="fs-3 text-muted mb-2">+</div>
                    <p className="mb-0 text-muted">{action}</p>
                  </div>
                </div>
              ))}
            </div>
  
            <div className="table-container shadow-sm">
              <h5 className="fw-bold mb-4">Recent Activity</h5>
              <table className="table custom-table">
                <thead>
                  <tr>
                    <th>Inspection ID</th>
                    <th>Property</th>
                    <th>Agent</th>
                    <th>Inspector</th>
                    <th>Status</th>
                    <th>Last Updated</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, i) => (
                    <tr key={i} className="align-middle">
                      <td className="text-muted">{row.id}</td>
                      <td>{row.property}</td>
                      <td>{row.agent}</td>
                      <td>{row.inspector}</td>
                      <td>
                        <span className="status-badge" style={{ backgroundColor: row.color, color: row.text }}>
                          {row.status}
                        </span>
                      </td>
                      <td className="text-muted">{row.updated}</td>
                      <td><a href="#" className="text-decoration-none small">View</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Dashboard;
