import React,{useState} from "react";

export function Form() {
  const [store,setStore] = useState({name:'',department:'',rating:''});
  const [out,setOut] = useState([]);
  let input = (e) =>{
    let name = e.target.name;
    let inputValue = e.target.value; 
    setStore({...store,[name]:[inputValue]});
  }
  const submitted = (e) => {
    e.preventDefault();
    setOut([...out,{...store,id:out.length}]);
  }
  return (
    <div className="container">
      <form onSubmit={submitted}>
        <label>Name :</label>
        <input type="text" onChange={input} name='name' placeholder="" />
        <br />
        <label >Department :</label>
        <input type="text" onChange={input} name='department' placeholder="" />
        <br />
        <label htmlFor="name">Rating :</label>
        <input type="text" onChange={input} name='rating' placeholder="" />
        <br />
        <br />
        <input style={{ fontSize: "xx-large", height: "65px" }} type="submit" value="Submit"/>
        <div className="feedStoreDiv">
        {out.map((ele)=>(
          <h3 className="feedStoreData" key={ele.id}>
          Name : {ele.name} || Department : {ele.department } || Rating : {ele.rating}
          </h3>))}
        </div>
      </form>
    </div>
  );
}

