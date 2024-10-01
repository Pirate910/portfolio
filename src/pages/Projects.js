import { useState, useEffect } from 'react';
import Project from '../components/project/Project';
import {projects} from '../helpers/projectsList';
import { useParams } from 'react-router-dom';
import Pagination from './../components/pagination/pagination.js';


const Projects = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);


  const lastPostIndex = (currentPage + 1) * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  // projects.slice(firstPostIndex, lastPostIndex)
  const currentPosts = projects.slice(firstPostIndex, lastPostIndex);

  return ( 
    <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">

                {currentPosts.map((project, index) =>{

                  return <Project
                   key={index} 
                   title ={project.title} 
                   img={project.img}
                   index={index}
                   />
                  
                }
                
                )} 

            </ul>

            <Pagination 
            totalPosts={projects.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            />

            {console.log(currentPage)}



        </div>
    </main>
   );


}
 
export default Projects;