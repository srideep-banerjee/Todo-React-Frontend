import React from "react"
import { useState } from "react"
//import "./styles.css"

type NewtodoFormProps = {
    onSubmit: (title:string) => void
}
export function NewtodoForm({onSubmit}: NewtodoFormProps) {
    const [newItem, setNewItem] = useState("")
    
    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        if(newItem==="")return
        onSubmit(newItem)
        setNewItem("")
    }
    
    return (
        <form onSubmit={(e)=>handleSubmit(e)} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">
                    New Item
                </label>
                <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
            </div>
            <button className="btn">Add</button>
        </form>
    )
}