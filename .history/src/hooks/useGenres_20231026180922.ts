import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre {
    id: number;
    name: string;
}

const useGenres = () => useData<Genre>('/genres')

export default useGenres;