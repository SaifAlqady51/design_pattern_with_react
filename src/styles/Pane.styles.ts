import styled from 'styled-components'
import { PaneProps } from '../types/Pane.type'

export const Pane = styled.div<PaneProps>`
    flex: ${props => props.weight};
`
