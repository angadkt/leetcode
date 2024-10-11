var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    let area1 = (ax2-ax1)*(ay2-ay1)
    let area2 = (bx2-bx1)*(by2-by1)
    let overlapX = Math.max(0, Math.min(ax2, bx2) - Math.max(ax1, bx1));
    let overlapY = Math.max(0, Math.min(ay2, by2) - Math.max(ay1, by1));
    let overlappedArea = overlapX * overlapY
    let totalArea = (area1 + area2) - overlappedArea
    return totalArea
};