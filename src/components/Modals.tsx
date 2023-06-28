import styled from 'styled-components'
import React, { useState } from 'react'
import { ReactNode } from 'react'

const ModalsBackgorund = styled.div`
    width:100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index:1;
`

const ModalsBody = styled.div`
    background-color: white;
    margin:10% auto;
    padding: 20px;
    width:50%;
`

export const Modals = ({children}:{children:ReactNode}) => {
    const [shouldShow,setShouldShow] = useState<boolean>(false);
    return (
        <>
            <button  onClick={() => setShouldShow(true)}>Show Modal</button>
            {shouldShow &&
                <ModalsBackgorund onClick={() => setShouldShow(false)}>
                    <ModalsBody onClick={(e:React.FormEvent) => e.stopPropagation()}>
                        <button onClick={() => setShouldShow(false)}>hide Modal</button>
                        {children}
                    </ModalsBody>
                </ModalsBackgorund>
            
            }

        </>

    )
}