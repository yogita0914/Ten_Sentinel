import React from 'react';
import content from '../../assets/PhishingSimulation/content.png';

const ContentPage = () =>{
    return(
        <>
        <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-white">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={content}
            alt="Data Privacy"
            className="w-full h-auto md:h-78"
          />
        </div>

        {/* Right side - Text */}
        <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
          <h2 className="text-2xl md:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
           Phishing Simulation for Cybersecurity Awareness
          </h2>
          <p className="text-md md:text-sm lg:text-lg text-gray-700 leading-relaxed">
            Phishing simulations are controlled, mock phishing attacks designed to test and educate users about real-world cyber threats. These simulations help organizations assess employee responses to suspicious emails and improve their ability to detect scams. By replicating common phishing tactics, companies can identify vulnerabilities and provide targeted training. Regular simulations are a proactive step toward building a strong security culture and minimizing the risk of data breaches.
          </p>
        </div>
      </div>
        </>
    )
}
export default ContentPage;