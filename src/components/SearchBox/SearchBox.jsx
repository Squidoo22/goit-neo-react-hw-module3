import css from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
    return (
        <div className={css.searchBox}>
            <label className={css.label}>
                Find contacts by name
                <input
                    type="text"
                    className={css.input}
                    value={value}
                    onChange={evt => onFilter(evt.target.value)}
                />
            </label>
        </div>
    );
};

export default SearchBox;
