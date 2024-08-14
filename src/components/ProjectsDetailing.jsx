import React, { useEffect, useState } from 'react';
import { useParams, NavLink, useLocation, useNavigate } from 'react-router-dom';
import ProjectImageShow from "./../components/ProjectImageShow";

function ProjectsDetailing() {
  const { id: categoryTypeId } = useParams();
  const [allProjectsOfCategory, setAllProjectsOfCategory] = useState([]); // Projects Selected by Categories
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData(categoryId) {
      try {
        const response = await fetch(`https://shaheerport-c0g6bfhte7afc9ea.eastus-01.azurewebsites.net/api/category/${categoryId}/projects/`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAllProjectsOfCategory(data);

        // If no project is selected, set the default project to the first one
        const queryParams = new URLSearchParams(location.search);
        if (!queryParams.get('project') && data.length > 0) {
          navigate(`?project=0&tab=images`, { replace: true });
        }
      } catch (error) {
        console.error(`Error: ${error.message}`);
      }
    }
    fetchData(categoryTypeId);
  }, [categoryTypeId, location.search, navigate]);

  return (
    <div className="flex items-start justify-start gap-40">
      <div className="side-images-navbar p-2 flex flex-col gap-3">
        {allProjectsOfCategory.map((image, index) => (
          <NavLink key={index} to={`?project=${index}&tab=images`}>
            <img src={image.url} alt={image.description} className="thumbnail w-[5rem] h-[4rem] grayscale object-cover" />
          </NavLink>
        ))}
      </div>
      <ProjectImageShow data={allProjectsOfCategory} />
    </div>
  );
}

export default ProjectsDetailing;
