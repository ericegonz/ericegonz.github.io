export type ExperienceType = "code" | "education" | "generic";

export type Experience = {
    title: string;
    organization: string;
    location: string;
    briefDescription: string;
    bulletPoints: string[];
    dates?: string; // Optional string for dates
    dateStart?: Date; // Optional date for start
    dateEnd?: Date; // Optional date for end
} & (
        | { dates: string; dateStart?: never; dateEnd?: never } // If dates is provided
        | { dateStart: Date; dateEnd?: Date; dates?: never }   // If dateStart and dateEnd are provided
    );

type TimelineData = Record<ExperienceType, Experience[]>;

export const timelineData: TimelineData = {
    code: [
        {
            title: "Senior Software Engineer",
            organization: "Thermo Fisher Scientific",
            location: "Carlsbad, CA",
            dateStart: new Date('2021-04-01'),
            briefDescription:
                "Developed tools for field teams to validate PCR instruments and created software and SDKs for on-instrument telemetry transmission to the cloud, enhancing remote resolution and customer uptime. Also designed tools that enabled service and contract sales teams to collect payment information online and target low-value customers, improving outreach efficiency.",
            bulletPoints: [
                "Integral to Global Service & Support (GSS) Software, generating $1M in annual savings.",
                "Spearheaded transformation of obsolete projects to production-ready state.",
                "Serve as technical lead for numerous applications including on-instrument service SDK, no-touch contract renewal reminder system & developer portal.",
                "Develop project requirements & plans, identify risks, partner with external teams and stakeholders to proactively remove barriers.",
                "Ensure compliance with corporate security standards, including penetration tests & code analysis.",
                "Develop proactive monitoring rules linked to availability tests, responding to incidents when triggered.",
                "Work with R&D instrument teams to align on service data standards and expectations for new instruments and software releases.",
                "Trusted as the technical Voice of Customer for GSS, bridging gaps between external technical teams and our division."

            ],
        },
        {
            title: "Senior Software Engineer",
            organization: "ViaTouch Media, Inc",
            location: "San Diego, CA",
            dateStart: new Date('2019-11-01'),
            dateEnd: new Date('2021-03-31'),
            briefDescription:
                "At ViaTouch Media, I led the design, architecture, and implementation of intelligent retail software products as a Senior Software Engineer under the CTO. Our clients included Dell, 7-Eleven, P&G, Estee Lauder, Citi, Goldman Sachs, Walmart, and more.",
            bulletPoints: [
                "Screened, interviewed, mentored, & on-boarded several new team members.",
                "Implemented scalable, well-structured & documented code for applications using Agile development.",
                "Met with clients to discuss requirements, software integrations and trainings of existing software solutions.",
                "Used Git as version control to keep code, commits, branches & releases organized.",
                "Played integral role in VICKI product development team including R&D, prototyping, testing and more.",
                "Created, & executed update packages for ~4000 production Windows & Linux automated retail kiosks.",
                "Migrated, modified, maintained & created SQL databases for transactions, products, pricing, etc.",
                "Learning .NET Core framework in C#/C++ to communicate with secure devices (i.e. biometrics scanners, payment readers) with a focus on cross-platform execution using Mono.",
            ],
        },
        {
            title: "Software Engineer",
            organization: "ViaTouch Media, Inc",
            location: "San Diego, CA",
            dateStart: new Date('2017-04-01'),
            dateEnd: new Date('2019-11-30'),
            briefDescription:
                "Designed and implemented software solutions for clients, enhancing network efficiency and reducing operational costs. Collaborated with cross-functional teams to manage database migrations and support initiatives.",
            bulletPoints: [
                "Implemented the first primitive version of the VICKI Retail System Interface and Natural Language Processing Automated Shopping Assistant",
                "Used open source libraries (i.e. Bleno) to interface with BLE peripherals, establishing communication between phone applications and a remote server.",
                "Performed networking tasks like setting static IP addresses, analyzing traffic on WireShark and designing topographies.",
            ],
        },
        {
            title: "Software Development Engineering Intern",
            organization: "ViaTouch Media, Inc",
            location: "Corona, CA",
            dateStart: new Date('2017-01-01'),
            dateEnd: new Date('2017-04-30'),
            briefDescription: "Led the design and execution of innovative software products for high-profile clients, driving continuous improvement and operational excellence. Mentored new team members while managing cross-functional collaboration to meet client requirements and ensure product success.",
            bulletPoints: [
                "Developed, executed & documented User Acceptance Tests.",
                "Created technical documentation to record protocols, code, & other pieces of software as necessary.",
                "Drafted Engineering Change Orders (ECOs) and helped develop project specifications",
            ],
        },
    ],
    generic: [
        {
            title: "Media Development Supervisor",
            organization: "University of California, Riverside",
            location: "Riverside, CA",
            dateStart: new Date('2014-01-01'),
            dateEnd: new Date('2017-01-31'),
            briefDescription: "Worked as a graphic designer, leading a team of five, including social media coordinators and videographers. Focused on enhancing team dynamics through training and bonding experiences while producing engaging content for the student community.",
            bulletPoints: [
                "Conceptualized and implemented creative solutions that met UCR Recreation department marketing strategies.",
                "Oversaw projects from concept to completion in design, videography, social media campaigns and more.",
                "Played lead role in performance evaluation assessments, organizing training sessions and selection process.",
            ],
        },
    ],
    education: [
        {
            title: "B.S. Computer Science with Business Applications",
            organization: "University of California, Riverside",
            location: "Riverside, CA",
            dates: "2017",
            briefDescription: "",
            bulletPoints: [],
        },
    ],
};
