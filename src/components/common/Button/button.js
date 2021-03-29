import React from 'react';
import Button from '@material-ui/core/Button';

const PEMButton = ({
    text,
    handleClick,
    aria
}) => {
    return(
        <>
        <Button aria-controls={aria} onClick={handleClick}>
            {text}
        </Button>
        </>
    )
}

export default PEMButton