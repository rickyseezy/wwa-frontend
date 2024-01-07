





export default class Countries {
  data: any;
  constructor(data: ({ id: number; name: string; iso3: string; iso2: string; numeric_code: string; phone_code: string; capital: string; currency: string; currency_name: string; currency_symbol: string; tld: string; native: string; region: string; region_id: string; subregion: string; subregion_id: string; nationality: string; timezones: { zoneName: string; gmtOffset: number; gmtOffsetName: string; abbreviation: string; tzName: string; }[]; translations: { kr: string; "pt-BR": string; pt: string; nl: string; hr: string; fa: string; de: string; es: string; fr: string; ja: string; it: string; cn: string; tr: string; }; latitude: string; longitude: string; emoji: string; emojiU: string; } | { id: number; name: string; iso3: string; iso2: string; numeric_code: string; phone_code: string; capital: string; currency: string; currency_name: string; currency_symbol: string; tld: string; native: string; region: string; region_id: string; subregion: string; subregion_id: string; nationality: string; timezones: { zoneName: string; gmtOffset: number; gmtOffsetName: string; abbreviation: string; tzName: string; }[]; translations: { kr: string; "pt-BR": string; pt: string; fa: string; de: string; fr: string; it: string; cn: string; tr: string; nl?: undefined; hr?: undefined; es?: undefined; ja?: undefined; }; latitude: string; longitude: string; emoji: string; emojiU: string; } | { id: number; name: string; iso3: string; iso2: string; numeric_code: string; phone_code: string; capital: string; currency: string; currency_name: string; currency_symbol: string; tld: string; native: string; region: string; region_id: string; subregion: string; subregion_id: string; nationality: string; timezones: { zoneName: string; gmtOffset: number; gmtOffsetName: string; abbreviation: string; tzName: string; }[]; translations: { kr: string; "pt-BR": string; pt: string; nl: string; fa: string; de: string; fr: string; it: string; cn: string; tr: string; hr?: undefined; es?: undefined; ja?: undefined; }; latitude: string; longitude: string; emoji: string; emojiU: string; } | { id: number; name: string; iso3: string; iso2: string; numeric_code: string; phone_code: string; capital: string; currency: string; currency_name: string; currency_symbol: string; tld: string; native: string; region: string; region_id: string; subregion: string; subregion_id: string; nationality: string; timezones: { zoneName: string; gmtOffset: number; gmtOffsetName: string; abbreviation: string; tzName: string; }[]; translations: { kr: string; "pt-BR": string; pt: string; nl: string; hr: string; fa: string; de: string; es: string; fr: string; ja: string; cn: string; tr: string; it?: undefined; }; latitude: string; longitude: string; emoji: string; emojiU: string; } | { id: number; name: string; iso3: string; iso2: string; numeric_code: string; phone_code: string; capital: string; currency: string; currency_name: string; currency_symbol: string; tld: string; native: string; region: string; region_id: string; subregion: string; subregion_id: string; nationality: string; timezones: { zoneName: string; gmtOffset: number; gmtOffsetName: string; abbreviation: string; tzName: string; }[]; translations: { kr: string; cn: string; tr: string; "pt-BR"?: undefined; pt?: undefined; nl?: undefined; hr?: undefined; fa?: undefined; de?: undefined; es?: undefined; fr?: undefined; ja?: undefined; it?: undefined; }; latitude: string; longitude: string; emoji: string; emojiU: string; } | { id: number; name: string; iso3: string; iso2: string; numeric_code: string; phone_code: string; capital: string; currency: string; currency_name: string; currency_symbol: string; tld: string; native: string; region: string; region_id: string; subregion: string; subregion_id: string; nationality: string; timezones: { zoneName: string; gmtOffset: number; gmtOffsetName: string; abbreviation: string; tzName: string; }[]; translations: { kr: string; "pt-BR": string; pt: string; nl: string; fa: string; de: string; es: string; fr: string; ja: string; it: string; cn: string; tr: string; hr?: undefined; }; latitude: string; longitude: string; emoji: string; emojiU: string; })[]) {
    this.data = data;
  }

  conutryOceania() {
    return this.data.reduce((_prev = [], _curr: { region: any; id: any; name: any; }) => {
      const { region, id, name } = _curr;
      if (region === "Oceania") {
        _prev.push({ region, id, name });
      }
      return _prev;
    }, []);
  }

  conutryAfrica() {
    return this.data.reduce((_prev = [], _curr: { region: any; id: any; name: any; }) => {
      const { region, id, name } = _curr;
      if (region === "Africa") {
        _prev.push({ region, id, name });
      }
      return _prev;
    }, []);
  }

  conutryEurope() {
    return this.data.reduce((_prev = [], _curr: { region: any; id: any; name: any; }) => {
      const { region, id, name } = _curr;
      if (region === "Europe") {
        _prev.push({ region, id, name });
      }
      return _prev;
    }, []);
  }

  conutryAsia() {

    return this.data.reduce((_prev = [], _curr: { region: any; id: any; name: any; }) => {
      const { region, id, name } = _curr;
      if (region === "Asia") {
        _prev.push({ region, id, name });
      }
      return _prev;
    }, []);
  }
  countryAmericaNorth() {

    return this.data.reduce((_prev = [], _curr: { region: any; id: any; name: any;subregion }) => {
      const { region, id, name, subregion } = _curr;
      if (subregion === "Northern America") {
        _prev.push({ region , id, name });
      }
      return _prev;
    }, []);
  }

  countryAmericaSouth() {

    return this.data.reduce((_prev = [], _curr: { region: any; id: any; name: any;subregion }) => {
      const { region, id, name, subregion } = _curr;
      if (subregion === "South America") {
        _prev.push({ region, id, name });
      }
      return _prev;
    }, []);
  }


  countryAmericaCentral() {

    return this.data.reduce((_prev = [], _curr: { region: any; id: any; name: any;subregion }) => {
      const { region, id, name, subregion } = _curr;
      if (subregion === "Central America") {
        _prev.push({ region, id, name });
      }
      return _prev;
    }, []);
  }

  find(id: any){
   return this.data.find((countries: { id: any; }) => countries.id === id )
  }
}
