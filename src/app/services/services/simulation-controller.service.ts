/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addCategorie } from '../fn/simulation-controller/add-categorie';
import { AddCategorie$Params } from '../fn/simulation-controller/add-categorie';
import { addQuestion } from '../fn/simulation-controller/add-question';
import { AddQuestion$Params } from '../fn/simulation-controller/add-question';
import { Categorie } from '../models/categorie';
import { getAllCategories } from '../fn/simulation-controller/get-all-categories';
import { GetAllCategories$Params } from '../fn/simulation-controller/get-all-categories';
import { getAllQuestions } from '../fn/simulation-controller/get-all-questions';
import { GetAllQuestions$Params } from '../fn/simulation-controller/get-all-questions';
import { Question } from '../models/question';
import { submitSimulation } from '../fn/simulation-controller/submit-simulation';
import { SubmitSimulation$Params } from '../fn/simulation-controller/submit-simulation';
import { updateQuestion } from '../fn/simulation-controller/update-question';
import { UpdateQuestion$Params } from '../fn/simulation-controller/update-question';

@Injectable({ providedIn: 'root' })
export class SimulationControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

    urlAdd='http://localhost:8080/simulation/addQ';
    urlApi = 'http://localhost:8080/simulation/allQuestions';
    urlAddCat = 'http://localhost:8080/simulation/addC';
    private apiUrl = 'http://localhost:8080/send-email'; // URL de votre API backend

    Question=[];
    Categorie=[];
    getData():Observable<Question[]> {
      return this.http.get<Question[]>(this.urlApi);
  }
    AddQuestion(Question: Question):Observable<Question>{
      return this.http.post<Question>(this.urlAdd,Question)
     }

     AddCategory(Categorie: Categorie):Observable<Categorie>{
      return this.http.post<Categorie>(this.urlAddCat,Categorie)
     }

     sendEmail(emailData: any): Observable<any> {
      return this.http.post(this.apiUrl, emailData);
    }

  /** Path part for operation `updateQuestion()` */
  static readonly UpdateQuestionPath = '/simulation/questionsup /{questionId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateQuestion()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateQuestion$Response(params: UpdateQuestion$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return updateQuestion(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateQuestion$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateQuestion(params: UpdateQuestion$Params, context?: HttpContext): Observable<void> {
    return this.updateQuestion$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `submitSimulation()` */
  static readonly SubmitSimulationPath = '/simulation/submit';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `submitSimulation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  submitSimulation$Response(params: SubmitSimulation$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return submitSimulation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `submitSimulation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  submitSimulation(params: SubmitSimulation$Params, context?: HttpContext): Observable<string> {
    return this.submitSimulation$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `addQuestion()` */
  static readonly AddQuestionPath = '/simulation/addQ';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addQuestion()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addQuestion$Response(params: AddQuestion$Params, context?: HttpContext): Observable<StrictHttpResponse<Question>> {
    return addQuestion(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addQuestion$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addQuestion(params: AddQuestion$Params, context?: HttpContext): Observable<Question> {
    return this.addQuestion$Response(params, context).pipe(
      map((r: StrictHttpResponse<Question>): Question => r.body)
    );
  }

  /** Path part for operation `addCategorie()` */
  static readonly AddCategoriePath = '/simulation/addC';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addCategorie()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCategorie$Response(params: AddCategorie$Params, context?: HttpContext): Observable<StrictHttpResponse<Categorie>> {
    return addCategorie(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addCategorie$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCategorie(params: AddCategorie$Params, context?: HttpContext): Observable<Categorie> {
    return this.addCategorie$Response(params, context).pipe(
      map((r: StrictHttpResponse<Categorie>): Categorie => r.body)
    );
  }

  /** Path part for operation `getAllQuestions()` */
  static readonly GetAllQuestionsPath = '/simulation/allQuestions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllQuestions()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllQuestions$Response(params?: GetAllQuestions$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Question>>> {
    return getAllQuestions(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllQuestions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllQuestions(params?: GetAllQuestions$Params, context?: HttpContext): Observable<Array<Question>> {
    return this.getAllQuestions$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Question>>): Array<Question> => r.body)
    );
  }

  /** Path part for operation `getAllCategories()` */
  static readonly GetAllCategoriesPath = '/simulation/allCategories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllCategories()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCategories$Response(params?: GetAllCategories$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Categorie>>> {
    return getAllCategories(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllCategories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCategories(params?: GetAllCategories$Params, context?: HttpContext): Observable<Array<Categorie>> {
    return this.getAllCategories$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Categorie>>): Array<Categorie> => r.body)
    );
  }

}
