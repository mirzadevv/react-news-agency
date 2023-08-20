import { QueryFunctionContext } from "@tanstack/react-query";

export type Theme = {
  [key: string]: {
    [key: string]: string;
  };
};

export type FetchDataFunction = (context: QueryFunctionContext) => Promise<any>;
