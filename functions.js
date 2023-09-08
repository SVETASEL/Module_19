// Задание 1

function printOwnPropertiesKeys(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(key);
      }
    }
  }

printOwnProperties();

// Задание 2

function hasProperty(obj, propertyName) {
    return propertyName in obj;
  }

// Задание 3

  function createEmptyObjectNoPrototype() {
    return Object.create(null);
  }

// Задание 4

function ElectricAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
  }
  

  ElectricAppliance.prototype.turnOn = function () {
    if (!this.pluggedIn) {
      this.pluggedIn = true;
      console.log(`${this.name} включен. Потребляемая мощность: ${this.power} Вт`);
    } else {
      console.log(`${this.name} уже включен.`);
    }
  };
  
  ElectricAppliance.prototype.turnOff = function () {
    if (this.pluggedIn) {
      this.pluggedIn = false;
      console.log(`${this.name} выключен.`);
    } else {
      console.log(`${this.name} уже выключен.`);
    }
  };
  
  function Iron(brand) {
    ElectricAppliance.call(this, 'Утюг', 1500); 
    this.brand = brand;
  }
  
  Iron.prototype = Object.create(ElectricAppliance.prototype);
  Iron.prototype.constructor = Iron;
  
  Iron.prototype.setTemperature = function (temperature) {
    if (this.pluggedIn) {
      console.log(`${this.brand} устанавливает температуру: ${temperature}°C`);
    } else {
      console.log('Сначала включите утюг.');
    }
  };

  function Refrigerator(model) {
    ElectricAppliance.call(this, 'Холодильник', 200); 
    this.model = model;
    this.temperature = 4; // Назначаем начальную температуру
  }
  
  Refrigerator.prototype = Object.create(ElectricAppliance.prototype);
  Refrigerator.prototype.constructor = Refrigerator;
  
  Refrigerator.prototype.setTemperature = function (temperature) {
    if (this.pluggedIn) {
      this.temperature = temperature;
      console.log(`${this.model} устанавливает температуру: ${this.temperature}°C`);
    } else {
      console.log('Сначала включите холодильник.');
    }
  };
  
  // Создаем экземпляры приборов
  const iron = new Iron('Bosch');
  const refrigerator = new Refrigerator('LG');
  
  iron.turnOn();
  refrigerator.turnOn();

  refrigerator.setTemperature(2);
  
  iron.setTemperature(180);
  
  iron.turnOff();
  refrigerator.turnOff();
  