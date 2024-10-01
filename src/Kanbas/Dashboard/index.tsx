import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-4 row-cols-sm-3 row-cols-xs-2 g-4">
          <div className="wd-dashboard-course col" style={{ width: "260px", marginBottom: "35px" }}>
            <div className="card rounded-3 overflow-hidden" style={{ height: "100%" }}>
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/reactlogo.jpg" alt="react" width="100%" height={160} style={{ objectFit: 'cover' }}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1234 React JS</h5>
                  <p className="wd-dashboard-course-title card-text">Full Stack software developer</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "260px", marginBottom: "35px" }}>
            <div className="card rounded-3 overflow-hidden" style={{ height: "100%" }}>
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/nmap/Home">
                <img src="/images/nmap.jpg" alt="nmap" width="100%" height={160} style={{ objectFit: 'cover' }}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CY5610 NMAP</h5>
                  <p className="wd-dashboard-course-title card-text">Network Security</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "260px", marginBottom: "35px" }}>
            <div className="card rounded-3 overflow-hidden" style={{ height: "100%" }}>
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/ghidra/Home">
                <img src="/images/ghidra.jpg" alt="ghidra" width="100%" height={160} style={{ objectFit: 'cover' }}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CY7777 Ghidra</h5>
                  <p className="wd-dashboard-course-title card-text">Malware Analysis</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "260px", marginBottom: "35px" }}>
            <div className="card rounded-3 overflow-hidden" style={{ height: "100%" }}>
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/burpsuite/Home">
                <img src="/images/burpsuite.jpg" alt="burpsuite" width="100%" height={160} style={{ objectFit: 'cover' }}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CY2222 BurpSuite</h5>
                  <p className="wd-dashboard-course-title card-text">Web Vulnerability Assessment and Testing</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "260px", marginBottom: "35px" }}>
            <div className="card rounded-3 overflow-hidden" style={{ height: "100%" }}>
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/assemblycode/Home">
                <img src="/images/assemblyCode.jpg" alt="assembly" width="100%" height={160} style={{ objectFit: 'cover' }}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CY9999 Assembly</h5>
                  <p className="wd-dashboard-course-title card-text">Basic Assembly Code</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "260px", marginBottom: "35px" }}>
            <div className="card rounded-3 overflow-hidden" style={{ height: "100%" }}>
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/ethicalhacking/Home">
                <img src="/images/ethicalhacking.jpg" alt="ethicalhacking" width="100%" height={160} style={{ objectFit: 'cover' }}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CY1111 Ethics</h5>
                  <p className="wd-dashboard-course-title card-text">Ethical Hacking</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "260px", marginBottom: "35px" }}>
            <div className="card rounded-3 overflow-hidden" style={{ height: "100%" }}>
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/oopjava/Home">
                <img src="/images/java.jpg" alt="java" width="100%" height={160} style={{ objectFit: 'cover' }}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS3333 Java</h5>
                  <p className="wd-dashboard-course-title card-text">Object Oriented Programming</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
