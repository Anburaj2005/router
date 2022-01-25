import React from "react";

const tutorial=()=> {
    let counter = 0;

    const increament = () => {
        counter = counter + 1;
        console.log(counter);
    };
    return (
        <div>
            {counter} <button onClick={increament}>{increament}</button>

        </div>
    );


}
export default tutorial;