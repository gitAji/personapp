const Person = (props)=>{
    return(
<ul>
    <li><b>{props.firstName}</b> {props.lastName}  from <i>{props.city}</i></li>
</ul>
    )
}
export default Person;