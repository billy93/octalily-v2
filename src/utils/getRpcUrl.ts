import random from 'lodash/random';

// Array of available nodes to connect to
const nodes = [
  process.env.REACT_APP_NODE,
  // process.env.REACT_APP_NODE_2,
  // process.env.REACT_APP_NODE_3,
];

export const getRpcUrl = () => {
  const randomIndex = random(0, nodes.length - 1);
  return nodes[0];
};
