import humanizeDuration from 'humanize-duration';

export const formatDate = (date: Date): string => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()]; // Get the abbreviated month name
    const year = date.getFullYear();
    return `${month} ${year}`;
};

export const getRelativeDuration = (start: Date, end = new Date()): string => {
    const diff = end.getTime() - start.getTime();
    return humanizeDuration(diff, {
        language: "en",
        round: true,
        units: ["y", "mo"] // You can customize the units here
    });
};