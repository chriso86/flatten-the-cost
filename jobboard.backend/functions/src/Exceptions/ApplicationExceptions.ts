import {Exception} from "./Exception";
import {HttpResponseCode} from "./HttpResponseCode";

/* Internal Server Errors */

export const DOCUMENT_ADD_FAILED = (subject: string) => new Exception(
	HttpResponseCode.INTERNAL_SERVER_ERROR,
	`${subject} add failed`,
	`Failed to add new ${subject} to collection`
);
export const DOCUMENT_UPDATE_FAILED = (subject: string) => new Exception(
	HttpResponseCode.INTERNAL_SERVER_ERROR,
	`${subject} update failed`,
	`Failed to update existing ${subject}`
);
export const DOCUMENT_GET_ONE_FAILED = (subject: string) => new Exception(
	HttpResponseCode.INTERNAL_SERVER_ERROR,
	`Get ${subject} failed`,
	`Failed to retrieve the ${subject}`
);
export const DOCUMENT_GET_ALL_FAILED = (subject: string) => new Exception(
	HttpResponseCode.INTERNAL_SERVER_ERROR,
	`Get all ${subject}s failed`,
	`Failed to retrieve all of the ${subject}s in the collection`
);
export const DOCUMENT_DELETE_FAILED = (subject: string) => new Exception(
	HttpResponseCode.INTERNAL_SERVER_ERROR,
	`${subject} delete failed`,
	`Failed to delete the ${subject}`
);

// --------------------------------------------------------------------------//

/* Bad request Errors */

export const MISSING_APPLICATION_ID = new Exception(
	HttpResponseCode.BAD_REQUEST,
	'Missing Application ID',
	'No Application ID was found on the request.'
);
export const MISSING_JOB_ID = new Exception(
	HttpResponseCode.BAD_REQUEST,
	'Missing Job ID',
	'No Job ID was found on the request.'
);
export const MISSING_DOCUMENT_ID = new Exception(
	HttpResponseCode.BAD_REQUEST,
	'Missing Document ID',
	'No document ID was found on the request.'
);
export const MISSING_USER_ID = new Exception(
	HttpResponseCode.BAD_REQUEST,
	'Missing User ID',
	'No User ID was found on the request.'
);
export const MISSING_APPLICATION = new Exception(
	HttpResponseCode.BAD_REQUEST,
	'Missing Application Object',
	'No Application object was found on the request.'
);
export const MISSING_JOB = new Exception(
	HttpResponseCode.BAD_REQUEST,
	'Missing Job Object',
	'No Job object was found on the request.'
);
export const MISSING_DOCUMENT = new Exception(
	HttpResponseCode.BAD_REQUEST,
	'Missing Document Object',
	'No document object was found on the request.'
);
export const MISSING_USER = new Exception(
	HttpResponseCode.BAD_REQUEST,
	'Missing User Object',
	'No User object was found on the request.'
);

// --------------------------------------------------------------------------//

/* Not Found Errors */

export const APPLICATION_DOESNT_EXIST = new Exception(
	HttpResponseCode.NOT_FOUND,
	'Application doesn\'t exist',
	'Couldn\'t find the Application matching the ID in the collection'
);
export const JOB_DOESNT_EXIST = new Exception(
	HttpResponseCode.NOT_FOUND,
	'Job doesn\'t exist',
	'Couldn\'t find the Job matching the ID in the collection'
);
export const DOCUMENT_DOESNT_EXIST = new Exception(
	HttpResponseCode.NOT_FOUND,
	'Document doesn\'t exist',
	'Couldn\'t find the document matching the ID in the collection'
);
export const USER_DOESNT_EXIST = new Exception(
	HttpResponseCode.NOT_FOUND,
	'User doesn\'t exist',
	'Couldn\'t find the User matching the ID in the collection'
);

// --------------------------------------------------------------------------//

/* Unexpected exception */

export const UNEXPECTED_EXCEPTION = new Exception(
	HttpResponseCode.INTERNAL_SERVER_ERROR,
	'Unexpected error',
	'An unexpected error occurred'
);
