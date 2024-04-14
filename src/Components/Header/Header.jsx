
import logo from "../../assets/logo.png";
import moment from 'moment';

const Header = () => {
    return (
        <div className="text-center mt-14 space-y-5 mb-9">
            <img src={logo} alt="Logo" className="mx-auto" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format('dddd, MMMM Do, YYYY')}</p>
        </div>
    );
};

export default Header;
