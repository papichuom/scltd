import React from 'react';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CarouselDemo } from './CarouselDemo';


interface Person {
  name: string;
  roleDuringInternship: string;
  currentRole: string;
  duration: string;
}

interface Props {
  onClose: () => void;
}

const CareerSection: React.FC<Props> = ({ onClose }) => {
  

  return (
    <div className="career-section-overlay" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="career-section-content" style={{ width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 className='font-bold text-blue-300 text-3xl mb-2'>Careers & Innovation</h2>
        <button className='career-section__button' onClick={onClose}>Close</button>
        <div style={{ width: '100%', maxWidth: '800px' }}>
          <CarouselDemo />
        </div>
        <div style={{ width: '100%', maxWidth: '800px', marginTop: '20px' }}>
          <div>
            <p>Sirecoin has developed Innovative Approaches that supports Students pursuing various Courses in different Institutions of Higher Learning to access Industry for Research, Attachment and Internship Programme as part of Institutional Curriculum Course Requirement. Through this Innovation Students pursuing Undergraduate Degree Programme in Natural Sciences, Biodiversity Conservation, Environmental Sciences, Natural Resources, Marine, Soil, Water & Environmental Engineering, Renewable Energy, Development and Social Sciences have been placed in various Industry and Projects to bridge the gap between theory and practice as they gain their initial practical experiences. Successful Students have had their field related costs financed. The initiative innovatively supports Early Carrier Researchers pursuing Masters and PhD studies to access limited Industry Support to facilitate field data collection and to attend local conferences, workshops and symposiums to learn and get exposed to best industry practice besides disseminating their research findings. Beneficiaries from this Innovation include Students from Egerton University, Jomo Kenyatta University of Science and Technology (JKUAT), Kenyatta University (KU), Pwani University (PU), Mount Kenya University (MKU) and Kisii University. Eligible Students can apply for consideration.</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CareerSection;
