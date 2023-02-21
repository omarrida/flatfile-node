/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Flatfile } from "@flatfile/api-beta";

/**
 * Record data validation messages
 */
export interface ValidationMessage {
    type?: Flatfile.ValidationType;
    source?: Flatfile.ValidationSource;
    message?: string;
}
