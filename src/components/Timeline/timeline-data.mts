export type ExperienceType = "code" | "education" | "generic";

export type Experience = {
    title: string;
    subtitle?: string;
    institution: string;
    location: string;
    dates: string;
    briefDescription: string;
    bulletPoints: string[];
};

type TimelineData = Record<ExperienceType, Experience[]>;

export const timelineData: TimelineData = {
    code: [
        {
            title: "Senior Software Engineer",
            institution: "Thermo Fisher Scientific",
            location: "Carlsbad, CA",
            dates: "April 2021 - Present",
            briefDescription:
                "Global Services and Support",
            bulletPoints: [
                "Coming soon...",
            ],
        },
        {
            title: "Senior Software Engineer",
            institution: "ViaTouch Media, Inc",
            location: "San Diego, CA",
            dates: "November 2019 - March 2021",
            briefDescription:
                "ViaTouch Media develops intelligent retail experiences for clients such as Dell, 7-Eleven, P&G, Estee Lauder,\nCiti, Canteen, Goldman Sachs, 24 Hour Fitness, RugDoctor, Walmart & more. As a senior software engineer working directly under the CTO, I was responsible for the design, architecture, execution and the implementation of a number of the company’s software products through their continued life cycle.",
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
            institution: "ViaTouch Media, Inc",
            location: "San Diego, CA",
            dates: "April 2017 - November 2019",
            briefDescription:
                "Was promoted to Senior Software Engineer for rapid growth, progress and success mentoring others in this position.",
            bulletPoints: [
                "Implemented the first primitive version of the VICKI Retail System Interface and Natural Language Processing Automated Shopping Assistant",
                "Used open source libraries (i.e. Bleno) to interface with BLE peripherals, establishing communication between phone applications and a remote server.",
                "Performed networking tasks like setting static IP addresses, analyzing traffic on WireShark and designing topographies.",
            ],
        },
        {
            title: "Software Development Engineering Intern",
            institution: "ViaTouch Media, Inc",
            location: "Corona, CA",
            dates: "January 2017 - April 2017",
            briefDescription: "",
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
            institution: "University of California, Riverside",
            location: "Riverside, CA",
            dates: "January 2014 - January 2017",
            briefDescription: "",
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
            institution: "University of California, Riverside",
            location: "Riverside, CA",
            dates: "2017",
            briefDescription: "",
            bulletPoints: [],
        },
    ],
};
