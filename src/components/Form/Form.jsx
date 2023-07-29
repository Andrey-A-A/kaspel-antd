import { useState } from 'react'


const MyForm = () => {

  const [formData, setFormData] = useState({
    title: "",
    body: ""
  })
  // const [title, setTitle] = useState("")

  // const [body, setBody] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h1> Our Form </h1>
      <label htmlFor="title">Title</label>
      <input onChange={(e) => setFormData({...formData, title: e.target.value})} value={formData.title} type="text" name="title" id="title" />
      <label htmlFor="body">Body</label>
      <textarea onChange={(e) => setFormData({...formData, body: e.target.value})} value={formData.body} name="body" id="body"></textarea>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default MyForm