// ViewBox: Width, Height
export const view = [600, 140];

// Margins: Top, Right, Bottom, Left
export const trbl = [20, 50, 20, 50];

// Adjusted dimensions width - height
export const dims = [
  view[0] - trbl[1] - trbl[3],
  view[1] - trbl[0] - trbl[2]
];