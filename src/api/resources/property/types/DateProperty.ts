/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Flatfile } from "@flatfile/api-beta";

/**
 * Store a field as a GMT date. Data hooks must convert this value into a `YYYY-MM-DD` format in order for it to be considered a valid value. Datetime should be a separate and future supported value as it must consider timezone.
 */
export interface DateProperty extends Flatfile.BaseProperty {}
