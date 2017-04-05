class MyClass {
  constructor(protected name: string, protected email: string) {
  }
  
  public getDetails() {
    console.log(`${this.name} <${this.email}>`);
  }
}

let a = new MyClass("Serban", "serbanghita@gmail.com");
a.getDetails();
