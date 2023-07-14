const createBoard = (size) => {
    let board = [];
    for (let i = 0; i < size; i++) {
        let row = [];
    for (let j = 0; j < size; j++) {
        row.push([i, j]);
    }
    board.push(row);
  }
  return board;
}

class Node {
    constructor(position) {
        this.position = position;
        this.children = [];
    }
}

function knightMoves(start, end) {
  const directions = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1]
  ];
  
  const visited = new Set();
  const queue = [[new Node(start), []]];
  
  while (queue.length) {
    const [node, path] = queue.shift();
    
    if (node.position[0] === end[0] && node.position[1] === end[1]) return [...path, node.position];
    
    for (let d in directions) {
      const possibleX = node.position[0] + directions[d][0];
      const possibleY = node.position[1] + directions[d][1];
      
      if (!visited.has(`${possibleX},${possibleY}`) && possibleX >= 0 && possibleX < 8 && possibleY >= 0 && possibleY < 8) {
        visited.add(`${possibleX},${possibleY}`);
        const childNode = new Node([possibleX, possibleY]);
        node.children.push(childNode);
        queue.push([childNode, [...path, node.position]]);
      }
    }
  }
  
  return null;
}

const path = knightMoves([3, 3], [7, 6]);

if (path) {
  console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
  for (let square of path) {
    console.log(`[${square[0]}, ${square[1]}]`);
  }
} else {
  console.log('No path found');
}


