import Link from 'next/link'
import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

// Update menuData with the new structure
const menuData = {
    Services: [
      {
        name: 'Software Development',
        subItems: [
          'Web Development',
          'Mobile Development',
          'SaaS Platforms',
          'API Integration',
          'Web 3.0',
          'Salesforce Solution',
          'CMS Platforms',
          'Progressive Web Apps (PWAs)',
          'Game Development',
          'Custom Software Development',
          'Cloud Native Application'
        ]
      },
      {
        name: 'Data and Analytics',
        subItems: [
          'Data Visualization',
          'Predictive Analytics',
          'Big Data',
          'Machine Learning',
          'Computer Vision',
          'Data Cleansing',
          'Data Engineering',
          'Data Migration Services',
          'Real-Time Data Processing',
          'AI/ML Algorithm Optimization'
        ]
      },
      {
        name: 'Cloud and DevOps',
        subItems: [
          'Cloud Solutions',
          'Automation Services',
          'CI/CD Pipelines',
          'Kubernetes Management',
          'Docker Containers',
          'Cost Optimization',
          'Disaster Recovery',
          'Serverless Computing',
          'Infrastructure as Code (IaC)',
          'Cloud Migration',
          'DevOps Assessment'
        ]
      },
      {
        name: 'Emerging Technologies',
        subItems: [
          'Blockchain Solutions',
          'Voice Technology',
          'IoT Integration',
          'AI Personalization',
          'AR/VR Applications',
          'Quantum Computing',
          'Workflow AI',
          'Digital Twin Solutions',
          'AI Chatbots',
          '5G Technology Integration'
        ]
      },
      {
        name: 'Creative and Design',
        subItems: [
          'Graphic Design',
          'UX/UI Design',
          '3D Modeling',
          'Motion Graphics',
          'Branding Services',
          'Infographic Design',
          'Packaging Design',
          'AR/VR Design',
          'Video Storyboarding',
          'Creative Content Development'
        ]
      },
      {
        name: 'Digital Commerce and Marketing',
        subItems: [
          'E-commerce Development',
          'SEO Services',
          'Social Media',
          'Content Marketing',
          'Email Campaigns',
          'PR Outreach',
          'Lead Generation',
          'Marketing Automation',
          'Influencer Marketing',
          'Conversion Rate Optimization (CRO)',
          'Social Commerce Integration'
        ]
      },
      {
        name: 'Production and Media',
        subItems: [
          'Video Production',
          'Sound Engineering',
          'Podcast Management',
          'Live Streaming',
          'VFX Animation',
          'Voice Recording',
          'Event Recording',
          'Drone Videography',
          'Media Localization',
          'Scriptwriting and Editing'
        ]
      },
      {
        name: 'Cyber Security',
        subItems: [
          'Penetration Testing',
          'Data Encryption',
          'Incident Response',
          'Network Security',
          'IAM Solutions',
          'Security Training',
          'Vulnerability Assessment',
          'Ransomware Protection',
          'Zero Trust Architecture',
          'Compliance Monitoring',
          'Threat Detection and Response'
        ]
      },
      {
        name: 'Sustainability and Future Tech',
        subItems: [
          'IT Audits',
          'Smart Systems',
          'Green Data',
          'Renewable Energy',
          'Carbon Monitoring',
          'Supply Integration',
          'Eco Software',
          'Sustainable Cloud Solutions',
          'Smart Grid Technology',
          'Green AI Applications'
        ]
      },
      {
        name: 'Quality Control and Testing',
        subItems: [
          'Functional Testing',
          'Load Testing',
          'Automated Testing',
          'Usability Testing',
          'Security Testing',
          'Regression Testing',
          'Compatibility Testing',
          'Performance Benchmarking',
          'Cloud Testing',
          'Localization Testing'
        ]
      },
      {
        name: 'Progress Technology Services',
        subItems: [
          'Custom Applications',
          'ERP Solutions',
          'Database Tuning',
          'Data Synchronization',
          'Legacy Modernization',
          'Middleware Integration',
          'Technical Support',
          'Application Re-engineering',
          'API Management',
          'Real-Time Analytics Integration'
        ]
      },
      {
        name: 'IT Support',
        subItems: [
          'Helpdesk Support',
          'Infrastructure Management',
          'Software Updates',
          'Hardware Repairs',
          'Network Optimization',
          'Backup Solutions',
          'IT Consultancy',
          'Remote IT Support',
          'Disaster Recovery Support',
          'End-User Training',
          'Software Licensing Management'
        ]
      }
    ],
    Industries: [
      {
        name: 'Healthcare & Life',
        subItems: [
          'Regulatory Compliance',
          'Data-Driven Care',
          'Telehealth & IoT',
          'Cloud & DevOps'
        ]
      },
      {
        name: 'Financial Services',
        subItems: [
          'Security & Compliance',
          'Fraud Detection',
          'FinTech Innovation',
          'Scalable Infrastructure'
        ]
      },
      {
        name: 'Retail & E-Commerce',
        subItems: [
          'E-Commerce Platforms',
          'Omnichannel Reach',
          'Digital Marketing',
          'Scalability & Performance'
        ]
      },
      {
        name: 'Manufacturing & Supply',
        subItems: [
          'IoT & Automation',
          'Supply Chain Security',
          'Predictive Maintenance',
          'Cloud Infrastructure'
        ]
      },
      {
        name: 'Media & Entertainment',
        subItems: [
          'Content Creation',
          'Immersive Tech',
          'Scalable Streaming',
          'Secure Delivery'
        ]
      },
      {
        name: 'Energy & Utilities',
        subItems: [
          'Smart Grid Tech',
          'Sustainability Focus',
          'Regulatory Security',
          'Advanced Automation'
        ]
      },
      {
        name: 'Government & Public',
        subItems: [
          'Digital Transformation',
          'Data Protection',
          'Citizen Engagement',
          'Regulatory Compliance'
        ]
      },
      // Continue filling with other industries from the Word file...
    ],
    Technologies: [
      {
        name: 'Cloud Tech',
        subItems: [
          'AWS',
          'Azure',
          'GCP',
          'Docker',
          'Kubernetes',
          'Terraform',
          'Ansible',
          'OpenStack',
          'VMware',
          'CloudFoundry'
        ]
      },
      {
        name: 'AI & ML',
        subItems: [
          'TensorFlow',
          'PyTorch',
          'Scikit-learn',
          'Keras',
          'OpenCV',
          'spaCy',
          'IBM Watson',
          'Microsoft AI',
          'Google AI',
          'NLTK'
        ]
      },
      // Add remaining technology categories from the Word file...
    ],
    Product: ['Product 1', 'Product 2', 'Product 3'],
    Portfolio: ['Project 1', 'Project 2', 'Project 3']
  };

  export default menuData;
