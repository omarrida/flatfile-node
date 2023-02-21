/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Flatfile } from "@flatfile/api-beta";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace Client {
    interface Options {
        environment?: environments.FlatfileEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * Event topics that the Flatfile Platform emits.
     */
    public async list(
        environmentId: Flatfile.EnvironmentId,
        request: Flatfile.ListEventsRequest = {}
    ): Promise<Flatfile.ListAllEventsResponse> {
        const { spaceId, domain, topic, since, pageSize, pageNumber, includeAcknowledged } = request;
        const _queryParams = new URLSearchParams();
        if (spaceId != null) {
            _queryParams.append("spaceId", spaceId);
        }

        if (domain != null) {
            _queryParams.append("domain", domain);
        }

        if (topic != null) {
            _queryParams.append("topic", topic);
        }

        if (since != null) {
            _queryParams.append("since", since);
        }

        if (pageSize != null) {
            _queryParams.append("pageSize", pageSize.toString());
        }

        if (pageNumber != null) {
            _queryParams.append("pageNumber", pageNumber.toString());
        }

        if (includeAcknowledged != null) {
            _queryParams.append("includeAcknowledged", includeAcknowledged.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/environments/${await serializers.EnvironmentId.jsonOrThrow(environmentId)}/events/`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.ListAllEventsResponse.parseOrThrow(
                _response.body as serializers.ListAllEventsResponse.Raw,
                { allowUnknownKeys: true }
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FlatfileError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
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
     * @throws {Flatfile.BadRequestError}
     * @throws {Flatfile.NotFoundError}
     */
    public async create(
        environmentId: Flatfile.EnvironmentId,
        request: Flatfile.Event
    ): Promise<Flatfile.EventResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/environments/${await serializers.EnvironmentId.jsonOrThrow(environmentId)}/events/`
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.Event.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.EventResponse.parseOrThrow(_response.body as serializers.EventResponse.Raw, {
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

    public async get(
        environmentId: Flatfile.EnvironmentId,
        eventId: Flatfile.EventId
    ): Promise<Flatfile.EventResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/environments/${await serializers.EnvironmentId.jsonOrThrow(
                    environmentId
                )}/events//${await serializers.EventId.jsonOrThrow(eventId)}`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.EventResponse.parseOrThrow(_response.body as serializers.EventResponse.Raw, {
                allowUnknownKeys: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FlatfileError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
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

    public async ack(environmentId: Flatfile.EnvironmentId, eventId: Flatfile.EventId): Promise<Flatfile.Success> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FlatfileEnvironment.Production,
                `/environments/${await serializers.EnvironmentId.jsonOrThrow(
                    environmentId
                )}/events//${await serializers.EventId.jsonOrThrow(eventId)}/ack`
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.Success.parseOrThrow(_response.body as serializers.Success.Raw, {
                allowUnknownKeys: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FlatfileError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
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
