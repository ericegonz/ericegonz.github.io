import { Box, Typography, Stack } from "@mui/material";
import {
  AzurePlain,
  RaspberrypiOriginal,
  PhotoshopOriginal,
  TerraformPlain,
  PremiereproOriginal,
  LinuxOriginal,
  TypescriptOriginal,
  JavascriptOriginal,
  PythonOriginal,
  ReactOriginalWordmark,
  AmazonwebservicesOriginalWordmark,
  GraphqlPlain,
  IllustratorPlain,
  DockerOriginal,
  GitOriginal,
  AngularOriginal,
  NodejsOriginal,
  NpmOriginalWordmark,
  PostgresqlOriginal,
  MongodbOriginal,
} from "devicons-react";

const iconSize = 65;

const sections = [
  {
    title: "Languages & Frameworks",
    content:
      "Proficient in TypeScript, JavaScript, and Python, with limited experience in C# and C++, as well as frameworks like Angular, Node.js, and React. Additionally, I have strong expertise in consuming and architecting GraphQL APIs. I've built Single Executable Applications in Node using tools like pkg, esbuild and Node SEA.",
    icons: [
      <TypescriptOriginal key="typescript" size={iconSize} />,
      <JavascriptOriginal key="javascript" size={iconSize} />,
      <PythonOriginal key="python" size={iconSize} />,
      <NodejsOriginal key="nodejs" size={iconSize} />,
      <ReactOriginalWordmark key="react" size={iconSize} />,
      <AngularOriginal key="" size={iconSize} />,
      <GraphqlPlain key="graphql" size={iconSize} />,
    ],
  },
  {
    title: "Cloud & DevOps",
    content:
      "Proficient in cloud technologies (Azure, AWS) and infrastructure as code (Terraform). I have a solid grasp of CI/CD with Azure DevOps and integration with npm registries and tools like JFrog Xray. Experienced in Kafka for event streaming.",
    icons: [
      <AmazonwebservicesOriginalWordmark key="aws" size={iconSize} />,
      <AzurePlain key="azure" size={iconSize} />,
      <TerraformPlain key="terraform" size={iconSize} />,
      <NpmOriginalWordmark key="npm" size={iconSize} />,
    ],
  },
  {
    title: "Technologies/Tools",
    content:
      "Linux enthusiast with hands-on experience using Debian, Ubuntu & RHEL. I maintain my own home lab server, hosting services like Immich, Ollama, network ad blockers, and more, which I administer in Docker on Windows via WSL. I also work with Raspberry Pi and ASUS Tinkerboard, and I'm skilled at hardware installations (HDDs, SSDs, RAM, etc.).",
    icons: [
      <LinuxOriginal key="linux" size={iconSize} />,
      <RaspberrypiOriginal key="raspberrypi" size={iconSize} />,
      <DockerOriginal key="docker" size={iconSize} />,
      <GitOriginal key="git" size={iconSize} />,
      <PostgresqlOriginal key="psql" size={iconSize} />,
      <MongodbOriginal key="mongo" size={iconSize} />,
    ],
  },
  {
    title: "Visual Design",
    content:
      "With a background in professional graphic design, I have a keen eye for aesthetics and expertise in Adobe Photoshop, Illustrator, Premiere Pro, and InDesign. My design skills complement my software development, ensuring a creative approach to projects.",
    icons: [
      <PhotoshopOriginal key="photoshop" size={iconSize} />,
      <IllustratorPlain key="illustrator" size={iconSize} />,
      <PremiereproOriginal key="premiere" size={iconSize} />,
    ],
  },
];

const About = () => {
  return (
    <Box>
      <Typography variant="body1" component="p" sx={{ mb: 2 }}>
        I am a passionate software developer with a strong curiosity for
        technology. I thrive in collaborative environments and love to learn and
        apply new concepts. Outside of work, I enjoy camping, building Legos,
        flying drones, off-roading, and trying new foods.
      </Typography>

      {sections.map((section, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            {section.title}
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 2 }}>
            {section.content}
          </Typography>
          <Stack
            sx={{ mt: 3 }}
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {section.icons}
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export default About;
