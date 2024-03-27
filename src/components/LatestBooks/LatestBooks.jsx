
const LatestBooks = () => {
    return (
        <div className="flex flex-col gap-5 items-center justify-center h-96">
            <h3 className="text-3xl font-medium font-mono">Coming Soon...</h3>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div className="flex flex-col">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 15 }}></span>
                    </span>
                    days
                </div>
                <div className="flex flex-col">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 10 }}></span>
                    </span>
                    hours
                </div>
                <div className="flex flex-col">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 24 }}></span>
                    </span>
                    min
                </div>
                <div className="flex flex-col">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 25 }}></span>
                    </span>
                    sec
                </div>
            </div>
        </div>
    );
};

export default LatestBooks;