export enum ExperienceType {
    Code = "code",
    Education = "education",
    Generic = "generic",
}

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
        | { dateStart: Date; dateEnd?: Date; dates?: never }
    ); // If dateStart and dateEnd are provided

export type TimelineData = Record<ExperienceType, Experience[]>;