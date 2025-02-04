/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

/**
 * A single row of data in a Sheet
 *
 * @example
 *     {
 *         "firstName": {
 *             value: undefined,
 *             messages: [],
 *             valid: true
 *         },
 *         "lastName": {
 *             value: undefined,
 *             messages: [],
 *             valid: true
 *         },
 *         "email": {
 *             value: undefined,
 *             messages: [],
 *             valid: true
 *         }
 *     }
 */
export type RecordData = Record<string, Flatfile.CellValue>;
