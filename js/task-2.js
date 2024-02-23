class Storage {
  #item;


  constructor(items) {
    this.#item = items;
  }

  getItems() {
    return this.#item;
  }

  addItem(newItem) {
    this.#item.push(newItem);
  }

  removeItem(itemToRemove) {
    const toRemove = this.#item.indexOf(itemToRemove);
    if (toRemove !== -1) {
        this.#item.splice(toRemove, 1);
    }
 }
}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
