import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactlogo.jpg" alt="react" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"> CS1234 React JS </Link>
            <p className="wd-dashboard-course-title">Full Stack software developer</p>
              <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
            <img src="/images/nmap.jpg" alt="nmap" width={200} />
            <div>
              <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/nmap/Home"> CY5610 NMAP </Link>
              <p className="wd-dashboard-course-title"> Network Security </p>
              <Link to="/Kanbas/Courses/nmap/Home"> Go </Link>
            </div>
        </div>
        <div className="wd-dashboard-course">
            <img src="/images/ghidra.jpg" alt="ghidra" width={200} />
            <div>
              <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/ghidra/Home"> CY7777 Ghidra </Link>
              <p className="wd-dashboard-course-title"> Malware Analysis </p>
              <Link to="/Kanbas/Courses/ghidra/Home"> Go </Link>
            </div>
        </div>
        <div className="wd-dashboard-course">
            <img src="/images/burpsuite.jpg" alt="burpsuite" width={200} />
            <div>
              <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/burpsuite/Home"> CY2222 BurpSuite </Link>
              <p className="wd-dashboard-course-title"> Web Vulnerability Assessment and Testing </p>
              <Link to="/Kanbas/Courses/burpsuite/Home"> Go </Link>
            </div>
        </div>
        <div className="wd-dashboard-course">
            <img src="/images/assemblyCode.jpg" alt="assembly" width={200} />
            <div>
              <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/assemblycode/Home"> CY9999 Assembly </Link>
              <p className="wd-dashboard-course-title"> Basic Assembly Code </p>
              <Link to="/Kanbas/Courses/assemblycode/Home"> Go </Link>
            </div>
        </div>
        <div className="wd-dashboard-course">
            <img src="/images/ethicalhacking.jpg" alt="ethicalhacking" width={200} />
            <div>
              <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/ethicalhacking/Home"> CY1111 Ethics </Link>
              <p className="wd-dashboard-course-title"> Ethical Hacking </p>
              <Link to="/Kanbas/Courses/ethicalhacking/Home"> Go </Link>
            </div>
        </div>
        <div className="wd-dashboard-course"></div>
            <img src="/images/java.jpg" alt="java" width={200} />
            <div>
              <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/oopjava/Home"> CS3333 Java </Link>
              <p className="wd-dashboard-course-title"> Object Oriented Programming </p>
              <Link to="/Kanbas/Courses/oopjava/Home"> Go </Link>
            </div>
      </div>
    </div>
  );
}
