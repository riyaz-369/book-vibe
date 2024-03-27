import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

const PagesToRead = () => {
    const [chart, setChart] = useState([]);

    useEffect(() => {
        const getBooks = JSON.parse(localStorage.getItem('book')) || [];
        setChart(getBooks);
    }, []);

    return (
        <div className="mb-20 bg-base-200 p-16 rounded-3xl">
            <ResponsiveContainer width="100%" height={450}>
                <BarChart data={chart}>
                    <XAxis dataKey="book_name" />
                    <YAxis dataKey="total_pages" />
                    <CartesianGrid strokeDasharray="5 7" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total_pages" fill="#8884d8" >
                        {chart.map(book =>
                            <div key={book.book_id}>
                                {book.book_name}
                            </div>)
                        }
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PagesToRead;
