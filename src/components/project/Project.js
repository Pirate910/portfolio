import { NavLink } from "react-router-dom";
import "./style.css";

const Project = ({img,title, index}) => {
  return ( 
    
        <li className="project">
          <NavLink to={`/projects/project/${index}`}>

             <img src={img} alt={title} className="project__img" />
             <h3 className="project__title">{title}</h3>

          </NavLink>

        </li>
   );
}
 
export default Project;