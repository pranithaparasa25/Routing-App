import { Link, Outlet } from "react-router-dom";
import Categories from "./Categories";
function App(){
  return(
    <div className="border border-3 border-success m-5 p-3">
          <div id="nav">
      <ul>
        <li><Link to={"/home"}>Home</Link></li>
        <li><Link to={"/aboutus"}>About Us</Link></li>
        <li><Link to={"/courses"}>Courses</Link></li>
      </ul>
    </div>
    <Categories></Categories>
    <div>
      <Outlet></Outlet>
    </div>
    </div>
  )
}
export default App;
