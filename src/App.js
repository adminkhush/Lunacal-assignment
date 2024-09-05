import React from 'react';
import ScreenA from './components/screenA';
import ScreenB from './components/screenB';

const App = () => {
  return (
    <div className="min-h-screen bg-main flex items-center justify-center">
      <div className="flex flex-col md:flex-row gap-10" style={{ 
        width: 'calc(100% - 60px)', 
        height: 'calc(100vh - 90px)', 
        marginTop: '30px', 
        marginLeft: '30px', 
        marginRight: '30px', 
        marginBottom: '30px' 
      }}>

        {/* Left part: Screen A */}
        <div className="w-full h-full md:w-3/4  bg-custom-gray  rounded-lg">
          <ScreenA />
        </div>

        {/* Right part: Screen B */}
        <div className="w-full h-full md:w-3/4    rounded-lg border-gray-500">
          <ScreenB />
        </div>
      </div>
    </div>
  );
};

export default App;
