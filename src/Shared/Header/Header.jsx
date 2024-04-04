import logo from '../../../src/assets/logo.png';
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="" />
            <p className=''>Journalism Without Fear or Favour </p>
            <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")} </p>
        </div>
    );
};

export default Header;