const faker = require("faker");


class CategoriesService {

  constructor(){
    this.categories = [];
    this.generate();
  }

  generate() {
    const limit = 5;
    for (let index = 0; index < limit; index++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.department()
      });
    }
  }

  create(data) {
    const newCategorie = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.categories.push(newCategorie);
    return newCategorie;
  }

  find() {
    return this.categories;
  }

  findOne(id) {
    return this.categories.find(item => item.id === id);
  }

  update(id, changes) {
    const index = this.categories.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Categorie not found');
    }
    const categorie = this.categories[index];
    this.categories[index] = {
      ...categorie,
      ...changes
    };
    return this.categories[index];
  }

  delete(id) {
    const index = this.categories.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('categorie not found');
    }
    this.categories.splice(index, 1);
    return { id };
  }

}

module.exports = CategoriesService;
