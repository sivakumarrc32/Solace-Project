import React from "react";
import { useState } from "react";
import "./Dashboard.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {

  const [activeTab, setActiveTab] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

    const navItems = [
      { name: "Dashboard", icon: "bx-grid" },
      { name: "Agents", icon: "bx-user" },
      { name: "Inspectors", icon: "bx-user-plus" },
      { name: "Properties", icon: "bx-building" },
      { name: "Inspections", icon: "bx-group" },
      { name: "Reports", icon: "bx-file-report" },
      { name: "Audit Logs", icon: "bx-clipboard-check" },
      { name: "Settings", icon: "bx-cog" },
    ];

    const statsItems =[ 
      { label: "Total Clients", val: 200, color: "#28a745", icon: "bx bx-trending-up statIcon", width: "80%" },
      { label: "Total Properties", val: 10, color: "#28a745", icon: "bx bx-trending-up statIcon", width: "60%" },
      { label: "Total Inspections", val: 2, color: "#dc3545" , icon: "bx bx-trending-down statIcon", width: "40%" },
      { label: "Pending Inspections", val: 2, color: "#ffc107", icon: "bx bx-trending-down statIcon", width: "30%" },
      { label: "Closed Inspections", val: 10, color: "#17a2b8", icon: "bx bx-trending-up statIcon", width: "70%" },
    ]

    const quickActions = [
      { name: "Create Inspection", icon: "bx bx-pencil" },
      { name: "Add Property", icon: "bx bx-plus" },
      { name: "Add Agent", icon: "bx bx-plus" },
      { name: "Add Inspector", icon: "bx bx-plus" },
    ];

    const tableData = [
      { id: "INSP - 10245", property: "Greenview apartment...", agent: "Bluenest reality", inspector: "John Mathews", status: "Pending", updated: "2 mins ago", color: "#fff3cd", text: "#856404" },
      { id: "INSP - 10244", property: "Palm residency - Villa", agent: "Urbankey estates", inspector: "Sarah collins", status: "Assigned", updated: "1 hour ago", color: "#cfe2ff", text: "#084298" },
      { id: "INSP - 10243", property: "Lakeview towers", agent: "Bluenest reality", inspector: "Mark robinson", status: "Active", updated: "Today, 11:30 AM", color: "#e2e3e5", text: "#41464b" },
      { id: "INSP - 10242", property: "Maple street house", agent: "Primelet agents", inspector: "Emma watson", status: "Completed", updated: "2 days ago", color: "#d1e7dd", text: "#0f5132" },
    ];

    return (
      <div className="container-fluid p-0 main-wrapper">
        <div className="mobile-header">
          <div className="mobile-header-content">
            <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle menu">
              <i className="bx bx-menu"></i>
            </button>
            <div className="mobile-profile">
              <img src="/Admin.jpg" alt="Profile" />
            </div>
          </div>
          <div className="mobile-search">
            <div className="searchBar">
              <i className="bx bx-search"></i>
              <input type="text" placeholder="Search agents, inspectors etc" />
            </div>
          </div>
        </div>

        <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)}></div>
        <div className={`sideBarContainer ${sidebarOpen ? 'mobile-open' : ''}`}>
          <div className="sideBar">
            <div className="logo">
              <img src="/image.png" alt="Solace Logo" />
              <h3>Solace</h3>
            </div>
            <hr className="line" />
            <div className="navLinks">
                <nav className="nav flex-column">
                  {navItems.map((item) => (
                    <a href="#" key={item.name} className={`nav-link mb-2 fs-5 ${activeTab === item.name ? "active" : ""}`} 
                      onClick={(e) => { e.preventDefault(); setActiveTab(item.name); setSidebarOpen(false); }}>
                      <i className={`${activeTab === item.name ? `bxf ${item.icon}` : `bx ${item.icon}`}`}></i>
                      <span>{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
        </div>
        
        <div className="mainContent">
          <div className="headContainer mb-3 d-none d-lg-flex">
            <div className="searchBar">
              <i className="bx bx-search"></i>
              <input type="text" placeholder="Search agents, inspectors etc" />
            </div>
            <div className="profile d-flex">
              <div className="notification me-1">
                <i className="bx bx-bell"></i>
              </div>
              <div className="profileCard">
                <img src="/Admin.jpg" alt="Admin" />
                <div className="profileDetails ms-3">
                  <p className="name fw-bold mb-0">Dinesh Karthick</p>
                  <p className="role mb-0">Admin</p>
                </div>
              </div>
            </div>
          </div>

          <div className="statsContainer mb-3">
            <div className="row">
              {statsItems.map((stat, i) => (
                <div className="col-6 col-md-4 col-lg" key={i}>
                  <div className="card">
                    <small className="text-muted">{stat.label}</small>
                    <div className="ratingIcon">
                      <h2 className="fw-bold">{stat.val}</h2>
                      <i className={stat.icon} style={{backgroundColor: stat.color}}></i>
                    </div>
                    <div className="border-indicator-back">
                      <div className="border-indicator" style={{ width: stat.width, backgroundColor: stat.color }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="quickActionContainer mb-3">
            <h5 className="mb-3 fw-bold">Quick actions</h5>
            <div className="row">
              {quickActions.map((action, i) => (
                <div className="col-6 col-md-3" key={i}>
                  <div className="action-card">
                    <div className="quickIcon"><i className={action.icon}></i></div>
                    <p>{action.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="recentActivityContainer">
            <h5 className="mb-3 fw-bold">Recent activity</h5>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Property</th>
                    <th>Agent</th>
                    <th>Inspector</th>
                    <th>Status</th>
                    <th>Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((activity, i) => (
                    <tr key={i}>
                      <td>{activity.id}</td>
                      <td>{activity.property}</td>
                      <td>{activity.agent}</td>
                      <td>{activity.inspector}</td>
                      <td>
                        <span 
                          className="status-pill" 
                          style={{ 
                            backgroundColor: activity.color, 
                            color: activity.text 
                          }}
                        >
                          {activity.status}
                        </span>
                      </td>
                      <td>{activity.updated}</td>
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