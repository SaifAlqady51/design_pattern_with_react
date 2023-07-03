
export const printProps = (Component: any)  => {
    return(props:{a:number,b:string}) => {
        return <Component {...props}/>
    }
}