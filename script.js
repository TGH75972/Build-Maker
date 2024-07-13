const buildData = {
    "strength": {
        weapons: ["Greatsword", "Colossal Sword", "Great Axe"],
        armor: ["Lionel's Set", "Bull-Goat Set", "Banished Knight Set"],
        description: "Focus on high damage and poise."
    },
    "dexterity": {
        weapons: ["Estoc", "Rapier", "Twinblades"],
        armor: ["Blaidd's Set", "Carian Knight Set"],
        description: "Speed and finesse in combat."
    },
    "intelligence": {
        weapons: ["Staff of Loss", "Moonveil", "Glintstone Staff"],
        armor: ["Rennala's Set", "Snow Witch Set"],
        description: "Harness the power of sorcery."
    },
    "faith": {
        weapons: ["Cleric's Sacred Seal", "Dark Moon Ring"],
        armor: ["White Mask", "Giant's Set"],
        description: "Channel divine strength."
    },
    "quality": {
        weapons: ["Claymore", "Erdtree Greatsword"],
        armor: ["Knight Set", "Grafted Set"],
        description: "Balanced approach to combat."
    }
};

document.getElementById("getBuild").addEventListener("click", function() {
    const buildType = document.getElementById("buildType").value;
    const resultDiv = document.getElementById("result");
    const build = buildData[buildType];

    if (build) {
        resultDiv.innerHTML = `
            <h2>${buildType.charAt(0).toUpperCase() + buildType.slice(1)} Build</h2>
            <p>${build.description}</p>
            <strong>Recommended Weapons:</strong>
            <ul>
                ${build.weapons.map(weapon => `<li>${weapon}</li>`).join('')}
            </ul>
            <strong>Recommended Armor:</strong>
            <ul>
                ${build.armor.map(armor => `<li>${armor}</li>`).join('')}
            </ul>
        `;
    } else {
        resultDiv.innerHTML = "Build type not found.";
    }
});
