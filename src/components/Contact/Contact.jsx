import css from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa';

const Contact = ({ name, number, onDelete }) => {
    return (
        <li className={css.item}>
            <div className={css.contact}>
                <p className={css.text}>
                    <FaUser className={css.icon} />
                    {name}
                </p>
                <p className={css.text}>
                    <FaPhone className={css.icon} />
                    {number}
                </p>
            </div>
            <button className={css.btn} onClick={onDelete}>Delete</button>
        </li>
    );
};

export default Contact;
