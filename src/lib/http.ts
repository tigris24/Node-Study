// lib/https.ts
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface RequestOptions {
    method?: `GET` | `POST` | `PUT` | `DELETE`;
    body?: any
    headers?: Record<string, string>
}

export const Request = {
    async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
        const url = `${BASE_URL}${endpoint}`;
        const headers = {
            'Content-Type': 'application/json'
        }

        const response = await fetch(url, {
            method: options.method || 'GET',
            headers,
            body: options.body ? JSON.stringify(options.body) : undefined
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        return response.json()
    }
}