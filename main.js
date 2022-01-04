let completed = false;

function turnOnComputer(os) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const message = "Welcome to Windows!";
      console.log(`Your computer says: ${message}`);
      completed = true;
      if (os === "Windows") {
        return resolve(completed);
      } else {
        return reject("os not found!");
      }
    }, 2500);
  });
}

console.log("Turning on your computer...");

turnOnComputer("Linux").then((completed) => {
  if (completed) {
    console.log("Your computer is on!");
  } else {
    console.log("Something went wrong!");
  }
}).catch(err=>console.log(err));
