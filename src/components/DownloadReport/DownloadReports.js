import React, { useState } from "react";
import "./DownloadReports.css";

const DownloadReport = () => {
  const [reportType, setReportType] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [format, setFormat] = useState("pdf");

  const handleDownload = () => {
    // Here, you can add logic to generate and download the report
    console.log("Downloading report:", reportType, dateRange, format);
  };

  const handleDateRangeChange = (e) => {
    setDateRange(e.target.value);
  };

  const handleFormatChange = (e) => {
    setFormat(e.target.value);
  };

  return (
    <div className="download-report">
      <h2>Download Report</h2>
      <div className="download-report-content">
        <div>
          <label htmlFor="reportType">Report Type:</label>
          <select
            id="reportType"
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
          >
            <option value="">Select report type</option>
            <option value="medical">Medical Report</option>
            <option value="billing">Billing Report</option>
          </select>
        </div>
        <div>
          <label htmlFor="dateRange">Date Range:</label>
          <input
            id="dateRange"
            type="text"
            placeholder="e.g. 01/01/2023 - 31/01/2023"
            value={dateRange}
            onChange={handleDateRangeChange}
          />
        </div>
        <div>
          <label htmlFor="format">File Format:</label>
          <div className="radio-group">
            <div>
              <input
                type="radio"
                id="pdf"
                value="pdf"
                checked={format === "pdf"}
                onChange={handleFormatChange}
              />
              <label htmlFor="pdf">PDF</label>
            </div>
            <div>
              <input
                type="radio"
                id="excel"
                value="excel"
                checked={format === "excel"}
                onChange={handleFormatChange}
              />
              <label htmlFor="excel">Excel</label>
            </div>
          </div>
        </div>
        <button onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
};

export default DownloadReport;
