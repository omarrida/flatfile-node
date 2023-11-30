/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../../..";

/**
 * @example
 *     {}
 */
export interface ListFilesRequest {
    spaceId?: string;
    /**
     * Number of jobs to return in a page (default 20)
     */
    pageSize?: number;
    /**
     * Based on pageSize, which page of jobs to return
     */
    pageNumber?: number;
    /**
     * The storage mode of file to fetch, defaults to "import"
     */
    mode?: Flatfile.Mode;
}
