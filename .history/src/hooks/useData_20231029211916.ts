import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError, AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}