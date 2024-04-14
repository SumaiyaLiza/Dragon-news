import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]); 
    useEffect(()=> {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div>
            <h2>All Categories</h2> 
           <div className=" mt-5 ">
        
          {
                categories.map(category => (
                    <Link className="block mb-6" key={category.id} to={`/category/${category.id}`}>
                        {category.name}
                    </Link>
                ))
            }

           </div>
        </div>
    );
};

export default LeftSideNav;
