import React from "react";

const StrainList = (props) => {
    return (
        <>
            {props.strains.map((strain, index) => (
                <div>
                    <p> {strain.id}</p>
                </div>
            ))}
        </>
    );
};

export default StrainList; 