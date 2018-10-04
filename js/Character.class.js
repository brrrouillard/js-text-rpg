class Character {
    constructor(name, level, life, weapon, lifeId, experienceId, levelId) {
        this.name = name;
        this.level = level;
        this.life = life;
        this.weapon = weapon;
        this.lifeId = lifeId; // Used for DOM selection
        this.experienceId = experienceId;
        this.levelId = levelId;

        // Not a parameter
        this.isAlive = true;
        this.experience = 0;
        this.experienceToLevelUp = 10;
        this.baseLife = life;
    }

    receiveDamage(damage) {
        this.life -= damage;
        this.checkIfAlive();
    }

    attack(opponent) {
        let combatLogs = "";
        if (opponent.isAlive && this.isAlive) { // If both characters are alive 
            let damageDone = this.level * this.weapon.damage;
            opponent.receiveDamage(damageDone);
            combatLogs += `${this.name} attacks ${opponent.name} with ${this.weapon.name} and deals ${damageDone} damages. ${opponent.name} now has ${opponent.life} HP. \n`;
            this.experience += 5;
            console.log(this.experience);
        }
        else if (this.isAlive && !opponent.isAlive) {
            combatLogs += `${opponent.name} is already dead!\n`;
        }
        else {
            combatLogs += `${this.name} is dead... It cannnot attack.\n`;
        }
        Commands.refresh();
        Commands.showLogs(combatLogs);
    }

    checkIfAlive() {
        this.isAlive = this.life > 0 ? true : false;
    }

    levelUp() {
        this.level++;
        this.experienceToLevelUp *= 2;
        this.experience = 0;
    }
}