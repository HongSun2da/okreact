function Contact() {
  const list = ['Contact_1', 'Contact_2', 'Contact_3', 'Contact_4'];
  return (
    <div>
      <h1>pages/Contact</h1>
      <ul>
        {list.map((item, index) => (
          <li key={index}><a href={index}>{item}( {index} )</a></li>  
        ))}
      </ul>
    </div>
  )
}

export default Contact
