/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Flatfile } from "@flatfile/api-beta";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace Documents {
    interface Options {
        environment?: environments.FlatfileEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class Documents {
    constructor(private readonly options: Documents.Options) {}

    /**
     * Returns all documents for a space
     * @throws {Flatfile.BadRequestError}
     * @throws {Flatfile.NotFoundError}
     */
    public async list(spaceId: Flatfile.SpaceId): Promise<Flatfile.ListDocumentsResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/spaces/${await serializers.SpaceId.jsonOrThrow(spaceId)}/documents`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.ListDocumentsResponse.parseOrThrow(
                _response.body as serializers.ListDocumentsResponse.Raw,
                { allowUnknownKeys: true }
            );
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Flatfile.BadRequestError(
                        await serializers.BadRequestError.parseOrThrow(
                            _response.error.body as serializers.BadRequestError.Raw
                        )
                    );
                case 404:
                    throw new Flatfile.NotFoundError(
                        await serializers.NotFoundError.parseOrThrow(
                            _response.error.body as serializers.NotFoundError.Raw
                        )
                    );
                default:
                    throw new errors.FlatfileError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlatfileError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FlatfileTimeoutError();
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Add a new document to the space
     * @throws {Flatfile.BadRequestError}
     * @throws {Flatfile.NotFoundError}
     */
    public async create(
        spaceId: Flatfile.SpaceId,
        request: Flatfile.DocumentConfig
    ): Promise<Flatfile.DocumentResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/spaces/${await serializers.SpaceId.jsonOrThrow(spaceId)}/documents`
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.DocumentConfig.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.DocumentResponse.parseOrThrow(_response.body as serializers.DocumentResponse.Raw, {
                allowUnknownKeys: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Flatfile.BadRequestError(
                        await serializers.BadRequestError.parseOrThrow(
                            _response.error.body as serializers.BadRequestError.Raw
                        )
                    );
                case 404:
                    throw new Flatfile.NotFoundError(
                        await serializers.NotFoundError.parseOrThrow(
                            _response.error.body as serializers.NotFoundError.Raw
                        )
                    );
                default:
                    throw new errors.FlatfileError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlatfileError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FlatfileTimeoutError();
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns a single document
     * @throws {Flatfile.BadRequestError}
     * @throws {Flatfile.NotFoundError}
     */
    public async get(spaceId: Flatfile.SpaceId, documentId: Flatfile.DocumentId): Promise<Flatfile.DocumentResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/spaces/${await serializers.SpaceId.jsonOrThrow(
                    spaceId
                )}/documents/${await serializers.DocumentId.jsonOrThrow(documentId)}`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.DocumentResponse.parseOrThrow(_response.body as serializers.DocumentResponse.Raw, {
                allowUnknownKeys: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Flatfile.BadRequestError(
                        await serializers.BadRequestError.parseOrThrow(
                            _response.error.body as serializers.BadRequestError.Raw
                        )
                    );
                case 404:
                    throw new Flatfile.NotFoundError(
                        await serializers.NotFoundError.parseOrThrow(
                            _response.error.body as serializers.NotFoundError.Raw
                        )
                    );
                default:
                    throw new errors.FlatfileError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlatfileError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FlatfileTimeoutError();
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * updates a single document, for only the body and title
     * @throws {Flatfile.BadRequestError}
     * @throws {Flatfile.NotFoundError}
     */
    public async update(
        spaceId: Flatfile.SpaceId,
        documentId: Flatfile.DocumentId,
        request: Flatfile.DocumentConfig
    ): Promise<Flatfile.DocumentResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/spaces/${await serializers.SpaceId.jsonOrThrow(
                    spaceId
                )}/documents/${await serializers.DocumentId.jsonOrThrow(documentId)}`
            ),
            method: "PATCH",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.DocumentConfig.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.DocumentResponse.parseOrThrow(_response.body as serializers.DocumentResponse.Raw, {
                allowUnknownKeys: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Flatfile.BadRequestError(
                        await serializers.BadRequestError.parseOrThrow(
                            _response.error.body as serializers.BadRequestError.Raw
                        )
                    );
                case 404:
                    throw new Flatfile.NotFoundError(
                        await serializers.NotFoundError.parseOrThrow(
                            _response.error.body as serializers.NotFoundError.Raw
                        )
                    );
                default:
                    throw new errors.FlatfileError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlatfileError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FlatfileTimeoutError();
            case "unknown":
                throw new errors.FlatfileError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
