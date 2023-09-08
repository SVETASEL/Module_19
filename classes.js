// Задание 5

class ElectricAppliance {
    constructor(name, power) {
      this.name = name;
      this.power = power;
      this.pluggedIn = false;
    }
  
    turnOn() {
      if (!this.pluggedIn) {
        this.pluggedIn = true;
        console.log(`${this.name} включен. Потребляемая мощность: ${this.power} Вт`);
      } else {
        console.log(`${this.name} уже включен.`);
      }
    }
  
    turnOff() {
      if (this.pluggedIn) {
        this.pluggedIn = false;
        console.log(`${this.name} выключен.`);
      } else {
        console.log(`${this.name} уже выключен.`);
      }
    }
  }
  
  // Класс для утюга
  class Iron extends ElectricAppliance {
    constructor(brand) {
      super('Утюг', 1500); 
      this.brand = brand;
    }
  
    setTemperature(temperature) {
      if (this.pluggedIn) {
        console.log(`${this.brand} устанавливает температуру: ${temperature}°C`);
      } else {
        console.log('Сначала включите утюг.');
      }
    }
  }
  
  // Класс для холодильника
  class Refrigerator extends ElectricAppliance {
    constructor(model) {
      super('Холодильник', 200); 
      this.model = model;
      this.temperature = 4; 
    }
  
    setTemperature(temperature) {
      if (this.pluggedIn) {
        this.temperature = temperature;
        console.log(`${this.model} устанавливает температуру: ${this.temperature}°C`);
      } else {
        console.log('Сначала включите холодильник.');
      }
    }
  }
  
  // Создаем экземпляры приборов
  const iron = new Iron('Bosch');
  const refrigerator = new Refrigerator('LG');
  
  iron.turnOn();
  refrigerator.turnOn();
  
  refrigerator.setTemperature(2);
  
  iron.setTemperature(180);
  
  iron.turnOff();
  refrigerator.turnOff();
  