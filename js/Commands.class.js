class Commands {
    static showLife(characters) {
        // The characters argument is an array containing every characters in the game
        for(let i = 0; i < characters.length; i++){
            let playerLife = document.querySelector(characters[i].lifeId);
            playerLife.innerHTML = characters[i].life;
        } 
    }

    static showXP(characters){
        for(let i = 0; i < characters.length; i++){
            let playerXP = document.querySelector(characters[i].experienceId);
            playerXP.innerHTML = characters[i].experience;
        } 
    }

    static showLevel(characters){
        for(let i = 0; i < characters.length; i++){
            let playerLevel = document.querySelector(characters[i].levelId);
            playerLevel.innerHTML = characters[i].level;
        } 
    }

    static showLogs(combatLogs){
        logs.value += combatLogs;
        logs.scrollTop = logs.scrollHeight;
    }
    
    static refresh(){
        // REFRESH THE DISPLAY OF EVERY CHARACTER'S VALUES
        this.showLife(characters);
        this.showXP(characters);
        this.showLevel(characters);
    }

    static newTurn(attackingCharacter, attackedCharacter){
        attackingCharacter.attack(attackedCharacter);
        if (player.experience >= player.experienceToLevelUp){
            player.levelUp();
        }
        if (!ennemy.isAlive){
            this.createEnnemy();
            this.refresh();
        }
    }

    static createEnnemy(){
        let level = ennemy.level + 1;
        let baseLife = ennemy.baseLife * 2;
        ennemy.weapon.attack *= 2;
        ennemy = new Character("Zombie", level, baseLife, ennemy.weapon, "#ennemy-life", "#ennemy-experience", "#ennemy-level");
        characters = [player, ennemy];
    }
}