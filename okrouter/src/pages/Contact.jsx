import ListComp from '../components/ListComp.jsx';

function Contact() {
  const list = ['Contact_1', 'Contact_2', 'Contact_3', 'Contact_4'];
  return (
    <div>
      <h1>Contact</h1>
      <ul>
        {list.map((item, index) => (
          <ListComp item={item} idx={index} key={index}></ListComp>
        ))}
      </ul>
    </div>
  )
}

export default Contact
