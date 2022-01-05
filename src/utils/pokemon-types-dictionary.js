const pokemonTypes = {
  bug: "bug_type_icon",
  dark: "dark_type_icon",
  dragon: "dragon_type_icon",
  electric: "electric_type_icon",
  fairy: "fairy_type_icon",
  fighting: "fighting_type_icon",
  fire: "fire_type_icon",
  flying: "flying_type_icon",
  ghost: "ghost_type_icon",
  grass: "grass_type_icon",
  ground: "ground_type_icon",
  ice: "ice_type_icon",
  normal: "normal_type_icon",
  poison: "poison_type_icon",
  psychic: "psychic_type_icon",
  rock: "rock_type_icon",
  steel: "steel_type_icon",
  water: "water_type_icon",
};

export const translateToSvg = (type) => {
  return pokemonTypes[type];
};
