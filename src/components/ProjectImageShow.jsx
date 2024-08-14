import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import DefaultImg from "./../assets/images/gallery-img-3.png";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

function ProjectImageShow({ data }) {
  const [selectedTab, setSelectedTab] = useState('images'); // Default to 'images' tab
  const [open, setOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null); // Track the selected media (image or video)
  const [mediaType, setMediaType] = useState('image'); // Track the type of media

  const { search } = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(search);
  const project = queryParams.get('project');
  const tab = queryParams.get('tab') || 'images'; // Default tab to 'images' if not provided
  const mediaId = queryParams.get('mediaId'); // Query param for media ID

  // Find the project data based on the project id
  const selectedProject = data[project];

  useEffect(() => {
    if (project && selectedProject) {
      // If tab is not provided, update the URL with default tab
      if (!tab) {
        navigate(`?project=${project}&tab=images`);
      } else {
        setSelectedTab(tab);
      }
    }
  }, [project, selectedProject, tab, navigate]);

  useEffect(() => {
    // Automatically open modal if mediaId is present in URL
    if (mediaId && selectedProject) {
      const media = selectedProject[tab].find((item, index) => index.toString() === mediaId);
      if (media) {
        setSelectedMedia(media);
        setMediaType(tab === 'images' ? 'image' : 'video');
        setOpen(true);
      }
    }
  }, [mediaId, selectedProject, tab]);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    // Update the URL with the selected tab
    navigate(`?project=${project}&tab=${tab}`);
  };

  const handleMediaClick = (media, type, index) => {
    setSelectedMedia(media);
    setMediaType(type);
    setOpen(true);
    navigate(`?project=${project}&tab=${selectedTab}&mediaId=${index}`); // Update URL with media ID
  };

  const onCloseModal = () => {
    setOpen(false);
    setSelectedMedia(null); // Reset the selected media when the modal closes
    navigate(`?project=${project}&tab=${selectedTab}`); // Remove mediaId from URL when modal closes
  };

  return (
    <div className='p-4 m-28'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-5xl'>title<span className='text-red-600'>.</span> project 0{project}</h1>
        <p className='font-light'>date<span className='text-red-600'>.</span> 2035</p>
        <p className='font-light'>city<span className='text-red-600'>.</span> New York</p>
        <p className='font-light mb-2'>size<span className='text-red-600'>.</span> mural painting 1000m x 200m</p>
      </div>

      <div className='border-b-2 border-gray-300 mb-4'>
        <div className='flex items-center gap-3'>
          {/* Images Tab */}
          <button
            className={`py-2 px-6 text-lg font-semibold ${selectedTab === 'images' ? 'text-white bg-[#993717] border-b-4 border-[#993717]' : 'text-gray-600 hover:bg-gray-100'} rounded-sm transition duration-300 ease-in-out`}
            onClick={() => handleTabChange('images')}
          >
            Images
          </button>

          {/* Videos Tab */}
          <button
            className={`py-2 px-6 text-lg font-semibold ${selectedTab === 'videos' ? 'text-white bg-[#993717] border-b-4 border-[#993717]' : 'text-gray-600 hover:bg-gray-100'} rounded-sm transition duration-300 ease-in-out`}
            onClick={() => handleTabChange('videos')}
          >
            Videos
          </button>
        </div>
      </div>

      <div className='content grid gap-4 min-h-[400px]'> {/* Added min-height */}
        {selectedTab === 'images' && selectedProject?.images?.length > 0 ? (
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {selectedProject.images.map((img, index) => (
              <div key={index} className='w-52 h-52' onClick={() => handleMediaClick(img, 'image', index)}>
                <img
                  src={img.image_url || DefaultImg}
                  alt={img.title || 'Image'}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        ) : selectedTab === 'images' ? (
          <p>No images available for this project.</p>
        ) : null}

        {selectedTab === 'videos' && selectedProject?.videos?.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {selectedProject.videos.map((video, index) => (
              <div key={index} className='w-full h-60' onClick={() => handleMediaClick(video, 'video', index)}>
                <video
                  src={video.video_url}
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        ) : selectedTab === 'videos' ? (
          <p>No videos available for this project.</p>
        ) : null}
      </div>

      {/* Modal for Media Preview */}
      {selectedMedia && (
        <Modal 
          open={open} 
          onClose={onCloseModal} 
          center 
          closeIcon={<span style={{ color: 'white' }}>×</span>}
          styles={{
            modal: {
              padding: 0, // Remove padding to eliminate white space
              backgroundColor: 'black', // Set background color to black to blend with media
            },
          }}
        >
          {mediaType === 'image' ? (
            <img
              src={selectedMedia.image_url || DefaultImg}
              alt={selectedMedia.title || 'Image'}
              className="w-full h-full object-cover" // Ensure full width and height without borders
            />
          ) : (
            <video
              src={selectedMedia.video_url}
              controls
              className="w-full h-full object-cover" // Ensure full width and height without borders
            >
              Your browser does not support the video tag.
            </video>
          )}
        </Modal>
      )}
    </div>
  );
}

ProjectImageShow.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          image_url: PropTypes.string.isRequired,
          title: PropTypes.string,
        })
      ),
      videos: PropTypes.arrayOf(
        PropTypes.shape({
          video_url: PropTypes.string.isRequired,
          title: PropTypes.string,
        })
      ),
      url: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

export default ProjectImageShow;
