// Function to calculate the average of RGB values
export function calculateAverageRGB(color: string) {
    // Remove "#" from the color, if present
    color = color.replace("#", "");

    // Separate color components (red, green, blue)
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);

    // Calculate the average of RGB values
    const average = (r + g + b) / 3;

    return average;
}

// Function to determine the blur value based on the average of RGB values
export function calculateBlurValue(color: string) {
    // Calculate the average of RGB values
    const averageRGB = calculateAverageRGB(color);

    // Determine the blur value based on the average
    // Here you can adjust values as needed to achieve the desired effect
    const blurValue = averageRGB / 50; // Example: divide by 50 to get a smooth blur value

    return blurValue;
}
