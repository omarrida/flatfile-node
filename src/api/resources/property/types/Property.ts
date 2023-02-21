/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Flatfile } from "@flatfile/api-beta";

/**
 * @example
 *     Flatfile.Property.string({
 *         key: "code",
 *         label: "Product Code",
 *         description: "Unique identifier defining an individual product.",
 *         constraints: [Flatfile.Constraint.unique({
 *                 config: {
 *                     caseSensitive: false
 *                 }
 *             })],
 *         config: {
 *             size: Flatfile.StringConfigOptions.Tiny
 *         }
 *     })
 *
 * @example
 *     Flatfile.Property.number({
 *         key: "price",
 *         config: {
 *             decimalPlaces: 2
 *         }
 *     })
 *
 * @example
 *     Flatfile.Property.boolean({
 *         key: "editable",
 *         config: {
 *             allowIndeterminate: true
 *         }
 *     })
 *
 * @example
 *     Flatfile.Property.date({})
 *
 * @example
 *     Flatfile.Property.enum({
 *         key: "category",
 *         label: "Product Category",
 *         isArray: false,
 *         multi: true,
 *         config: {
 *             allowCustom: false,
 *             options: [{
 *                     value: 9,
 *                     label: "Kitchenware",
 *                     icon: "pots-and-pans",
 *                     color: "#f00000",
 *                     meta: {
 *                         "product_code_prefix": "KI-"
 *                     }
 *                 }, {
 *                     value: 9,
 *                     label: "Clothing",
 *                     meta: {
 *                         "product_code_prefix": "CL-"
 *                     }
 *                 }]
 *         }
 *     })
 *
 * @example
 *     Flatfile.Property.reference({
 *         key: "user reference",
 *         config: {
 *             ref: "/sheet/users/3",
 *             relationship: Flatfile.ReferencePropertyRelationship.HasMany,
 *             key: "id"
 *         }
 *     })
 */
export type Property =
    | Flatfile.Property.String
    | Flatfile.Property.Number
    | Flatfile.Property.Boolean
    | Flatfile.Property.Date_
    | Flatfile.Property.Enum
    | Flatfile.Property.Reference
    | Flatfile.Property._Unknown;

export declare namespace Property {
    interface String extends Flatfile.StringProperty, _Utils {
        type: "string";
    }

    interface Number extends Flatfile.NumberProperty, _Utils {
        type: "number";
    }

    interface Boolean extends Flatfile.BooleanProperty, _Utils {
        type: "boolean";
    }

    interface Date_ extends Flatfile.DateProperty, _Utils {
        type: "date";
    }

    interface Enum extends Flatfile.EnumProperty, _Utils {
        type: "enum";
    }

    interface Reference extends Flatfile.ReferenceProperty, _Utils {
        type: "reference";
    }

    interface _Unknown extends _Utils {
        type: void;
    }

    interface _Utils {
        _visit: <_Result>(visitor: Flatfile.Property._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        string: (value: Flatfile.StringProperty) => _Result;
        number: (value: Flatfile.NumberProperty) => _Result;
        boolean: (value: Flatfile.BooleanProperty) => _Result;
        date: (value: Flatfile.DateProperty) => _Result;
        enum: (value: Flatfile.EnumProperty) => _Result;
        reference: (value: Flatfile.ReferenceProperty) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const Property = {
    string: (value: Flatfile.StringProperty): Flatfile.Property.String => {
        return {
            ...value,
            type: "string",
            _visit: function <_Result>(this: Flatfile.Property.String, visitor: Flatfile.Property._Visitor<_Result>) {
                return Flatfile.Property._visit(this, visitor);
            },
        };
    },

    number: (value: Flatfile.NumberProperty): Flatfile.Property.Number => {
        return {
            ...value,
            type: "number",
            _visit: function <_Result>(this: Flatfile.Property.Number, visitor: Flatfile.Property._Visitor<_Result>) {
                return Flatfile.Property._visit(this, visitor);
            },
        };
    },

    boolean: (value: Flatfile.BooleanProperty): Flatfile.Property.Boolean => {
        return {
            ...value,
            type: "boolean",
            _visit: function <_Result>(this: Flatfile.Property.Boolean, visitor: Flatfile.Property._Visitor<_Result>) {
                return Flatfile.Property._visit(this, visitor);
            },
        };
    },

    date: (value: Flatfile.DateProperty): Flatfile.Property.Date_ => {
        return {
            ...value,
            type: "date",
            _visit: function <_Result>(this: Flatfile.Property.Date_, visitor: Flatfile.Property._Visitor<_Result>) {
                return Flatfile.Property._visit(this, visitor);
            },
        };
    },

    enum: (value: Flatfile.EnumProperty): Flatfile.Property.Enum => {
        return {
            ...value,
            type: "enum",
            _visit: function <_Result>(this: Flatfile.Property.Enum, visitor: Flatfile.Property._Visitor<_Result>) {
                return Flatfile.Property._visit(this, visitor);
            },
        };
    },

    reference: (value: Flatfile.ReferenceProperty): Flatfile.Property.Reference => {
        return {
            ...value,
            type: "reference",
            _visit: function <_Result>(
                this: Flatfile.Property.Reference,
                visitor: Flatfile.Property._Visitor<_Result>
            ) {
                return Flatfile.Property._visit(this, visitor);
            },
        };
    },

    _unknown: (value: { type: string }): Flatfile.Property._Unknown => {
        return {
            ...(value as any),
            _visit: function <_Result>(this: Flatfile.Property._Unknown, visitor: Flatfile.Property._Visitor<_Result>) {
                return Flatfile.Property._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(value: Flatfile.Property, visitor: Flatfile.Property._Visitor<_Result>): _Result => {
        switch (value.type) {
            case "string":
                return visitor.string(value);
            case "number":
                return visitor.number(value);
            case "boolean":
                return visitor.boolean(value);
            case "date":
                return visitor.date(value);
            case "enum":
                return visitor.enum(value);
            case "reference":
                return visitor.reference(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
