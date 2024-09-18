export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><b>Assignment Name</b></label><br /> <br />
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">The assignment is available online Submit a link to the landing page of</textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
            {/* Add more to this drop down when I receive more info on what is needed */}
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="Percentage">Percentage</option>
            </select>
            {/* Add more to this drop down when I receive more info on what is needed */}
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="Online">Online</option>
            </select>
            {/* Add more to this drop down when I receive more info on what is needed */}
          </td>
        </tr>
        <tr>

          <label>Online Entry Options</label> <br /> {/* There was no associated tag with the label for this one. Professor error? */}

          <input type="checkbox" id="wd-text-entry" />
          <label htmlFor="wd-text-entry">Text Entry</label><br />

          <input type="checkbox" id="wd-website-url" />
          <label htmlFor="wd-website-url">Website URL</label><br />

          <input type="checkbox" id="wd-media-recordings" />
          <label htmlFor="wd-media-recordings">Media Recordings</label><br />

          <input type="checkbox" id="wd-student-annotation" />
          <label htmlFor="wd-student-annotation">Student Recordings</label><br />

          <input type="checkbox" id="wd-file-upload" />
          <label htmlFor="wd-file-upload">File Uploads</label><br />

        </tr>

        <tr>
          <br />
        </tr>

        <tr>
          <label htmlFor="wd-assign-to">Assign to </label>
          <select id="wd-assign-to">
            <option value="Assign-to">Everyone</option>
          </select>
          {/* Add more to this drop down when I receive more info on what is needed */}
        </tr>

        <tr>
          <br />
        </tr>

        <tr>
          <label htmlFor="wd-due-date">Due </label>
          <input type="date" id="wd-group"></input>
        </tr>

        <tr>
          <br />
        </tr>

        <tr>
          <td>
            <label htmlFor="wd-available-from">Available from</label>
          </td>
          <td>
            <label htmlFor="wd-available-until">Until</label>
          </td>
        </tr>
        <tr>
          <td>
            <input type="date" id="wd-available-from" />
          </td>
          <td>
            <input type="date" id="wd-available-until" />
          </td>
        </tr>

      </table>
      <hr />
      <table>
        <tbody>
          <tr>
            <td align="right">
              <button type="button">Save</button>
            </td>
            <td align="left">
              <button type="button">Cancel</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
