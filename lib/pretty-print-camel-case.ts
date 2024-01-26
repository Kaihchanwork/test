export const prettyPrintCamelCase = (camelCase: string): string => {
    return camelCase
        .replace(/([a-z])([A-Z])/g, '$1 $2') // Split camelCase words
        .replace(/\b\w/g, (char: string) => char.toUpperCase()); // Capitalize the first letter of each word
};
