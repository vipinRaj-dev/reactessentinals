import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(5);
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);

  const userDetails = {
    userName: "vipin",
    age: 25,
  };

  const [userObj, setUserObj] = useState(userDetails);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserObj((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const countries = [
    { name: "India", value: "IN", cities: ["delhi", "mumbai"] },
    { name: "Pak", value: "PK", cities: ["Lahore", "karachi"] },
    { name: "Bangaladesh", value: "Bg", cities: ["Dhaka", "chitta"] },
  ];

  const [selectedCountry, setSelectedCountry] = useState([]);

  const handleCities = (value) => {
    // console.log(value);

    let selected = countries.filter((item) => item.name === value);
    console.log(selected);
    setSelectedCountry(selected[0].cities);
  };

  let copy = items.slice(); // structuredClone(items)
  // copy is actually changing the array refernce not the object refernce , so when we change the object value it will change the value for permenent in that reference

  let updatedItem = copy.map((item) => {
    return (
      //by spreading the required item it will make a copy and set that name to that copy and doesnot make the state value change
      item.id === 2 ? { ...item, name: "vipin" } : item

      // this will not work because it is directly mutating the state value,  it is not the preferable way
      // item.id === 2 ? item.name = 'vipin' : item
    );
  });
  console.log(items);
  return (
    <div>
      {count}
      {/* preffered to make the changes using the previous state value */}
      <button onClick={() => setCount((prev) => prev + 1)}>inc</button>

      <button onClick={() => setItems(updatedItem)}>updatedItem</button>

      <h2>updating</h2>
      <h2>List of Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <form>
        <input
          type="text"
          name="userName"
          id=""
          value={userObj.userName}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="age"
          id=""
          value={userObj.age}
          onChange={handleInputChange}
        />
      </form>

      <h1>{userObj.userName}</h1>
      <h1>{userObj.age}</h1>

      <select name="countries" onChange={(e) => handleCities(e.target.value)}>
        {countries.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
            </option>
        ))}
      </select>
      {selectedCountry &&
        <select name="cities">
        { selectedCountry.map((cities, index) => 
           <option key={index} value={cities}>{cities}</option>
        )}
      </select>}
    </div>
  );
};

export default UseState;
