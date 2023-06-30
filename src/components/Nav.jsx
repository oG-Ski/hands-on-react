export default ({ cast, onChoice }) => {
  return(
    <nav claassName="container">
      <ul>
        <li>
          <details role="list">
            <summary aria-haspopup="listbox" rolw="link">cast</summary>
            <ul rolw="listbox">
              {cast.map(member => (
                <li key={member.id}>
                  <a onClick={() => { onChoice(member) }} data-tooltop={member.name}>
                    {cast.name}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </li>
      </ul>
      <ul>
        <li><a href="#"><img style={{height: '50px'}}
        src="images/logo_bug_stargazers.svg" 
        alt="Stargazers Logo" /></a></li>
      </ul>
    </nav>
  )
}