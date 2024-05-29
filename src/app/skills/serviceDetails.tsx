import React, { useEffect } from 'react';

interface Service {
  title: string;
  description: string;
}

interface Props {
  service: Service;
  onClose: () => void;
}

const ServiceDetails: React.FC<Props> = ({ service, onClose }) => {
  useEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow; // Store original overflow style
    document.body.style.overflow = 'hidden'; // Disable scrolling when ServiceDetails is active

    return () => {
      document.body.style.overflow = originalOverflow; // Re-enable scrolling when unmounting
    };
  }, []);

  return (
    <div className={`service-details active`}>
      <div className="overlay" onClick={onClose}></div> {/* Overlay to close the window when clicked outside */}
      <div className="content">
        <h2 className='font-semibold'>{service.title}</h2>
        <p>{service.description}</p>
        {/* Add more detailed information about the service */}
        <button onClick={onClose} style={buttonStyle}>Close</button> {/* Close button */}
      </div>
    </div>
  );
};

// Define button style
const buttonStyle: React.CSSProperties = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  marginTop: '10px',
};

export default ServiceDetails;
