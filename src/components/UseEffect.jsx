import React, { useEffect, useState } from "react";

const UseEffect = () => {
    const [count, setCount] = useState(1);
    const [renderCount, setRenderCount] = useState(0);
    const [userData , SetData ] = useState({})
    
    let val = 10;
    function variable() {
      val = val + 1;
      console.log(val);
    }

  const increment = () => {
    // call only one time because the array of dependencies is empty so it will render only once when the componet is mount to the ui
    setCount(count + 1);
  };

  useEffect(() => {
    // it will not re render when the state is update and re render . if you want to re render when the state value change , give that state to the array of dependencies
    setRenderCount(renderCount + 1);

    // const increment = () => {
    //   // call only one time because the array of dependencies is empty so it will render only once when the componet is mount to the ui
    //   setCount(count + 1);
    // };

    // function decalared inside the useEffect can only call inside the useeffect ,
    // but can call the funtion when the function is out side the useeffect
    // increment();

    // donot make the dependancy array value to render infinite eg : adding the rendercount to the dependency ,
    // when the component mount it will update the renderCount and while adding it to the dependency array it watch the state change and re render it infinitly
  }, []); //change it to empty and the renderCount see the difference

  // second use Effect

    useEffect(() => {
      const interval = setInterval(() => {
        // Code to run at intervals
        console.log('interval');
        setCount((prev) => prev + 1)
      }, 1000);
      return () => {
        clearInterval(interval);
      };
     
    }, []);


    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${count}`);
          const data = await response.json();
        //   console.log(data);
          SetData(data)
        };
        fetchData();
    }, [count]);


   
    
    return (
        <div>
      <h1>Number of Re renders : {renderCount}</h1>
      <hr />

      <h1>Actual count : {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count increment
      </button>

      <h1>variable value : {val}</h1>
      {/* variable value actually increment aavum but atu re render aavulla , dependency arrayuda akattu koduttalum re render aavoolla , update aaya value display avvoolla */}
      <button onClick={variable}> varible change</button>


        {/* array of items */}
        
        {/* {userData.map((item)=>
          <p>{item.title}</p>
        //   console.log(item)
        )} */}


        {/* single item */}

        <p>{userData.title}</p>
    </div>
  );
};

export default UseEffect;
