const hurdleRace = (k, height) => {
    // Find the maximum height in the array
    const maxHeight = Math.max(...height);
    // Find the difference between the maximum height and the hurdle height
    const doses = maxHeight - k;
    // If the difference is negative, return 0
    if (doses < 0) {
        return 0;
    }
    // Otherwise, return the difference
    return doses;
}