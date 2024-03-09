let user = {
    name: "John",
    address: {
      street: "Main",
      city: "New York"
    }
  };
  
  console.log(user.address.street); // Outputs: "Main"
  
  let user2 = {
    name: "Jane"
  };
  
  console.log(user2.address?.street); // Outputs: undefined