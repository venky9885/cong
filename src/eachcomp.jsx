// import React from 'react'
// import './eachcomp.css'
// function Eachcompo() {
//     return (
//         <div id="eachcardintrans">ggyu</div>
//     )
// }

// export default Eachcompo;

import React from 'react';
import Record from './Record';

const RecordList = () => {
    // add date time
    var dt = new Date();
    // dt.
    const records = [
        { name: 'John Doe', ppnNumber: '123456', type: '334.44', number: new Date("2021-03-25").toLocaleDateString('en-US') },
        { name: 'Jane Smith', ppnNumber: '987654', type: '223.22', number: new Date("2021-03-25").toLocaleDateString('en-US') },
        // Add more records as needed
    ];

    return (
        <div>
            {records.map((record, index) => (
                <Record
                    key={index}
                    name={record.name}
                    ppnNumber={record.ppnNumber}
                    type={record.type}
                    number={record.number}
                />
            ))}
        </div>
    );
};

export default RecordList;
