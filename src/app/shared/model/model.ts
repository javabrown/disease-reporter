export class StockQuoteRequest {
  constructor(public stockCode?: string) {}
}

export class StockQuote {
  constructor(public id: number, public name?: string, public status?: string, public creationDate?: string, public errors?: any) {}
}

export class Location {
  constructor(public locationId?: string, public nativeName?: string, 
              public englishName?: string, public isDisplayable?: string, public countryCode?: string,
			  public latitude?: string, public longitude?: string, public aitportCode?: string,
			  public errors?: any) {}
}