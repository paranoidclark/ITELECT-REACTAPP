import React, { useState, useEffect } from 'react'
import './App.css'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Addstudent = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [course, setCourse] = useState("")
    const [subjects, setSubjects] = useState([])
    const navigate = useNavigate()
    const handleCheckBoxChange = (e) => {
        const { value, checked } = e.target
        if (checked) {
            setSubjects(prevSubjects => [...prevSubjects, value])
        } else {
            setSubjects(prevSubjects => prevSubjects.filter(subject => subject !== value))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !age || !course || subjects.length === 0) {
            alert("Fill all details")
            return
        }
        console.log(name);
        console.log(age);
        console.log(course);
        console.log(subjects);
        Axios.post('http://localhost:5173/', { name, age, course, subjects }).then(response => {
            console.log('Response:', response.date)
            navigate('/', { replace: true })
            window.location.reload();
            alert("New Student added")
        })
            .catch(error => {
                console.error('Error:', error)
            })
    }

    return (
        <div className="App">
            <h1>Add a new Student</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Student Details</legend>
                    <div class="row">
                        <label class="form-label mt-4">Name</label>
                        <input type="text" class="form-control" placeholder="Enter name" required onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div class="row">
                        <label class="form-label mt-4">Age</label>
                        <input type="number" class="form-control" placeholder="Enter age" required onChange={(e) => setAge(e.target.value)} />
                    </div>

                    <div class="row">
                        <label class="form-label mt-4">Course</label>
                        <input type="text" class="form-control" placeholder="Enter course" required onChange={(e) => setCourse(e.target.value)} />
                    </div>
                    <legend class="mt-4">Subjects</legend>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Comprog" id="flexCheckDefault" onChange={handleCheckBoxChange} />
                        <label class="form-check-label" for="flexCheckDefault">
                            Default checkbox
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Albion" id="flexCheckChecked" onChange={handleCheckBoxChange} />
                        <label class="form-check-label" for="flexCheckChecked">
                            Checked checkbox
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Roblox" id="flexCheckChecked" onChange={handleCheckBoxChange} />
                        <label class="form-check-label" for="flexCheckChecked">
                            Checked checkbox
                        </label>
                    </div>
                </fieldset>
                <button type="submit" class="btn btn-outline-success">Success</button>
            </form>
        </div>
    )
}

export default Addstudent