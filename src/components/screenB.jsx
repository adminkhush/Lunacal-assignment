import React, { useState, useEffect } from 'react';
import questionImage from '../images/Vector.png'; 
import frameImage from '../images/Frame 1000002250.png'; 

const ScreenB = () => {
  const [activeSection, setActiveSection] = useState('aboutMe');
  const [showGallery, setShowGallery] = useState(false);
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Load images from local storage on component mount
  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem('images')) || [];
    setImages(storedImages);
  }, []);

  // Save images to local storage whenever images state changes
  useEffect(() => {
    localStorage.setItem('images', JSON.stringify(images));
  }, [images]);

  // Handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prevImages) => [...prevImages, reader.result]);
      };
      reader.readAsDataURL(file);
    }
    event.target.value = '';
  };
  
  // Go to the previous image
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  // Go to the next image
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  // Show gallery
  const showGalleryContent = () => (
    <div className="flex flex-col">
      {images.length > 0 && (
        <div className="flex items-center justify-center">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-[150px] h-[139px] object-cover  rounded-lg border border-gray-700 m-.5 mr-2 border"
            />
          ))}
        </div>
      )}
    </div>
  );
  

  return (
    <div className="w-full h-full flex flex-col gap-3 ">
      {/* Widget 1 */}
      <div className="w-full h-1/2 bg-custom-black outer-shadow-custom p-3 rounded-xl flex flex-col">
        <div className="flex flex-row">
          <img className='h-[20px] w-[20px] mr-2' src={questionImage} alt="Example" />
          <div className="flex w-full bg-black mb-2 rounded-2xl p-1">
            <button
              className={`flex-1 py-2 rounded-2xl text-white text-center ${
                activeSection === 'aboutMe'
                ? 'border-[#363C43] bg-transparent'
                : 'border-gray-800 bg-transparent'
              }  hover:bg-gray-600`}
              onClick={() => setActiveSection('aboutMe')}
            >
              About Me
            </button>
            <button
              className={`flex-1 py-2 rounded-2xl text-white text-center ${
                activeSection === 'experience'
                ? 'border-[#363C43] bg-transparent'
                : 'border-gray-800 bg-transparent'
              }  hover:bg-gray-600`}
              onClick={() => setActiveSection('experience')}
            >
              Experience
            </button>
            <button
              className={`flex-1 py-2 rounded-2xl text-white text-center ${
                activeSection === 'recommended'
                ? 'border-[#363C43] bg-transparent'
                : 'border-gray-800 bg-transparent'
              }  hover:bg-gray-600`}
              onClick={() => setActiveSection('recommended')}
            >
              Recommended
            </button>
          </div>
        </div>
        {/* Content for Container 1 */}
        <div className="flex-grow p-2 text-font-black  overflow-auto scrollbar-custom">
          <div className="flex flex-row">
            <div className=' w-[140px] h-full mr-2' >
              <img className='h-[20px] w-[20px]  mt-16 ' src={frameImage} alt="Example" />
            </div>
            {activeSection === 'aboutMe' && (
              <div>
                <h2 className="text-lg font-semibold">About Me</h2>
                <p>
                  Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
                </p>
                <p>
                  I was born and raised in Albany, NY and have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. Both are just starting school, so my calendar is usually blocked between 9-10 AM.
                </p>
                <p>
                  Originally from Albany, NY, I relocated to Santa Carla a decade ago. I live here with my wonderful wife Tiffany and our lively 4-year-old twin daughters, Emma and Ella. Both are just starting their journey in school, which keeps our mornings busy and our calendar packed from 9-10 AM. Before joining Salesforce, I spent several years in the sales industry, where I gained valuable experience in various sectors including technology, healthcare, and finance. My role involves not only understanding client needs but also developing tailored strategies that align with their business objectives. This experience has been instrumental in my approach to sales and client relationship management.
                </p>
                <p>
                  Outside of work, I enjoy spending quality time with my family, exploring new places, and indulging in my hobbies, which include hiking and playing the guitar. I am passionate about personal and professional growth and always look forward to learning new things that can enhance my skills and contribute to my role.
                </p>
                <p>
                  I’m excited to be a part of your journey with Salesforce and am committed to providing the best support and solutions tailored to your needs. Feel free to reach out if you have any questions or need assistance—I’m here to help!
                </p>
              </div>
            )}
            {activeSection === 'experience' && (
              <div>
                <h2 className="text-lg font-semibold">Experience</h2>
                <p>
                  Hello! I’m Dave, a seasoned professional with over 8 years in the sales industry. I’ve had the privilege of working with some incredible teams and clients, and I’m passionate about leveraging Salesforce to drive business growth. Prior to joining Salesforce, I honed my skills at [Previous Company Name], where I managed a diverse portfolio and consistently exceeded sales targets. My experience spans various sectors including technology, healthcare, and finance, allowing me to bring a broad perspective to my current role. In my free time, I enjoy mentoring new sales reps and sharing insights that help them excel.
                </p>
              </div>
            )}
            {activeSection === 'recommended' && (
              <div>
                <h2 className="text-lg font-semibold">Recommendation</h2>
                <p>
                  Hi! I’m Dave, and I’d like to share some feedback from those who have worked closely with me. My colleagues and clients have often praised my dedication, strategic approach, and problem-solving skills. At Salesforce, I’ve been fortunate to receive numerous commendations for my ability to understand client needs and deliver tailored solutions that drive success. One notable recommendation came from [Client/Colleague Name], who highlighted my commitment to excellence and ability to exceed expectations in challenging scenarios. I take pride in building lasting relationships and am always striving to provide exceptional value.
                </p>
              </div>
            )}
          </div>        
        </div>
      </div>
      <div class="h-[7px] rounded-2xl bg-custom-gradient mx-7  "></div>

      {/* Widget 2 */}
      <div className="w-full h-1/2 bg-custom-black  outer-shadow-custom p-4 rounded-lg flex flex-col gap-3">
        <div className="flex gap-4 mb-4">
          <img className='h-[20px]' src={questionImage} alt="Example" />
          <button
            className="w-[100px]  px-1 py-2 bg-black text-center text-white rounded-lg hover:bg-gray-600 "
            onClick={() => setShowGallery(!showGallery)}
          >
            Gallery
          </button>
          <label className="text-center w-[120px] ml-80  px-1 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 cursor-pointer ">
            Add Images
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
          <button
            className="px-4 py-2 text-back-right outer-shadow-custom bg-back-right-background rounded-full hover:bg-gray-500 flex items-center"
            onClick={() => setShowGallery(false)}
          >
            <i className="fas fa-arrow-left"></i> 
          </button>
          <button
            className="px-4 py-2 text-back-right outer-shadow-custom bg-back-right-background rounded-full hover:bg-gray-500 flex items-center"
            onClick={() => setShowGallery(false)}  
          >
            <i className="fas fa-arrow-right"></i> 
          </button>
        </div>
        <div className='flex gap-4 mb-4'>
          <img className='h-[20px] w-[20px] ' src={frameImage} alt="Example" />
          {showGallery && showGalleryContent()}
        </div>        
      </div>
      <div class="h-[7px] rounded-2xl bg-custom-gradient mx-7   "></div>
    </div>
  );
};

export default ScreenB

