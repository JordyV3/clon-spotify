import React from 'react'
import {Choices} from './Styles';

const SidebarChoice = ({title, Icon}) => {
    return (
        <Choices>
            {
                Icon && <Icon/>
            }
            {
                Icon ? <h4>Title</h4> : <h5>{title}</h5>
            }
        </Choices>
    )
}

export default SidebarChoice
