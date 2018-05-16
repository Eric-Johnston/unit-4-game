// Global variables

var charSelected = false;
var enemySelected = false;
var player = {}
var enemy = {}
var enemiesDefeated = 0;
var gameOver = false;

// Characters

var obiWan = {
    name: "Obi-Wan",
    healthPoints: 120,
    baseAttack: 6,
    attackPower:  9,
    counterAP: 8,
}

var quiGon = {
    name: "Qui-Gon",
    healthPoints: 130,
    baseAttack: 8,
    attackPower: 9,
    counterAP: 9
}

var darthMaul = {
    name: "Darth Maul",
    healthPoints: 140,
    baseAttack: 8,
    attackPower: 10,
    counterAP: 10,
}

var darthSidious = {
    name: "Darth Sideous",
    healthPoints: 160,
    baseAttack: 9,
    attackPower: 12,
    counterAP: 12
}

//

function playerSelect(charSelected) {
    player.name = charSelected.name;
    player.healthPoints = charSelected.healthPoints;
    player.baseAttack = charSelected.baseAttack;
    player.attackPower = charSelected.attackPower;
    player.counterAP = charSelected.counterAP;
}

function defenderSelect(enemySelected) {
    enemy.name = enemySelected.name;
    enemy.healthPoints = enemySelected.healthPoints;
    enemy.baseAttack = enemySelected.baseAttack;
    enemy.attackPower = enemySelected.attackPower;
    enemy.counterAP = enemySelected.counterAP;
}

//

function setEnemies(){
    $(".available-characters").removeClass("available-characters characters").addClass("enemies-available");
    $(".enemies").append($(".enemies-available"));
}

//
$(document).ready(function(){

    $("#obiwan").click(function() {

        if(charSelected == false){
            $("gametxt").empty();
            playerSelect(obiWan);
            charSelected = true;
            console.log(player);
            $("#obiwan").removeClass("available-characters").attr("your-character")
            $("#your-character").append($(this))
            setEnemies();
        }

        else if((charSelected == true) && (enemySelected == false)){
            if($("#obiwan").hasClass("enemy-character")) {
                $("gametxt").empty();
                defenderSelect(obiWan);
                enemySelected = true;
                $("#obiwan").removeClass("enemies").addClass("defender-char");
                $(".defender-char").append(this);
            }
        }
    });

    $("#quigon").click(function() {
        
        if(charSelected == false){
            $("gametxt").empty();
            playerSelect(quiGon);
            charSelected = true;
            console.log(player);
            $("#quigon").removeClass("available-characters").attr("your-character")
            $("#your-character").append($(this))
            setEnemies();
        }

        else if((charSelected == true) && (enemySelected == false)){
            if($("#quigon").hasClass("enemies")) {
                $("gametxt").empty();
                defenderSelect(quiGon);
                enemySelected = true;
                $("#quigon").removeClass("enemies").addClass("defender-char");
                $(".defender-char").append(this);
            }
        }
    });

    $("#maul").click(function() {
        
        if(charSelected == false){
            $("gametxt").empty();
            playerSelect(darthMaul);
            charSelected = true;
            console.log(player);
            $("#maul").removeClass("available-characters").attr("your-character")
            $("#your-character").append($(this))
            setEnemies();
        }
        
        else if((charSelected == true) && (enemySelected == false)){
            if($("#maul").hasClass("enemies")) {
                $("gametxt").empty();
                defenderSelect(darthMaul);
                enemySelected = true;
                $("#maul").removeClass("enemies").addClass("defender-char");
                $(".defender-char").append(this);
            }
        }
    });

    $("#sidious").click(function() {
        
        if(charSelected == false){
            $("gametxt").empty();
            playerSelect(darthSidious);
            charSelected = true;
            console.log(player);
            $("#sidious").removeClass("available-characters").attr("your-character")
            $("#your-character").append($(this))
            setEnemies();
        }

        else if((charSelected == true) && (enemySelected == false)){
            if($("#sidious").hasClass("enemies")) {
                $("gametxt").empty();
                defenderSelect(darthSidious);
                enemySelected = true;
                $("#sidious").removeClass("enemies").addClass("defender-char");
                $(".defender-char").append(this);
            }
        }
    });

    $("#attack").click(function(){
        console.log("You attacked!")

    });
});