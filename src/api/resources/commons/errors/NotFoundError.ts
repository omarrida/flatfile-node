/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors";
import { Flatfile } from "@flatfile/api-beta";

export class NotFoundError extends errors.FlatfileError {
    constructor(body: Flatfile.Error[]) {
        super({
            message: "NotFoundError",
            statusCode: 404,
            body: body,
        });
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}
