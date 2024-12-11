import maria from '..Images/maria.jpg'
const Booking = () =>{
    
    

    return (

       <div>
        <h1>Booking your Cleaning Appointment</h1>
        <h2>Book an Appoitment with Maria</h2>
       
        <img
        src={maria}
        alt='maria-owner'
        className='maria'
        ></img>
        
       </div>
    )
}
export default Booking;