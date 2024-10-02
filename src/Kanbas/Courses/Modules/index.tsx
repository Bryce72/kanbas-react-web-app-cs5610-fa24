import React from 'react';
import ModulesControls from './ModulesControls';
import LessonControlButtons from './LessonControlButtons';
import ModuleControlButtons from './ModuleControlButtons';
import { BsGripVertical } from 'react-icons/bs';

export default function Modules() {
  return (
    <div className="container-fluid px-0"> 
      <div className="row mb-4">
        <div className="col-12">  
          <ModulesControls />
        </div>
      </div>
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <div>
              <BsGripVertical className="me-2 fs-3" />
              Week 1
            </div>
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                Introduction to the course
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                Learn what is Web Development
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                LESSON 1
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                LESSON 2
              </div>
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
