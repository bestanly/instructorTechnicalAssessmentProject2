class Pokemon {
  constructor(name, attack, defense, health, type) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.health = health;
    this.lifebar = health;
    this.type = type;
  }
  takeDamage(damage) {
    this.health = this.health - damage < 0 ? 0 : (this.health -= damage);
  }
  attackOpponent(pokemon) {
    const damage =
      this.attack - pokemon.defense < 0 ? 0 : this.attack - pokemon.defense;
    pokemon.takeDamage(damage);
  }
  display() {
    const displayName = this.name.toUpperCase();
    const displayType = this.type.toUpperCase();
    return `${displayName} (${displayType}) ${this.health}/${this.lifebar}`;
  }
}
