export interface Country {
    name: Name;
    tld: Array<string>;
    currencies: Currencies;
    subregion: string
    languages: Languages;
    capital: Array<string>
    region: string;
    population: number;
    flags: Flags;
    capitalInfo: CapitalInfo;
    borders: Array<string>
}

export interface CapitalInfo {
    latlng: number[];
}

export interface Currencies {
    [key: string]: Gtq;
}

export interface Gtq {
    name:   string;
    symbol: string;
}

export interface Flags {
    png: string;
    svg: string;
    alt: string;
}

export interface Languages {
    [key: string]: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: NativeName;
}

export interface NativeName {
    [key: string]: Translation;
}

export interface Translation {
    official: string;
    common:   string;
}
