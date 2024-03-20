import React, { useEffect, useState } from "react";
import './short.css'

function Shorttable() {
    const [type , setType] = useState("")
    const [gender , setgender] = useState("")
  const [table, setTable] = useState([
    {
      id: 1,
      name: "Alice",
      age: 30,
      email: "alice@example.com",
      salary: 30000,
      order: 2,
      totalSepet: 23000,
      gender: "male",
      lastSeen: "10-11-2015",
    },
    {
      id: 2,
      name: "Bob",
      age: 25,
      email: "bob@example.com",
      salary: 32300,
      order: 5,
      totalSepet: 2300,
      gender: "male",
      lastSeen: "11-10-2017",
    },
    {
      id: 3,
      name: "Charlie",
      age: 28,
      email: "charlie@example.com",
      salary: 2000,
      order: 6,
      totalSepet: 23300,
      gender: "male",
      lastSeen: "09-02-2005",
    },
    {
      id: 4,
      name: "David",
      age: 35,
      email: "david@example.com",
      salary: 3030,
      order: 9,
      totalSepet: 200,
      gender: "male",
      lastSeen: "07-09-2018",
    },
    {
      id: 5,
      name: "Eva",
      age: 22,
      email: "eva@example.com",
      salary: 9000,
      order: 0,
      totalSepet: 2500,
      gender: "female",
      lastSeen: "10-01-2018",
    },
    {
      id: 6,
      name: "Frank",
      age: 31,
      email: "frank@example.com",
      salary: 30123,
      order: 1,
      totalSepet: 23000,
      gender: "male",
      lastSeen: "09-08-2011",
    },
    {
      id: 7,
      name: "Grace",
      age: 27,
      email: "grace@example.com",
      salary: 6000,
      order: 6,
      totalSepet: 3000,
      gender: "female",
      lastSeen: "12-11-2016",
    },
    {
      id: 8,
      name: "Henry",
      age: 29,
      email: "henry@example.com",
      salary: 12000,
      order: 4,
      totalSepet: 2300,
      gender: "male",
      lastSeen: "04-11-2011",
    },
  ]);


 
    const handle = () =>{  
       if(type?.length > 0){
        const filter = table.filter((item) => item.name.toLowerCase().includes(type)
        )
        setTable(filter)
       }
       else setTable(table)
          }
        //   function toGender(){
        //     setgender(gender)
        //     const Genders= table.filter((row) => row.gender.toLowerCase().includes(gender))
        //     setTable(Genders)
        //   }

useEffect(()=>{
    handle()
},[type])
  
  return (
    <div className="main" style={{display:"flex",justifyContent:"center"}}>
<div className="boxx" style={{marginRight:"20px"}}>
    <form action="">
        <input type="text" name="" id="" placeholder="search" value={type} onChange={(e) =>{setType(e.target.value)}}/>
        <br />
        <label htmlFor="">Gender</label>
<select name="" id="">
    {/* <option value="">Select gender</option> */}
    <option value="All">All</option>
<option value="Male">Male</option>
<option value="Female">Female</option>

</select>   <br />
<label htmlFor="">Last active</label>
<select name="" id="" >
    <option value="">Select year</option>
    <option value="">2005</option>
    <option value="">2011</option>
    <option value="">2015</option>
    <option value="">2016</option>
    <option value="">2018</option>
</select>
    </form>
</div>
        <div className="box">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Order</th>
            <th>Total Sepet</th>
            <th>Gender</th>
            <th>Last Seen</th>
          </tr>
        </thead>
        <tbody>
          {table.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.email}</td>
              <td>{row.salary}</td>
              <td>{row.order}</td>
              <td>{row.totalSepet}</td>
              <td>{row.gender}</td>
              <td>{row.lastSeen}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Shorttable;