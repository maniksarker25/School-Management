import React from 'react';

const Error = ({error}) => {
    return (
        <div>
            <p role="alert" className="text-red-500">
                    {error}
                    </p>
        </div>
    );
};

export default Error;