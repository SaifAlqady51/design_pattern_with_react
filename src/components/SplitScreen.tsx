import styled from 'styled-components'

type SpliScreenProps = {
    children: JSX.Element[] 
    leftWeight:number,
    rightWeight:number
}

interface PaneProps {
    weight:number
}

const Container = styled.div`
    display:flex;
`

const Pane = styled.div<PaneProps>`
    flex: ${props => props.weight};
`


export const SplitScreen = ({children,leftWeight,rightWeight}: SpliScreenProps) => {
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