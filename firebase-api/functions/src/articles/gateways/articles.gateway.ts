import {ArticleModel} from "../models/article.model";
import {
    DocumentReference,
    QueryDocumentSnapshot,
    QuerySnapshot,
    WriteResult
} from "@google-cloud/firestore";
import {BaseGateway} from "../../global/gateways/base.gateway";
import {parseJsonModel} from "../../global/helpers/json-parser";

export class ArticlesGateway extends BaseGateway {
    constructor() {
        super();

        this._collection = this._db.collection('articles');
    }

    // READ
    getArticles(startItemNo: number = 1, pageSize: number = 10): Promise<ArticleModel[]> {
        return this._collection
            .orderBy('name')
            .startAt(startItemNo)
            .limit(pageSize)
            .get()
            .then((articles: QuerySnapshot) => {
                // Load all articles from DB
                return articles.docs.map((doc: QueryDocumentSnapshot) => {
                    const article = doc.data();

                    return new ArticleModel(article._id, article.name, article.description);
                });
            });
    }

    getSpecificArticle(id: string): Promise<ArticleModel> {
        return this._collection
            .where('_id', '==', id)
            .get()
            .then((snapshot: QuerySnapshot) => {
                if (!snapshot || !snapshot.size) {
                    throw new Error('Could not find article with ID: ' + id);
                }

                const article = snapshot.docs[0].data();

                return new ArticleModel(
                    article._id,
                    article.name,
                    article.description
                );
            });
    }

    // WRITE
    setArticle(documentReference: DocumentReference, article: ArticleModel): Promise<WriteResult> {
        if (!documentReference) {
            throw new Error('You can only add a article to an existing document reference');
        }

        if (!article) {
            throw new Error('There was no \'article\' object passed in to add to the database');
        }

        const jsonifiedArticle = parseJsonModel(article);

        return documentReference
            .set(jsonifiedArticle);
    }
}
