import React from 'react';

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      {/* Assignment Name */}
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label"><b>Assignment Name</b></label>
        <input id="wd-name" className="form-control" value="A1 - ENV + HTML" />
      </div>

      {/* Assignment Description */}
      <div className="mb-3">
        <textarea id="wd-description" className="form-control" rows={5}>
          The assignment is available online. Submit a link to the landing page of your Web application running on Netlify.
        </textarea>
      </div>

      {/* Vertical display of Points, Assignment Group, Display Grade, and Submission Type */}
      <div className="mb-3">
        <label htmlFor="wd-points" className="form-label">Points</label>
        <input id="wd-points" className="form-control" value={100} />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-group" className="form-label">Assignment Group</label>
        <select id="wd-group" className="form-control">
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
        <select id="wd-display-grade-as" className="form-control">
          <option value="Percentage">Percentage</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
        <select id="wd-submission-type" className="form-control">
          <option value="Online">Online</option>
        </select>
      </div>

      {/* Box for Submission Type Details */}
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Online Entry Options</h5>
          <div className="form-check">
            <input type="checkbox" id="wd-text-entry" className="form-check-input" />
            <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
          </div>
          <div className="form-check">
            <input type="checkbox" id="wd-website-url" className="form-check-input" checked />
            <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
          </div>
          <div className="form-check">
            <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
            <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
          </div>
          <div className="form-check">
            <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
            <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
          </div>
          <div className="form-check">
            <input type="checkbox" id="wd-file-upload" className="form-check-input" />
            <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
          </div>
        </div>
      </div>

      {/* Box for Assign To, Due Date, and Availability */}
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-12 mb-3">
              <label className="form-label"><b>Assign</b></label>
              <div className="d-flex">
                <div className="flex-grow-1">
                  <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
                  <select id="wd-assign-to" className="form-control">
                    <option value="Everyone">Everyone</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <label htmlFor="wd-due-date" className="form-label">Due</label>
              <input type="datetime-local" id="wd-due-date" className="form-control" defaultValue="2024-05-13T23:59" />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label htmlFor="wd-available-from" className="form-label">Available from</label>
              <input type="datetime-local" id="wd-available-from" className="form-control" defaultValue="2024-05-06T00:00" />
            </div>
            <div className="col-md-6">
              <label htmlFor="wd-available-until" className="form-label">Until</label>
              <input type="datetime-local" id="wd-available-until" className="form-control" />
            </div>
          </div>
        </div>
      </div>

      {/* Save and Cancel Buttons */}
      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}
