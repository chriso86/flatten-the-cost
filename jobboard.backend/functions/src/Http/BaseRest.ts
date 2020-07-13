import {Db} from '../Common/Db';
import * as admin from 'firebase-admin';
import * as Exception from '../Exceptions/ApplicationExceptions';
import {BaseEntity} from '../Common/BaseEntity';
import {PagedRequest} from "../Common/PagedRequest";
import {BaseClassConverter} from "../Common/BaseClassConverter";

export class BaseRest<T extends BaseEntity> {
    protected collection: admin.firestore.CollectionReference<admin.firestore.DocumentData>;
    protected converter: BaseClassConverter<T>;
    protected totalItems: number = 0;

    constructor(collectionName: string, converter: BaseClassConverter<T>) {
        const db = Db.get();

        this.collection = db.collection(collectionName);
        this.converter = converter;

        this.collection.get()
            .then((snapshot: admin.firestore.QuerySnapshot) => {
                this.totalItems = snapshot.size;
            });
    }

    /***
     * Add a document at a new reference and return the new document ID
     * @param documentData
     */
    public async add(documentData: T): Promise<string> {
        const documentReference = this.collection.doc();

        await documentReference.set(documentData)
            .catch(_ => {
                throw Exception.DOCUMENT_ADD_FAILED;
            });

        return documentReference.id;
    }

    /***
     * Add a document at a new reference and return the write result
     * @param documentData
     * @param id
     */
    public async update(documentData: T, id: string): Promise<admin.firestore.WriteResult>  {
        const document = this.collection.doc(id);

        return await document.set(documentData)
            .catch(_ => {
                throw Exception.DOCUMENT_UPDATE_FAILED;
            });
    }

    /***
     * Return a document matching a document reference or null if the document doesn't exist
     * @param id
     */
    public async getOne(id: string): Promise<T | null> {
        let item: T | null = null;

        await this.collection
            .doc(id)
            .get()
            .then((doc: admin.firestore.DocumentSnapshot) => {
                if (doc.exists) {
                    item = doc.data() as T;
                }
            })
            .catch(_ => {
                throw Exception.DOCUMENT_GET_ONE_FAILED;
            });

        return item;
    }

    /***
     * Return all documents inside the collection
     */
    public async getAll(pagedRequest: PagedRequest): Promise<T[]> {
        let items: T[] = [];

        await this.collection
            .offset(pagedRequest.noToSkip)
            .limit(pagedRequest.pageSize)
            .get()
            .then((snapshot: admin.firestore.QuerySnapshot) => {
                const docs = snapshot.docs;

                if (docs && docs.length) {
                    items = docs.map(doc => {
                        return this.converter.fromFirestore(doc);
                    });
                }
            })
            .catch(_ => {
                throw Exception.DOCUMENT_GET_ALL_FAILED;
            });

        return items;
    }

    /***
     * Removes a document with ID from collection and returns success boolean
     * @param id
     */
    public async remove(id: string): Promise<boolean> {
        await this.collection.doc(id)
            .delete()
            .catch(_ => {
                throw Exception.DOCUMENT_DELETE_FAILED;
            });

        return true;
    }
}
