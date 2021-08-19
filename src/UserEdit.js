

export default function UserEdit(props){
    console.log(props)
    return <>
    <h1>UserEdit {props.match.params.id}</h1>
    </>
}