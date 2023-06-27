import styled from 'styled-components'
import { PaneProps } from '../types/Pane.Type'

export const Pane = styled.div<PaneProps>`
    flex: ${props => props.weight};
`
