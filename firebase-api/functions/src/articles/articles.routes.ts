import * as express from "express";
import {JsonResponse} from "../global/models/json-response.model";
import {ArticleModel} from "./models/article.model";
import {ArticlesGateway} from "./gateways/articles.gateway";
import {Request, Response} from "firebase-functions";
import {PAGING} from "../global/constants";
import {calculatePagingStart} from "../global/helpers/paging";

export const articlesRouter = express.Router();
const articlesGateway: ArticlesGateway = new ArticlesGateway();

/**
 * Get a single article
 *
 * @param(optional) {string} articleId               The ID of the article to retrieve
 */
articlesRouter.get('/GetArticle', (request: Request, response: Response) => {
    const articleId = request.query.articleId;

    // Return single question
    if (articleId) {
        articlesGateway.getSpecificArticle(articleId)
            .then((article: ArticleModel) => {
                response.send(
                    new JsonResponse(article)
                );
            });
    }
});

/**
 * Get a list of articles
 *
 * @param {string} pageSize                 The number of items on a page
 * @param {string} pageNo                   The page number to get
 */
articlesRouter.get('/GetAllArticles', (request: Request, response: Response) => {
    // Return multiple tags
    const pageSize: number = parseInt(request.query.pageSize|| PAGING.pageSize);
    const pageNo: number = parseInt(request.query.pageNo || PAGING.firstPageDefault);
    const startItemNo = calculatePagingStart(pageSize, pageNo);

    articlesGateway.getArticles(startItemNo, pageSize)
        .then((questions: ArticleModel[] | void) => {
            response.send(
                new JsonResponse(questions)
            );
        });
});

/**
 * Add a new article
 *
 * @param {string} name                The name of the new article
 * @param {string} description         The description of the new article
 */
articlesRouter.post('/AddArticle', (request: Request, response: Response) => {
    const name = request.body.name;
    const description = request.body.description;
    const createdBy = request.body.userId;

    const newDocumentSpace = articlesGateway.getNewDocumentReference();
    const mappedArticle = new ArticleModel(newDocumentSpace.id, name, description);

    if (newDocumentSpace && mappedArticle) {
        mappedArticle.modifyCreated(createdBy);

        articlesGateway.setArticle(newDocumentSpace, mappedArticle)
            .then(() => {
                response.send(
                    new JsonResponse(mappedArticle._id)
                );
            });
    }
});
