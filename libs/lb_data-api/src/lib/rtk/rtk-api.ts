/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery, BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { API_URL, mlConstants } from "../../../../lb_utils/src/lib/constants";

// Flag to determine whether to use mock responses
const USE_MOCK = false; // Change this flag to toggle between mock and actual responses

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers: Headers) => {
    const defaultHeaders = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true"
    };
    Object.entries(defaultHeaders).forEach(([key, value]) => headers.set(key, value));
    return headers;
  },
});

const extractPrefix = (url: string): string => {
  const paramIndex = url.indexOf("URL_PARAM_");
  return paramIndex === -1 ? url : url.substring(0, paramIndex);
};

const getMockData = (url: string, method: string) => {
  const { apiUrls } = mlConstants;
  const apiEntry = Object.values(apiUrls).find(entry => 
    url.includes(extractPrefix(entry.url)) && entry[method]
  );
  if (!apiEntry) throw new Error(`No mock data found for ${method} ${url}`);
  return apiEntry[method];
};

const custom: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  if (USE_MOCK) {
    console.info({ args, api, extraOptions });
    const { url, method } = args as FetchArgs;
    return { data: getMockData(url, method) };
  }
  return await baseQuery(args, api, extraOptions);
};

export const makeApi: any = createApi({
  reducerPath: "apiReducer",
  baseQuery: custom,
  endpoints: () => ({}),
});

export const injectEndPointsWrapper = ({ endPointsData }: any) => 
  makeApi.injectEndpoints({
    endpoints: (builder: any) => getEndpoints({ builder, endPointsData }),
  });

const getParamUrl = (ep_url: string, body: any) => {
  const url = ep_url.replace("URL_PARAM", body.URL_PARAM);
  const { URL_PARAM, queryParams, ...restBody } = body;
  const queryString = queryParams ? `?${transformJsonToQueryStringParams(queryParams)}` : "";
  return { url: `${url}${queryString}`, restBody };
};

const getEndpoints = ({ builder, endPointsData }: any) => {
  const builderFnObj = { GET: "query" };
  return endPointsData.reduce((obj: any, e: any) => {
    const { ep_type, ep_name, ep_url } = e;
    const builderFn = builderFnObj[ep_type] || "mutation";
    obj[ep_name] = builder[builderFn](formQueryObj({ ep_url, ep_type }));
    return obj;
  }, {});
};

const appConstants = { HEADERS: {} };

const formQueryObj = ({ ep_url, ep_type }: { ep_url: string; ep_type: string }): any => ({
  query: (body: any) => {
    const queryObj: any = {
      method: ep_type,
      headers: { ...appConstants["HEADERS"] },
    };
    let ep_url_copy = ep_url;

    if (ep_type === "GET" || ep_type === "DELETE") {
      if (body?.["URL_PARAMS"]?.length) {
        body["URL_PARAMS"].forEach((v: string, i: number) => {
          ep_url_copy = ep_url_copy.replace(`URL_PARAM_${i}`, v);
        });
        queryObj["url"] = `${ep_url_copy}?${transformJsonToQueryStringParams(body.queryParams)}`;
      } else if (ep_url_copy.includes("URL_PARAM")) {
        const url = ep_url_copy.replace("URL_PARAM", body.URL_PARAM);
        queryObj["url"] = body?.queryParams ? `${url}?${transformJsonToQueryStringParams(body.queryParams)}` : url;
      }
    } else if (ep_type === "PUT") {
      queryObj["body"] = body;
      queryObj["url"] = body ? `${ep_url_copy}/${body?.id}` : ep_url_copy;
    } else {
      queryObj["body"] = body;
      if (ep_url_copy.includes("URL_PARAM")) {
        const { url, restBody } = getParamUrl(ep_url_copy, body);
        queryObj["url"] = url;
        queryObj["body"] = restBody;
      } else {
        queryObj["url"] = ep_url_copy;
      }
    }

    return queryObj;
  },
});

const transformJsonToQueryStringParams = (obj: Record<string, string>): string => 
  obj ? Object.entries(obj).map(([key, value]) => `${key}=${value}`).join("&") : "";
