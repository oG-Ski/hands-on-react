export default ({member, handleClose}) => {
  return(
    <dialog id="modeal-member" openn>
      <atricle>
        <a href="#close"
          aria-label="Close"
          className="close"
          data-target="modal-member"
          onClick={handleClose}
          ></a>
          <hgroup>
            <div style={{
                display: "flex",
                gap: '1rem'
              }}>
                <img style={{ width: '200px' }}
                  src={`images/${member.slug}.svg`} 
                  alt={member.name} />
                <hgroup>
                  <h1>{member.name}</h1>
                  <p>{member.bio}</p>
                </hgroup>
              </div>
          </hgroup>
      </atricle>
    </dialog>
  )
}