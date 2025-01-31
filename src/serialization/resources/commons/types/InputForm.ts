/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Flatfile from "../../../../api";
import * as core from "../../../../core";

export const InputForm: core.serialization.ObjectSchema<serializers.InputForm.Raw, Flatfile.InputForm> =
    core.serialization.object({
        type: core.serialization.lazy(async () => (await import("../../..")).InputFormType),
        fields: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).InputField)
        ),
    });

export declare namespace InputForm {
    interface Raw {
        type: serializers.InputFormType.Raw;
        fields: serializers.InputField.Raw[];
    }
}
