import React from 'react';
// import { RechartsDevtools } from 'recharts';
import { Line, LineChart } from 'recharts';

const resultData = [
    {
        "id": 1,
        "name": "Alex Johnson",
        "math": 92,
        "science": 88,
        "english": 74,
        "history": 81,
        "art": 65,
        "average": 80.0
    },
    {
        "id": 2,
        "name": "Sam Rivera",
        "math": 71,
        "science": 75,
        "english": 94,
        "history": 92,
        "art": 88,
        "average": 84.0
    },
    {
        "id": 3,
        "name": "Jordan Lee",
        "math": 98,
        "science": 95,
        "english": 82,
        "history": 76,
        "art": 70,
        "average": 84.2
    },
    {
        "id": 4,
        "name": "Taylor Smith",
        "math": 64,
        "science": 68,
        "english": 89,
        "history": 95,
        "art": 92,
        "average": 81.6
    },
    {
        "id": 5,
        "name": "Casey Wong",
        "math": 85,
        "science": 82,
        "english": 85,
        "history": 88,
        "art": 84,
        "average": 84.8
    },
    {
        "id": 6,
        "name": "Morgan Davis",
        "math": 45,
        "science": 52,
        "english": 78,
        "history": 84,
        "art": 95,
        "average": 70.8
    },
    {
        "id": 7,
        "name": "Riley Miller",
        "math": 88,
        "science": 91,
        "english": 90,
        "history": 85,
        "art": 77,
        "average": 86.2
    },
    {
        "id": 8,
        "name": "Jamie Clark",
        "math": 76,
        "science": 72,
        "english": 74,
        "history": 70,
        "art": 68,
        "average": 72.0
    },
    {
        "id": 9,
        "name": "Skyler White",
        "math": 94,
        "science": 97,
        "english": 91,
        "history": 89,
        "art": 82,
        "average": 90.6
    },
    {
        "id": 10,
        "name": "Quinn Brown",
        "math": 55,
        "science": 61,
        "english": 65,
        "history": 72,
        "art": 80,
        "average": 66.6
    }
]

const ResultsChart = () => {
    return (
        <div>
            <LineChart style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }} responsive data={resultData}>
                <Line dataKey="uv" />
                <RechartsDevtools />
            </LineChart>
        </div>
    );
};

export default ResultsChart;