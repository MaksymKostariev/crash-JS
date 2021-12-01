function Bike(name, model) {
    this.name = name;
    this.model = model;
  }
  
  Bike.prototype.ride = function () {
      console.log("I’m riding");
  };
  Bike.prototype.sound = function () {
      console.log("Zoom! Zoom!");
  };
  
  const GS = new Bike("BMW", "R1250GS");
  const RR = new Bike("BMW", "S100RR");

  GS.sound();
  RR.ride();