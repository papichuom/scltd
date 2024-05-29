'use client'

import { useState } from 'react';


import Image from 'next/image';

import CareerSection from '@/app/skills/Careers';
import ServiceDetails from './serviceDetails';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';


const skills = [{
  "id": 1,
  "src": "/product-chain-1.png",
  "title":"Environmental & social impact Assessment (ESIA)",
  "description":"we're committed to fostering sustainable development through our expertise in Environmental & Social Impact Assessment (ESIA). Our dedicated team of environmental scientists, social analysts, and sustainability experts work collaboratively to evaluate the potential impacts of proposed projects on the environment and local communities.Through comprehensive assessments, we identify potential risks and opportunities associated with development initiatives, ranging from infrastructure projects to industrial expansions. We meticulously analyze factors such as air and water quality, biodiversity, cultural heritage, and social dynamics to provide a holistic understanding of project impacts.But we don't stop there. Sirecoin goes beyond assessment by offering tailored strategies and solutions to minimize adverse effects and enhance positive outcomes. We engage stakeholders at every stage of the process, fostering transparent dialogue and inclusive decision-making."
  
},
{
  "id": 2,
  "src": "/tag-1.png",
  "title":"Environmental & Social Audits (ESA)",
  "description":"we recognize the critical importance of Environmental & Social Audits (ESA) in today's business landscape. Our ESA services offer a comprehensive evaluation of an organization's environmental and social practices, ensuring alignment with regulatory requirements, industry standards, and stakeholder expectations.Our experienced team of auditors combines technical expertise with a deep understanding of environmental and social issues to conduct thorough assessments tailored to each client's unique needs. We delve into various aspects of operations, including resource management, waste disposal, emissions control, labor practices, community engagement, and human rights compliance.Through meticulous data collection, site inspections, and stakeholder interviews, we identify areas of strength and opportunities for improvement within the organization's environmental and social performance. Our audits not only pinpoint existing risks but also uncover potential future challenges, enabling proactive mitigation strategies.At Sirecoin, we go beyond compliance by providing practical recommendations and actionable insights to help organizations enhance their sustainability efforts. We collaborate closely with our clients to develop tailored action plans that prioritize environmental stewardship, social responsibility, and business resilience."
  
},
{
  "id": 3,
  "src": "/feather-pen-2.png",
  "title":"Project Design,Development and Evaluation",
  "description":"we specialize in guiding projects through every stage of their lifecycle, from inception to evaluation, ensuring their success and sustainability. Our comprehensive Project Design, Development, and Evaluation services are designed to empower organizations to plan, implement, and assess initiatives that deliver positive environmental and social impact.In the initial stage of project design, our team collaborates closely with clients to define objectives, scope, and strategies that align with sustainability principles and stakeholder needs. We conduct thorough research, feasibility studies, and risk assessments to inform decision-making and optimize project outcomes.During the development phase, we provide hands-on support to streamline processes, mobilize resources, and foster collaboration among stakeholders. Whether it's designing sustainable infrastructure, implementing renewable energy projects, or launching community development initiatives, we leverage our expertise to drive innovation and maximize value creation.But our commitment doesn't end there. Sirecoin believes in the importance of ongoing evaluation to ensure accountability, transparency, and continuous improvement. We employ robust monitoring and evaluation frameworks to track project performance, measure outcomes, and identify lessons learned.By integrating sustainability principles into every stage of the project lifecycle, Sirecoin helps organizations achieve their goals while minimizing environmental impact, enhancing social equity, and maximizing long-term value. Together, let's embark on a journey of sustainable development that leaves a lasting legacy for future generations."
  
},
{
  "id": 4,
  "src": "/feather-pen-1.png",
  "title":"Strategic Environmental Assessment (SEA)",
  "description":"we specialize in Strategic Environmental Assessment (SEA), a powerful tool for integrating environmental considerations into strategic decision-making processes. SEA goes beyond project-level assessments to evaluate policies, plans, and programs, ensuring they align with sustainability goals and promote holistic environmental management.Our SEA services are designed to help governments, organizations, and industries navigate complex development challenges while safeguarding environmental integrity and promoting social well-being. We work collaboratively with clients to identify objectives, assess alternatives, and anticipate potential impacts across multiple sectors and scales.During the SEA process, our team conducts comprehensive environmental analyses, considering factors such as land use, biodiversity, water resources, climate change, and socio-economic dynamics. We engage stakeholders at every stage, fostering dialogue, building consensus, and incorporating diverse perspectives into decision-making. By integrating environmental considerations into strategic planning, SEA enables proactive risk management, identifies opportunities for synergy, and promotes sustainable development pathways. Sirecoin's expertise in SEA empowers clients to make informed decisions that balance environmental protection, economic development, and social equity."
  
},
{
  "id": 5,
  "src": "/feather-pen-3.png",
  "title":"OSH management & Business planning",
  "description":"we understand that Occupational Safety and Health (OSH) management is essential for ensuring the well-being of employees and the success of businesses. Our integrated approach combines OSH expertise with strategic business planning to create safe, healthy, and sustainable work environments while maximizing organizational performance.In the realm of OSH management, we offer comprehensive services tailored to meet the unique needs and challenges of each client. Our team conducts thorough risk assessments, identifies hazards, and develops customized safety programs and protocols to mitigate risks and promote a culture of safety.But safety doesn't exist in a vacuum. That's why we integrate OSH considerations into broader business planning processes. Our strategic business planning services help organizations set goals, define strategies, and allocate resources in alignment with OSH objectives and regulatory requirements.We work closely with clients to develop robust business continuity plans, emergency response protocols, and crisis management strategies to ensure resilience in the face of unforeseen events. By embedding OSH principles into business planning, we help organizations enhance operational efficiency, protect human capital, and safeguard reputation and brand value."
  
  
  
  
}]

export default function Services() {
  const [activeTab, setActiveTab] = useState<'research' | 'consulting' | 'innovation'>('consulting'); // Default tab: consulting
  const [selectedService, setSelectedService] = useState<any>(null); // State to hold selected service
  const [showCareerWindow, setShowCareerWindow] = useState(false); // State to control the visibility of Career window

  const handleTabClick = (tab: 'research' | 'consulting' | 'innovation') => {
    setActiveTab(tab);
    setSelectedService(null); // Reset selected service when tab changes
    if (tab === 'innovation') {
      setShowCareerWindow(true); // Show Career window when 'innovation' tab is clicked
      disableScroll(); // Disable scrolling
    } else {
      setShowCareerWindow(false); // Hide Career window for other tabs
      enableScroll(); // Enable scrolling
    }
  };

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setShowCareerWindow(false); // Hide Career window when a service is clicked
    enableScroll(); // Enable scrolling
  };

  const handleCloseCareerWindow = () => {
    setShowCareerWindow(false); // Close Career window
    enableScroll(); // Enable scrolling
    setActiveTab('consulting'); // Return to 'consulting' tab
  };

  // Function to disable scrolling
  const disableScroll = () => {
    document.body.style.overflow = 'hidden'; // Hide scrollbar
  };

  // Function to enable scrolling
  const enableScroll = () => {
    document.body.style.overflow = 'auto'; // Show scrollbar
  };

  return (
    <MaxWidthWrapper>
    <section className="skills--section" id="services">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="skills--section--heading">Our Expertise</h2>
          <div className="tab--container">
            
            
            
          </div>
        </div>
      </div>
      <div className="skills--section--container">
        {activeTab === 'consulting' && skills.map((skill: any) => (
          <div
            key={skill.id}
            className="skills--section--card cursor-pointer" // Add cursor-pointer for hover effect
            onClick={() => handleServiceClick(skill)} // Add onClick handler
          >
            <div className="skills--section--img">
              <Image src={skill.src} alt={skill.title} width={200} height={200} />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{skill.title}</h3>
            </div>
          </div>
        ))}
      </div>
      {selectedService && (
        <ServiceDetails
          service={selectedService}
          onClose={() => setSelectedService(null)} // Add onClose handler to close the ServiceDetails
        />
      )} {/* Render ServiceDetails if a service is selected */}
      {showCareerWindow && <CareerSection onClose={handleCloseCareerWindow} />} {/* Render CareerSection if 'Innovation' tab is active */}
    </section>
    </MaxWidthWrapper>
  );
}
