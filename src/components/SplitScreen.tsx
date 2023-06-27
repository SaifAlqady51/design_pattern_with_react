import { FC } from 'react'
import { Container } from '../styles/Container.styles'
import { Pane } from '../styles/Pane.styles'


type SpliScreenProps = {
    children: JSX.Element[] 
    leftWeight:number,
    rightWeight:number
}



export const SplitScreen: FC<SpliScreenProps> = ({children,leftWeight,rightWeight}: SpliScreenProps) => {
    const [left,right] = children
    return (
        <Container>
            <Pane weight={leftWeight}>
                {left}    
            </Pane>
            <Pane weight={rightWeight}>
                {right}
            </Pane>
        </Container>
    )
}