export const contains = (parent, child) => {
  let parentNode = child.parentNode;
  
  if(parentNode === parent) {
    return true;
  }
  
  child = parentNode;
  
  if(child.parentNode) {
    return contains(parent, child);
  }
  
  return false;    
};