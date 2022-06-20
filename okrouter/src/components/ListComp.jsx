function ListComp(props) {
    return (
      <li>
        <a href={props.idx}>{props.item}( ListComp {props.idx} )</a>
      </li>  
    );
  }
  
  export default ListComp;
  