function Challenge1({ name, isPacked }) {
    return (
        <>
        
      <li className="Challenge1">
      {name} {isPacked ? '✔':`❌`}
    </li>
        </>
    );
}

export default Challenge1;