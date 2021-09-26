export function flatArray(data = [], childrenName = 'children') {
  const result = [];
  const loop = array => {
    array.forEach(item => {
      if (item[childrenName]) {
        const newItem = { ...item };
        delete newItem[childrenName];
        result.push(newItem);
        if (item[childrenName].length > 0) {
          loop(item[childrenName]);
        }
      } else {
        result.push(item);
      }
    });
  };
  loop(data);
  return result;
}

export function treeMap(tree, mapper, childrenName = 'children') {
  return tree.map((node, index) => {
    const extra = {};
    if (node[childrenName]) {
      extra[childrenName] = treeMap(node[childrenName], mapper, childrenName);
    }
    return {
      ...mapper(node, index),
      ...extra,
    };
  });
}

export function flatFilter(tree, callback) {
  return tree.reduce((acc, node) => {
    if (callback(node)) {
      acc.push(node);
    }
    if (node.children) {
      const children = flatFilter(node.children, callback);
      acc.push(...children);
    }
    return acc;
  }, []);
}

export function generateValueMaps(items, maps = {}) {
  (items || []).forEach(({ value, children }) => {
    maps[value.toString()] = value;
    generateValueMaps(children, maps);
  });
  return maps;
}
