let pokemon = {
    "image": "https://serebii.net/scarletviolet/pokemon/978.png",
    "evolution": {
        "basic": "greattusk"
    },
    "height": "2.2m",
    "egg_groups": "cannot breed",
    "catchrate": "30",
    "eggsteps": 12800,
    "abilities": "\n\t\t\t\nProtosynthesis: Boosts the Pokémon's most proficient stat in harsh sunlight or if the Pokémon is holding Booster Energy. \n\t\t",
    "stats": "Base Stats - Total: 570\n115\n131\n131\n53\n53\n87",
    "scarlet_location": "Area Zero",
    "violet_location": "Trade from Scarlet",
    "scarlet_exlusive": true,
    "violet_exlusive": false,
    "classification": "Paradox Pokémon",
    "paradox": true,
    "dexentry": "\n\t\n\t\tFlavor Text\n\t\n\t\tScarlet\n\t\tSightings of this Pokémon have occurred in recent years. The name Great Tusk was taken from a creature listed in a certain book.\n\t\n\t\tViolet\n\t\tThis creature resembles a mysterious Pokémon that, according to a paranormal magazine, has lived since ancient times.\n\t"
}
console.log(pokemon)
document.getElementById('name').innerHTML = pokemon.evolution.basic
document.getElementById('classification').innerHTML = '&#127818;'+pokemon.classification
// violet 127815, scarlet 127818
// max image height 250
document.getElementById('image').src = pokemon.image


let height = 160 * 1.7/parseFloat(pokemon.height);
if(height>600){
    // if height really small like 0.5m then scale image smaller
    document.getElementById('image').style.height = 250 * 600/height;
    height=600;
}
document.getElementById('trainer').style.height = height;
pokemon.stats = pokemon.stats.replace('Base Stats - Total:','<br>BST')
pokemon.stats = pokemon.stats.replace('\n','<br>HP&nbsp ')
pokemon.stats = pokemon.stats.replace('\n','<br>ATK ')
pokemon.stats = pokemon.stats.replace('\n','<br>DEF ')
pokemon.stats = pokemon.stats.replace('\n','<br>SPA ')
pokemon.stats = pokemon.stats.replace('\n','<br>SPD ')
pokemon.stats = pokemon.stats.replace('\n','<br>SPE ')
document.getElementById('height').innerHTML = pokemon.height + pokemon.stats//.replaceAll('\n','<br>')

pokemon.dexentry = pokemon.dexentry.replace('Flavor Text','')
pokemon.dexentry = pokemon.dexentry.replace('\n\t\n\t\tScarlet\n\t\t','')
document.getElementById('dexentry').innerHTML = pokemon.dexentry.replace('\n\t\n\t\tViolet\n\t\t','<br><br>')


// select ability names /\\n[\w ]+:/g
// select ability effect /:[^:]+\n/g

// ability parsing
text2 = pokemon.abilities.replaceAll('Hidden Ability: ','')
text2 = text2.replaceAll(": ",'<div class="ability">') // start
text2 = text2.replaceAll(" \n\t\t",'</div><br>') // end
text2 = text2.replaceAll(" \n",'</div>') // middle, this order matters cus above also uses \n
document.getElementById('abilities').innerHTML = text2

let typecolors = {
    Normal: 'Wheat',
    Fire: 'Red',
    Water: 'Blue',
    Grass: 'Green',
    Electric: 'Yellow',
    Ice: 'PaleTurquoise',
    Fighting: 'Brown',
    Poison: 'DarkViolet',
    Ground: 'Orange',
    Flying: 'LightCyan',
    Psychic: 'MediumOrchid',
    Bug: 'Olive',
    Rock: 'Tan',
    Ghost: 'DarkSlateBlue',
    Dark: 'MidnightBlue',
    Dragon: 'Navy',
    Steel: 'LightSlateGrey',
    Fairy: 'LightPink',
}
document.body.style.backgroundImage = 'linear-gradient(brown, orange)';


for([i, color] of Object.entries(typecolors)){
    //style(color)
}
function style(color){
    setTimeout(function(){ document.body.style.backgroundImage = "linear-gradient("+color.toLowerCase()+", white)"; console.log(color)}, 1000);
}