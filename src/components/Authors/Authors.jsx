import { useLoaderData } from "react-router-dom";

const Authors = () => {
    const authors = useLoaderData()

    return (
        <div>
            <div className="overflow-x-auto border rounded-sm">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className="text-base">Authors Name</th>
                            <th className="text-base">Book Name</th>
                            <th className="text-base">Category</th>
                            <th className="text-base">Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                  
                        <tr>
                            <th>1</th>
                            <td>{authors[0].author}</td>
                            <td>{authors[0].book_name}t</td>
                            <td>{authors[0].category}t</td>
                            <td>{authors[0].rating} of 5</td>
                        </tr>
                       
                        <tr>
                            <th>2</th>
                            <td>{authors[1].author}</td>
                            <td>{authors[1].book_name}</td>
                            <td>{authors[1].category}t</td>
                            <td>{authors[1].rating} of 5</td>
                        </tr>
                    
                        <tr>
                            <th>3</th>
                            <td>{authors[2].author}</td>
                            <td>{authors[2].book_name}</td>
                            <td>{authors[2].category}t</td>
                            <td>{authors[2].rating} of 5</td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>{authors[3].author}</td>
                            <td>{authors[3].book_name}</td>
                            <td>{authors[3].category}t</td>
                            <td>{authors[3].rating} of 5</td>
                        </tr>
                       
                        <tr>
                            <th>5</th>
                            <td>{authors[4].author}</td>
                            <td>{authors[4].book_name}</td>
                            <td>{authors[4].category}t</td>
                            <td>{authors[4].rating} of 5</td>
                        </tr>
                    
                        <tr>
                            <th>6</th>
                            <td>{authors[5].author}</td>
                            <td>{authors[5].book_name}</td>
                            <td>{authors[5].category}t</td>
                            <td>{authors[5].rating} of 5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Authors;