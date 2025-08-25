// Export all types
export * from './types.js';

// Utility functions
export const formatTimestamp = (date: Date = new Date()): string => {
    return date.toISOString();
};

export const createApiResponse = <T>(
    data: T,
    message?: string,
    success: boolean = true
): import('./types.js').ApiResponse<T> => {
    return {
        data,
        message,
        success,
        timestamp: formatTimestamp(),
    };
};

export const createApiError = (
    message: string,
    success: boolean = false
): import('./types.js').ApiResponse => {
    return {
        message,
        success,
        timestamp: formatTimestamp(),
    };
};
