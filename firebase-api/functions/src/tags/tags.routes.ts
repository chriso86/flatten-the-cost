import * as express from 'express';
import {TagsGateway} from "./gateways/tags.gateway";
import {TagModel} from "./models/tag.model";
import {JsonResponse} from "../global/models/json-response.model";
import {Request, Response} from "firebase-functions";

export const tagsRouter = express.Router();
const tagsGateway: TagsGateway = new TagsGateway();

/**
 * Search a list of tags matching a string part
 *
 * @param {string} search            The search part that the tag should contain
 */
tagsRouter.get('/GetTags', (request: Request, response: Response) => {
    const search = request.query.search;

    if (search) {
        tagsGateway.searchTags(search)
            .then((tags: TagModel[] | void) => {
                response.send(
                    new JsonResponse(tags)
                );
            });
    } else {
        response.send([]);
    }
});

/**
 * Add a new tag
 *
 * @param {string} description             The tag description
 * @param {string} articleId               The article ID that it is applied to
 * @param {string} userId                  The user ID of the person who added it
 */
tagsRouter.post('/AddTag', (request: Request, response: Response) => {
    const description = request.body.description;
    const articleId = request.body.articleId;
    const createdBy = request.body.userId;

    const newDocumentSpace = tagsGateway.getNewDocumentReference();
    const mappedTag = new TagModel(
        newDocumentSpace.id,
        articleId,
        description
    );

    if (newDocumentSpace && mappedTag) {
        mappedTag.modifyCreated(createdBy);

        tagsGateway.setTag(newDocumentSpace, mappedTag)
            .then(() => {
                response.send(
                    new JsonResponse(mappedTag._id)
                );
            });
    }
});
