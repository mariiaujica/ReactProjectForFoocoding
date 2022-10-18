
function MenuItem(props) {
  const isSelected = window.location.pathname === props.linktopage;
  const isSelectedText = isSelected? "selected":"";
  return (
    <li className={isSelectedText}>
        <a href={props.linktopage}>
            {props.text}
        </a>
    </li>
  );
}

export default MenuItem;
