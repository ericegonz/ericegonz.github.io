import CardGrid from "../CardGrid/CardGrid";

const items = [
  {
    title: "Digital Platform for Service",
    caption: "Thermo Fisher Scientific",
    image: "https://placehold.co/140",
    blurb: "Data Processing Microservices",
    details:
      "Led the cloud migration of an API gateway handling 34GB of telemetry data across 20 million daily requests, enabling over 8,100 remote tunnels annually and reducing the need for Field Service Engineer dispatches. Expertise includes Kafka, Express, Kubernetes, Terraform, Application Gateway, Application Insights, OpenTelemetry, and CI/CD practices.",
  },
  {
    title: "SmartPay",
    caption: "Thermo Fisher Scientific",
    image: "https://placehold.co/140",
    blurb: "No-Touch Contract Renewal Reminders & Payment Processing Solution",
    details:
      "Architected and developed event-driven microservices for the SmartPay solution at Thermo Fisher Scientific, automating no-touch contract renewal reminders and securely processing contract renewal purchases. Expertise includes Node, TypeScript, Kafka, Terraform, JFrog, and Azure services such as Functions, Private Endpoints, API Management, and DevOps.",
  },
  {
    title: "Service Bastion",
    caption: "Thermo Fisher Scientific",
    image: "https://placehold.co/140",
    blurb: "REST Client SDK",
    details:
      "Transformed the Service Bastion REST Client SDK from an aging proof-of-concept into a modern ESM Node 20 secure on-instrument application at Thermo Fisher Scientific. Developed Docker-based automated testing tools and methods to ensure Windows installers are validated. Expertise includes Node, Express, Docker, OpenAPI, PostgreSQL, TypeScript, REST API, Windows Code Signing, and JFrog.",
  },
  {
    title: "ServiceStudio",
    caption: "Thermo Fisher Scientific",
    image: "https://placehold.co/140",
    blurb: "Desktop App for Diagnostics & Validation for Instruments",
    details:
      "Upgraded the ServiceStudio desktop app for diagnostics and instrument validation at Thermo Fisher Scientific, transitioning from a legacy Node and Docker solution to a modern Electron app with enhanced repository tooling. Used in 53% of on-site maintenance and qPCR qualifications, the app saves $750k annually. Expertise includes Electron, Node, Chart.js, Angular, Playwright, Python, PowerShell, SCPI, and CI/CD.",
  },
  {
    title: "VICKI Retail Experience",
    caption: "ViaTouch Media",
    image: "https://placehold.co/140",
    link: "https://getvicki.com",
    blurb:
      "Dynamic media-rich Interfaces with virtual carts with voice-guided experiences & technician control panels",
    details:
      "Developed dynamic, media-rich interfaces for ViaTouch Media's VICKI, including main and supplementary screens with virtual carts, voice-guided experiences, and technician control panels. Expertise includes JavaScript, AngularJS, AJAX, HTTP APIs, HTML, Sketch, and Adobe Creative Suite (UI/UX). Also built a natural language processing automated shopping assistant for VICKI, featuring a powerful voice Q&A system capable of fetching weather, triggering voice-activated media, and more. Technologies used include Python, PyAudio, Boto 3, Google Cloud, MySQL, Git, OAuth 2.0, and REST/HTTP APIs.",
  },
  {
    title: "Load Sensor Data Harvesting Tools",
    caption: "ViaTouch Media",
    image: "https://placehold.co/140",
    link: "https://getvicki.com",
    blurb:
      "Applications used to generate, analyze & simulate sensor data to improve inventory tracking algorithms",
    details:
      "Developed dynamic, media-rich interfaces for ViaTouch Media's VICKI, including main and supplementary screens with virtual carts, voice-guided experiences, and technician control panels. Expertise includes JavaScript, AngularJS, AJAX, HTTP APIs, HTML, Sketch, and Adobe Creative Suite (UI/UX). Also built a natural language processing automated shopping assistant for VICKI, featuring a powerful voice Q&A system capable of fetching weather, triggering voice-activated media, and more. Technologies used include Python, PyAudio, Boto 3, Google Cloud, MySQL, Git, OAuth 2.0, and REST/HTTP APIs.",
  },
];

const Projects = () => <CardGrid items={items} />;

export default Projects;
