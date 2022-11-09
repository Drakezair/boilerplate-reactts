interface Character {
  name: string;
  gender: string;
  birthYear: string;
  planet: string;
}

interface CharacterFromApi {
  count: number;
  next: string | null;
  previous: string | null;
  results: [
    {
      name: string;
      height: string;
      mass: string;
      hair_color: string;
      skin_color: string;
      eye_color: string;
      birth_year: string;
      gender: string;
      homeworld: string;
      films: string[];
      species: unknown;
      vehicles: string[];
      starships: string[];
      created: string;
      edited: string;
      url: string;
    }
  ];
}

interface PlanetFromApi {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export { Character, CharacterFromApi, PlanetFromApi };
