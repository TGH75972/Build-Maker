const buildData = {
    "strength": {
        weapons: [
            { name: "Greatsword", image: "images/greatsword.png" },
            { name: "Colossal Sword", image: "images/colossal_sword.png" },
            { name: "Great Axe", image: "images/great_axe.png" }
        ],
        armor: [
            { name: "Lionel's Set", image: "images/lionels_set.png" },
            { name: "Bull-Goat Set", image: "images/bull_goat_set.png" },
            { name: "Banished Knight Set", image: "images/banished_knight_set.png" }
        ],
        description: "Focus on high damage and poise."
    },
    "dexterity": {
        weapons: [
            { name: "Estoc", image: "images/estoc.png" },
            { name: "Rapier", image: "images/rapier.png" },
            { name: "Twinblades", image: "images/twinblades.png" }
        ],
        armor: [
            { name: "Blaidd's Set", image: "images/blaidds_set.png" },
            { name: "Carian Knight Set", image: "images/carian_knight_set.png" }
        ],
        description: "Speed and finesse in combat."
    },
    "intelligence": {
        weapons: [
            { name: "Staff of Loss", image: "images/staff_of_loss.png" },
            { name: "Moonveil", image: "images/moonveil.png" },
            { name: "Glintstone Staff", image: "images/glintstone_staff.png" }
        ],
        armor: [
            { name: "Rennala's Set", image: "images/rennalas_set.png" },
            { name: "Snow Witch Set", image: "images/snow_witch_set.png" }
        ],
        description: "Harness the power of sorcery."
    },
    "faith": {
        weapons: [
            { name: "Cleric's Sacred Seal", image: "images/clerics_sacred_seal.png" },
            { name: "Dark Moon Ring", image: "images/dark_moon_ring.png" }
        ],
        armor: [
            { name: "White Mask", image: "images/white_mask.png" },
            { name: "Giant's Set", image: "images/giants_set.png" }
        ],
        description: "Channel divine strength."
    },
    "quality": {
        weapons: [
            { name: "Claymore", image: "images/claymore.png" },
            { name: "Erdtree Greatsword", image: "images/erdtree_greatsword.png" }
        ],
        armor: [
            { name: "Knight Set", image: "images/knight_set.png" },
            { name: "Grafted Set", image: "images/grafted_set.png" }
        ],
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
            <div class="result-section">
                <strong>Recommended Weapons:</strong>
                <ul>
                    ${build.weapons.map(weapon => `
                        <li>${weapon.name}
                            <img src="${weapon.image}" alt="${weapon.name}" class="result-image">
                        </li>`).join('')}
                </ul>
            </div>
            <div class="result-section">
                <strong>Recommended Armor:</strong>
                <ul>
                    ${build.armor.map(armor => `
                        <li>${armor.name}
                            <img src="${armor.image}" alt="${armor.name}" class="result-image">
                        </li>`).join('')}
                </ul>
            </div>
        `;
    } else {
        resultDiv.innerHTML = "Build type not found.";
    }
});
