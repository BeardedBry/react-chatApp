import React from 'react';

const Slider = ({toggle, status}) => {
    

    return (
        <span className={`slider slider-${status}`} onClick={()=>toggle()}>
            {status === 'closed' ? ">" : "<"}
        </span>
        // <button className="slider" title=">" onClick={()=>console.log('click')}/>
    )
}

export default Slider;