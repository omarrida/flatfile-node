/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flatfile from "../../..";

export interface FindAndReplaceJobConfig {
    /** The filter to apply to the records */
    filter?: Flatfile.Filter;
    /** The field to filter on */
    filterField?: Flatfile.FilterField;
    /** The value to search for */
    searchValue?: Flatfile.SearchValue;
    /** The field to search for the search value in */
    searchField?: Flatfile.SearchField;
    /** The FFQL query to filter records */
    q?: string;
    /**
     * The Record Ids param (ids) is a list of record ids that can be passed to several record endpoints allowing the user to identify specific records to INCLUDE in the query, or specific records to EXCLUDE, depending on whether or not filters are being applied. When passing a query param that filters the record dataset, such as 'searchValue', or a 'filter' of 'valid' | 'error' | 'all', the 'ids' param will EXCLUDE those records from the filtered results. For basic queries that do not filter the dataset, passing record ids in the 'ids' param will limit the dataset to INCLUDE just those specific records
     *
     */
    ids?: Flatfile.RecordId[];
    /** A value to find for a given field in a sheet. Wrap the value in "" for exact match */
    find?: Flatfile.CellValueUnion;
    /** The value to replace found values with */
    replace?: Flatfile.CellValueUnion;
    /** A unique key used to identify a field in a sheet */
    fieldKey: string;
}
