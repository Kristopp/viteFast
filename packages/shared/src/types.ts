// Common API types
export interface ApiResponse<T = any> {
    data?: T;
    message?: string;
    success: boolean;
    timestamp: string;
}

// Health check types
export interface HealthResponse {
    status: string;
    timestamp: string;
}

// Hello endpoint types
export interface HelloResponse {
    message: string;
    timestamp?: string;
}

// User types (for future use)
export interface User {
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
}

// AI Agent types (for future use)
export interface AgentMessage {
    id: string;
    role: 'user' | 'assistant' | 'system';
    content: string;
    timestamp: string;
}

export interface AgentConversation {
    id: string;
    messages: AgentMessage[];
    createdAt: string;
    updatedAt: string;
}
