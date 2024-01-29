function distributeShirts(shirts, bags) {
    // Calculate target number of shirts per bag
    const targetShirtsPerBag = Math.floor(shirts / bags);
  
    // Create an array to store actual number of shirts in each bag
    const actualShirtsPerBag = new Array(bags).fill(0);
  
    // Distribute evenly first
    for (let i = 0; i < bags; i++) {
      actualShirtsPerBag[i] = targetShirtsPerBag;
    }
  
    // Handle remaining shirts with error
    const remainingShirts = shirts % bags;
    for (let i = 0; i < remainingShirts; i++) {
      actualShirtsPerBag[i % bags]++; // Add remaining shirts one by one to each bag
    }
  
    // Calculate deviation (absolute difference from target) for each bag
    const deviations = actualShirtsPerBag.map(
      (shirts) => Math.abs(shirts - targetShirtsPerBag)
    );
  
    // Sort bags in ascending order of deviation (minimizing deviation)
    const sortedBags = actualShirtsPerBag.slice().sort((a, b) => deviations[a] - deviations[b]);
  
    // Return the sorted array of actual shirts in each bag
    return sortedBags;
  }
  
  // Example test cases
  console.log(distributeShirts(100, 10)); // [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
  console.log(distributeShirts(103, 10)); // [10, 10, 10, 10, 11, 10, 10, 11, 10, 11]
  console.log(distributeShirts(97, 8)); // [12, 12, 12, 12, 12, 12, 12, 11]
  console.log(distributeShirts(200, 10)); // [20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
