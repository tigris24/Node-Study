// app/page.tsx
'use client'

import React, { useState } from 'react';
import {Request} from "../lib/http";

export default function Home() {
    const [response, setResponse] = useState<any>(null)

    const testGet = async () => {
        try {
            const result = await Request.request('/api/test')
            setResponse(result)
        } catch (error) {
            console.error('GET Error:', error)
        }
    }

    const testPost = async () => {
        try {
            const result = await Request.request('/api/test', {
                method: 'POST',
                body: { sampleData: '테스트 데이터' }
            })
            setResponse(result)
        } catch (error) {
            console.error('POST Error:', error)
        }
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl mb-4">로컬 HTTP 테스트</h1>

            <div className="flex gap-4 mb-8">
                <button
                    onClick={testGet}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    GET 테스트
                </button>

                <button
                    onClick={testPost}
                    className="px-4 py-2 bg-green-500 text-white rounded"
                >
                    POST 테스트
                </button>
            </div>

            {response && (
                <div className="p-4 bg-gray-100 rounded">
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    )
}
