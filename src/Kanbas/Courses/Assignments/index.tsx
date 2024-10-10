import React from 'react';
import { BsGripVertical, BsThreeDotsVertical } from 'react-icons/bs';
import { FaCheckCircle } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';
import { assignments } from '../../Database';

export default function Assignments() {
  const { cid } = useParams(); 
  const courseAssignments = assignments.filter((assignment) => assignment.course === cid);

  return (
    <div className="container-fluid px-0">
      <div className="row mb-4">
        <div className="col-12 d-flex mb-3">
          <input
            id="wd-search-assignment"
            className="form-control me-3"
            placeholder="Search..."
          />
          <button id="wd-add-assignment-group" className="btn btn-outline-secondary me-3">
            + Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger">
            + Assignment
          </button>
        </div>
      </div>

      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment-group list-group-item p-0 mb-4 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-light d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <h5 className="fw-bold mb-0">ASSIGNMENTS</h5>
            </div>
            <div className="d-flex align-items-center">
              <span className="me-2">40% of Total</span>
              <button className="btn btn-light">
                <BsThreeDotsVertical />
              </button>
            </div>
          </div>

          <ul className="wd-assignments-list list-group rounded-0">
            {courseAssignments.map((assignment) => (
              <li
                key={assignment._id}
                className="wd-assignment wd-lesson list-group-item py-3 px-3 d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-3 fs-4" />
                  <div>
                    <Link
                      className="fw-bold text-dark"
                      to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                    >
                      {assignment.title}
                    </Link>
                    <br />
                    <span className="text-muted">Multiple Modules</span> |{' '}
                    <span><b>Not available until</b> May 6 at 12:00am</span>
                    <br />
                    <strong>Due:</strong> May 13 at 11:59pm | 100 pts
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <FaCheckCircle className="text-success fs-4 me-3" />
                  <button className="btn btn-light">
                    <BsThreeDotsVertical />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
