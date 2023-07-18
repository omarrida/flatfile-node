/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * Any uploaded file of any type
 */
export interface File_ {
    id: Flatfile.FileId;
    /** Original filename */
    name: string;
    /** Extension of the file */
    ext: string;
    /** MIME Type of the file */
    mimetype: string;
    /** Text encoding of the file */
    encoding: string;
    /** Status of the file */
    status: Flatfile.ModelFileStatusEnum;
    /** The storage mode of file */
    mode?: Flatfile.Mode;
    /** Size of file in bytes */
    size: number;
    /** Number of bytes that have been uploaded so far (useful for progress tracking) */
    bytesReceived: number;
    /** Date the file was created */
    createdAt: string;
    /** Date the file was last updated */
    updatedAt: string;
    spaceId: Flatfile.SpaceId;
    workbookId?: Flatfile.WorkbookId;
    sheetId?: Flatfile.SheetId;
    actions?: Flatfile.Action[];
}
