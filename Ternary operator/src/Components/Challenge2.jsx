function Challenge2({ name, importance }) {
    return(
        <>
    <li className="Challenge2">
      {name} {importance >0 && <i>(importance : {importance} )</i>}
    </li>
        </>
    );
}

export default Challenge2;