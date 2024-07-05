import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import TopFifty from "./TopFifty.js";
import "./ServiceDetails.css";

const services = [
  {
    id: 1,
    name: "AI Consulting and Strategy Development",
    description:
      "AI Business Partners offers a comprehensive suite of AI consulting and strategy development services to help organizations leverage AI for business growth. Our tailored approach ensures that AI initiatives align with your strategic goals and deliver measurable value.",
    img: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1719809509/agile/aiConsulting.png",
    details: {
      overview:
        "By leveraging our AI Consulting and Strategy Development services, your organization can confidently navigate the complexities of AI adoption, ensuring that initiatives are strategically aligned, technically feasible, and economically viable",
      keyServices: [
        {
          name: "AI Readiness Assessment",
          details: [
            "Current State Analysis: Evaluate existing systems, data sources, and processes.",
            "Capability Mapping: Identify strengths, weaknesses, opportunities, and threats in AI capabilities.",
            "Readiness Scorecard: Provide a detailed report on the organization’s AI readiness level.",
          ],
        },
        {
          name: "AI Strategy and Roadmap Development",
          details: [
            "Vision and Objectives Setting: Define the AI vision and key business objectives.",
            "Use Case Identification: Identify high-impact AI use cases tailored to your business.",
            "Roadmap Creation: Develop a phased implementation plan with clear milestones and timelines.",
            "Resource Planning: Plan for necessary resources, including technology, data, and talent.",
          ],
        },
        {
          name: "Use Case Feasibility and ROI Analysis",
          details: [
            "Technical Feasibility Study: Assess the technical requirements and challenges of potential AI projects.",
            "Economic Feasibility Analysis: Analyze the cost-benefit and ROI of identified AI use cases.",
            "Risk Assessment: Identify and evaluate potential risks and mitigation strategies.",
          ],
        },
        {
          name: "Data Strategy and Management",
          details: [
            "Data Audit: Evaluate existing data assets and identify gaps.",
            "Data Governance Framework: Establish policies and procedures for data management.",
            "Data Integration: Plan for the integration of disparate data sources.",
            "Data Quality Improvement: Implement processes to enhance data accuracy and consistency.",
          ],
        },
        {
          name: "AI Technology Stack and Architecture",
          details: [
            "Technology Evaluation: Assess and recommend AI tools, platforms, and frameworks.",
            "Architecture Design: Design scalable and flexible AI architecture.",
            "Integration Planning: Plan for seamless integration with existing systems.",
          ],
        },
        {
          name: "AI Governance and Ethical Framework",
          details: [
            "Governance Policies: Develop policies for AI oversight and accountability.",
            "Ethical Guidelines: Create ethical guidelines to ensure fair and transparent AI practices.",
            "Compliance and Regulations: Ensure adherence to relevant laws and regulations.",
          ],
        },
      ],
    },
  },
  {
    id: 2,
    name: "Machine Learning Model Development",
    description:
      "AI Business Partners specializes in developing customized machine learning models that drive innovation and operational efficiency. Our expert team leverages cutting-edge machine learning algorithms to solve complex business challenges and deliver tangible results.",
    img: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1719822188/agile/machineLearning.png",
    details: {
      overview:
        "Our Machine Learning Model Development services empower organizations to harness the power of data through advanced machine learning techniques, driving transformative business outcomes.",
      keyServices: [
        {
          name: "Model Design and Development",
          details: [
            "Requirements Gathering: Understand business objectives and data requirements.",
            "Model Selection: Identify the most suitable machine learning models for the project.",
            "Algorithm Development: Implement and optimize machine learning algorithms.",
            "Model Evaluation: Assess model performance and refine as needed.",
          ],
        },
        {
          name: "Training and Testing",
          details: [
            "Data Preparation: Clean, preprocess, and transform data for model training.",
            "Training Process: Train machine learning models using prepared data sets.",
            "Testing and Validation: Evaluate model accuracy and validate against real-world scenarios.",
          ],
        },
        {
          name: "Deployment and Integration",
          details: [
            "Deployment Strategy: Plan and execute the deployment of machine learning models.",
            "Integration Planning: Integrate models into existing systems and workflows.",
            "Performance Monitoring: Monitor model performance and implement updates as necessary.",
          ],
        },
        {
          name: "Support and Maintenance",
          details: [
            "Model Maintenance: Update models with new data and adapt to evolving business needs.",
            "Performance Optimization: Fine-tune models to improve efficiency and accuracy over time.",
            "Troubleshooting and Support: Provide ongoing support and troubleshooting for deployed models.",
          ],
        },
      ],
    },
  },
  {
    id: 3,
    name: "Data Analytics and Services",
    description:
      "AI Business Partners offers comprehensive data analytics services to transform raw data into actionable insights for strategic decision-making. Our services include data strategy and consulting, data collection and integration, data analysis and visualization, advanced analytics, and insights and reporting.",
    img: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1719822219/agile/dataAnalyticsAndServices.png",
    details: {
      overview:
        "Our Data Analytics and Services empower organizations to harness the full potential of their data through advanced analytics techniques, enabling informed decision-making and operational excellence.",
      keyServices: [
        {
          name: "Data Strategy and Consulting",
          details: [
            "Needs Assessment: Identify business goals and data requirements.",
            "Data Governance: Establish policies for data management and compliance.",
          ],
        },
        {
          name: "Data Collection and Integration",
          details: [
            "Data Sourcing: Gather data from internal and external sources.",
            "Data Integration: Combine data from disparate sources into a unified dataset.",
          ],
        },
        {
          name: "Data Analysis and Visualization",
          details: [
            "Descriptive Analytics: Analyze historical data to identify trends and patterns.",
            "Predictive Analytics: Use statistical models to forecast future trends.",
            "Data Visualization: Create interactive dashboards and reports.",
          ],
        },
        {
          name: "Advanced Analytics",
          details: [
            "Machine Learning: Develop models to uncover deeper insights and predictions.",
            "Big Data Processing: Handle large datasets using advanced tools and technologies.",
          ],
        },
        {
          name: "Insights and Reporting",
          details: [
            "Actionable Insights: Provide recommendations based on data analysis.",
            "Custom Reports: Deliver tailored reports to meet specific business needs.",
          ],
        },
      ],
    },
  },
  {
    id: 4,
    name: "Natural Language Processing (NLP) Services",
    description:
      "AI Business Partners provides advanced NLP services to help organizations leverage text data for improved decision-making and automation. Our services include text data collection and preparation, sentiment analysis, text classification and clustering, named entity recognition (NER), language translation and summarization, and chatbots and virtual assistants.",
    img: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1719822249/agile/naturalLanguageProcessing.png",
    details: {
      overview: "Our NLP Services empower organizations to extract actionable insights from text data, enhance customer engagement through conversational AI, and automate business processes.",
      keyServices:[
        {
          name: "Text Data Collection and Preparation",
          details: [
            "Data Sourcing: Collect text data from various sources (documents, web, social media).",
            "Data Cleaning: Remove noise and preprocess text for analysis.",
          ],
        },
        {
          name: "Sentiment Analysis",
          details: [
            "Opinion Mining: Analyze customer sentiments and opinions from reviews and social media.",
            "Emotion Detection: Identify emotions expressed in text data.",
          ],
        },
        {
          name: "Text Classification and Clustering",
          details: [
            "Topic Modeling: Discover themes and topics within large text corpora.",
            "Document Categorization: Automatically classify documents into predefined categories.",
          ],
        },
        {
          name: "Named Entity Recognition (NER)",
          details: [
            "Entity Extraction: Identify and extract entities like names, dates, and locations from text.",
          ],
        },
        {
          name: "Language Translation and Summarization",
          details: [
            "Machine Translation: Provide automated translation services.",
            "Text Summarization: Generate concise summaries of long documents.",
          ],
        },
        {
          name: "Chatbots and Virtual Assistants",
          details: [
            "Conversational AI: Develop chatbots and virtual assistants for customer support and engagement.",
          ],
        },
      ],
    },
  },
  {
    id: 5,
    name: "Computer Vision Services",
    description:
      "AI Business Partners offers cutting-edge computer vision services to enable visual data analysis and automation. Our services include image and video processing, object detection and recognition, image classification, image segmentation, augmented reality (AR), and 3D reconstruction.",
    img: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1719822276/agile/computerVision.png",
    details: {
      overview: "Our Computer Vision Services harness the power of visual data to enhance decision-making, automate processes, and create immersive experiences through augmented reality (AR) applications.",
      keyServices:[
        {
          name: "Image and Video Processing",
          details: [
            "Data Annotation: Label images and videos for training models.",
            "Preprocessing: Enhance and prepare visual data for analysis.",
          ],
        },
        {
          name: "Object Detection and Recognition",
          details: [
            "Object Detection: Identify and locate objects within images and videos.",
            "Facial Recognition: Detect and recognize faces for security and authentication.",
          ],
        },
        {
          name: "Image Classification",
          details: [
            "Category Assignment: Classify images into predefined categories.",
            "Scene Understanding: Analyze scenes and identify relevant objects and activities.",
          ],
        },
        {
          name: "Image Segmentation",
          details: [
            "Pixel-Level Segmentation: Partition images into meaningful segments.",
            "Instance Segmentation: Differentiate between individual objects within an image.",
          ],
        },
        {
          name: "Augmented Reality (AR)",
          details: [
            "AR Integration: Develop AR applications for enhanced user experiences.",
            "3D Reconstruction: Create 3D models from 2D images and video data.",
          ],
        },
      ],
    },
  },{
    id: 6,
    name: "Robotic Process Automation (RPA)",
    description:
      "AI Business Partners specializes in Robotic Process Automation (RPA) to streamline business operations and enhance efficiency. Our services include process assessment and automation strategy, bot development and deployment, process optimization, cognitive automation, governance and compliance, and training and support.",
    img: "https://res.cloudinary.com/dzmn9lnk5/image/upload/v1719822308/agile/roboticsProcessAutomation.png",
    details: {
      overview: "Our RPA services leverage automation technology to optimize workflows, reduce operational costs, and improve accuracy and compliance.",
      keyServices:[
        {
          name: "Process Assessment and Automation Strategy",
          details: [
            "Workflow Analysis: Evaluate existing processes for automation feasibility.",
            "RPA Strategy: Develop a roadmap for RPA implementation aligned with business goals.",
          ],
        },
        {
          name: "Bot Development and Deployment",
          details: [
            "Bot Design: Design and configure bots to automate repetitive tasks.",
            "Integration: Integrate bots with existing IT systems for seamless operation.",
          ],
        },
        {
          name: "Process Optimization",
          details: [
            "Continuous Improvement: Identify opportunities for process optimization through RPA.",
            "Performance Monitoring: Monitor bot performance and analyze efficiency metrics.",
          ],
        },
        {
          name: "Cognitive Automation",
          details: [
            "Intelligent Automation: Incorporate AI and machine learning for cognitive capabilities.",
            "Natural Language Processing (NLP): Implement NLP-based bots for advanced interactions.",
          ],
        },
        {
          name: "Governance and Compliance",
          details: [
            "Security Measures: Ensure data security and compliance with regulatory standards.",
            "Governance Framework: Establish governance policies for RPA implementation.",
          ],
        },
        {
          name: "Training and Support",
          details: [
            "User Training: Provide training programs for users and stakeholders.",
            "24/7 Support: Offer ongoing support and maintenance for deployed bots.",
          ],
        },
      ],
    },
  },
  
  
  
  // More services here...
];

const ServiceDetails = () => {
  const { id } = useParams();
  const serviceId = parseInt(id);
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return <p>Service not found</p>;
  }

  return (
    <Container className="service-details">
      <Row>
        <Col md={8}>
          <h2>{service.name}</h2>
          <p>{service.description}</p>
          <h3>Overview</h3>
          <p>{service.details.overview}</p>
          <h3>Key Services</h3>
          {service.details.keyServices.map((keyService, index) => (
            <div key={index} className="key-service">
              <h4>{keyService.name}</h4>
              <ul>
                {keyService.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </Col>
        <Col md={4}>
          <img src={service.img} alt={service.name} className="service-image" />
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceDetails;
