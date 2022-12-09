import {useState,useEffect} from 'react'
const initialInputValues={fullname:"",phonenumber:""}

function Form({addContact,bag}) {
    const [form,setForm]=useState(initialInputValues);

    useEffect(()=>{
        setForm(initialInputValues)   //inputları boşaltma

    },[bag]);

    const onChangeInput=((e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    })
    const onSubmit=(e)=>{
        console.log(form)
        if (form.fullname==="" || form.phonenumber==="") {  //hata verme
          
        return false; 
        }

        addContact([...bag,form])

        setForm(initialInputValues)   //inputları boşaltma
        e.preventDefault();
    }
    
  return (
    <form onSubmit={onSubmit}>
        <div>
      <input name='fullname' value={form.fullname} placeholder='Fullname' onChange={onChangeInput}/>
      </div>
      <div>
      <input name='phonenumber' value={form.phonenumber} placeholder='Phone Number' onChange={onChangeInput}/>
      </div>
      <div>
        <button onClick={onSubmit}>Add</button>
      </div>
    </form>
  )
}

export default Form
