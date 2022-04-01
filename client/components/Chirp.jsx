import React, { useEffect, useState } from "react";



const Chirp = ({name, content, id, counter, setCounter}) => {

const [post, setPost] = useState("");

const handlePost = () => {
    setEdit(val)
}

// const handleEditInput = (val) =>{
//     setEdit(val)
// }

// const handleEditSave = () => {
//     let data = {
//         content: edit,
//         id: id

//     }

//     fetch('/api/chirps', {
//         method: 'PUT',
//         headers: {
//             "Content-Type": 'application/JSON'
//         },
//         body: JSON.stringify(data)
//     })
//     setCounter(counter+1);
// }





}