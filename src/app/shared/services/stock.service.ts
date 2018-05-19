import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {StockQuoteRequest, StockQuote} from '../model/model';
import {CommonUtils} from '../utils/common-utils';

/* eslint-disable */
@Injectable()
export class StockService {
  private BASE_URI = '/api';

  private stockQuote: StockQuote;

  constructor(private http: HttpClient, public commonUtils: CommonUtils) {
  }

  public create(stockQuoteRequest: StockQuoteRequest): Observable<StockQuote> {
    return this.http
      .post(`${this.BASE_URI}/stock`, stockQuoteRequest)
      .map((response: StockQuote) => {
        this.stockQuote = response;
        return response;
      });
  }

  public list(): Observable<StockQuote> {
    return this.http.get(`${this.BASE_URI}/stock`)
      .map((stockQuote: StockQuote) => {
        this.stockQuote = stockQuote;
        return stockQuote;
      });
  }

  public details(stockId): Observable<StockQuote> {
    return this.http.put(`${this.BASE_URI}/stock/${stockId}/details`, {})
      .map((stockQuote: StockQuote) => {
        this.stockQuote = stockQuote;
        return stockQuote;
      });
  }
}
