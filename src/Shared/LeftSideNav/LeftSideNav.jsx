import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import girl from "../../assets/girl.png";
import family from "../../assets/family.png";
import gallery from "../../assets/gallery.png";
import { CiCalendar } from "react-icons/ci";
import moment from 'moment';

const LeftSideNav = () => {
    const [categories, setCategories]= useState([]);
    useEffect(() =>{
fetch('categories.json')
.then(res=> res.json())
.then(data=>{
    setCategories(data)
})
    },[])
    return (
       <div>
         <div className="space-y-6 mb-8">
            <h2 className="text-2xl font-medium font-poppins">All categories</h2>
            {
                categories.map(category=> <Link
                className="block ml-4 text-xl font-semibold"
                     key={category.id}
                     to={`../../../public/categories.json/${category.id}`}
                     >{category.name}</Link>)
            }
        </div>
 <div className="flex flex-col gap-4 ">
    
    <div className="space-y-5">
    <img src={girl} alt="" />
        <h2 className="text-2xl font-medium font-poppins">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
     <div className="flex gap-3 items-center">
     <p>Sports</p><CiCalendar />
        <p>{moment().format('MMMM Do YYYY')}</p>
     </div>
    </div>
    <div className="space-y-5">
        <img src={family} alt="" />
        <h2 className="text-2xl font-medium font-poppins">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
     <div className="flex gap-3 items-center">
     <p>Sports</p><CiCalendar />
        <p>{moment().format('MMMM Do YYYY')}</p>
     </div>
    </div>
    <div className="space-y-5">
    <img src={gallery} alt="" />
    <h2 className="text-2xl font-medium font-poppins">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
 <div className="flex gap-3 items-center">
 <p>Sports</p><CiCalendar />
    <p>{moment().format('MMMM Do YYYY')}</p>
 </div>
</div>

        </div>
       </div>
    );
};

export default LeftSideNav;