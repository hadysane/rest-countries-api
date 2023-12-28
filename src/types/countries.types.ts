interface Translations {
    [language: string]: {
      official: string;
      common: string;
    };
  }

export default interface Country {
  altSpellings: string[]
  area: number
  capital: string[]
  capitalInfo: {
    latlng: number[]
  }
  car: {
    signs: string[]
    side: string
  }
  cca2: string
  cca3: string
  ccn3: string
  coatOfArms: {
    png: string
    svg: string
  }
  continents: string[]
  currencies: {
    AUD: {
      name: string
      symbol: string
    }
  }
  demonyms: {
    eng: {
      official: string
      common: string
    }
  }
  flag: string
  flags: {
    png: string
    svg: string
  }
  idd: string
  root: string
  suffixes: string[]
  independent: boolean
  landlocked: boolean
  languages: {
    eng: string
  }
  latlng: number[]
  maps: {
    googleMaps: string
    openStreetMaps: string
  }
  name: {
    common: string
    nativeName: {
      eng: {
        official: string
        common: string
      }
    }
  }
  official: string
  population: number
  postalCode: {
    format: string
    regex: string
  }
  region: string
  startOfWeek: string
  status: string
  subregion: string
  timezones: string[]
  tld: string[]
  unMember: boolean
  translations: Translations;
}
