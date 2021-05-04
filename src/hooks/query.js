import { useLocation } from '@reach/router'

export const useQuery = () => {
    const query = new URLSearchParams(useLocation().search);
    return {
        query
    }
};