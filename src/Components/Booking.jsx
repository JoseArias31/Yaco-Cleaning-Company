
import maria from '../Images/maria.jpg';
import andrea from '../Images/andrea.jpg';
import marisol from '../Images/marisol.jpg'; // Unique image file
import alejandra from '../Images/alejandra.jpg'; // Unique image file
import '../Styles/Booking.css';

const Booking = () => {
  const proCleaners = [
    {
      name: 'Marisol',
      alt: 'Marisol Cleaners',
      photo: marisol, // Use the imported marisol image
    },{
      name: 'Andrea',
      alt: 'Andrea Cleaners',
      photo: andrea, // Use the imported marisol image
    },
    {
      name: 'Alejandra',
      alt: 'Alejandra Cleaners',
      photo: alejandra, // Use the imported alejandra image
    },
  ];

  return (
    <div id='bookSection' className='bookingSection'>
      <div id='MariaSection'>
      <h1 id='textBooking'>Booking your Cleaning Appointment</h1>

      <img
        src={maria}
        alt='Maria, the owner of Yaco Cleaning'
        className='maria'
      />
      <h2 className='mariaBooking'>
        <a
          className="nav-link mariaBooking2"
          href="https://calendly.com/yaco-cleaning"
          target='blank'
        >
          Book an Appointment with Maria
        </a>
      </h2>
      </div>
<div id='familyMembers'>
      {proCleaners.map((cleaners, index) => (
        <div  key={index}>
          
          <div id='eachFamilyMember'>
            <img
              src={cleaners.photo}
              alt={cleaners.alt}
              className='maria'
            />
            <h3 className='cleanersNames'>{cleaners.name}</h3>
          </div>
        </div>
      ))}

      
    </div>
    <h3>Family Members</h3>
    </div>
  );
};

export default Booking;