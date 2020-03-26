import {TagModel} from "../models/tag.model";
import {
    DocumentReference,
    QueryDocumentSnapshot,
    QuerySnapshot,
    WriteResult
} from "@google-cloud/firestore";
import {BaseGateway} from "../../global/gateways/base.gateway";
import {parseJsonModel} from "../../global/helpers/json-parser";

export class TagsGateway extends BaseGateway {
    constructor() {
        super();

        this._collection = this._db.collection('tags');
        this._collectionAggregate = this._db.collection('tagsCount');
    }

    // READ
    searchTags(search: string): Promise<TagModel[]> {
        return this._collectionAggregate
            .orderBy('count', 'desc')
            .get()
            .then((tags: QuerySnapshot) => {
                // Load all tags from DB
                return tags.docs.map((doc: QueryDocumentSnapshot) => {
                    const tag = doc.data();

                    return new TagModel(
                        tag._id,
                        'NODATA',
                        tag.description
                    );
                }).filter(tag => {
                    return tag.description.indexOf(search) > -1;
                })
            });
    }

    getTagsWithPopularity() {
        return this._collectionAggregate
            .orderBy('count', 'desc')
            .startAt(1)
            .limit(17)
            .get()
            .then((tags: QuerySnapshot) => {
                // Load all tags with counts from DB
                return tags.docs.map((doc: QueryDocumentSnapshot) => {
                    const tag = doc.data();

                    return {
                        description: tag.description,
                        count: tag.count
                    };
                });
            });
    }

    // WRITE
    setTag(documentReference: DocumentReference, tag: TagModel): Promise<WriteResult> {
        if (!documentReference) {
            throw new Error('You can only add a tag to an existing document reference');
        }

        if (!tag) {
            throw new Error('There was no \'tag\' object passed in to add to the database');
        }

        tag._id = documentReference.id;

        const jsonifiedTag = parseJsonModel(tag);

        return documentReference
            .set(jsonifiedTag);
    }
}
