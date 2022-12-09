import {useState,useEffect} from 'react'
import Form from './Form'
import List from './List'

function Contacts() {
    const [contacts,setContacts]=useState([
    {
        fullname:"Yusuf",phonenumber:"05555555555"
    },
    {
        fullname:"Cihat",phonenumber:"05551111111"
    },
    {
        fullname:"Samet",phonenumber:"05552222222"
    }
    ]);

useEffect(()=>{
console.log(contacts)
},[contacts])

  return (
    <div>
        <List contacts={contacts}/>
        <Form addContact={setContacts} bag={contacts}/>
    </div>
  )
}

export default Contacts
