const Person = (props)=>{
    return(
<div>
   <div class="one"><b>{props.firstName}</b> {props.lastName}  from <i>{props.city}</i></div>
</div>
    )
}
export default Person;