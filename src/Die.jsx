import PropTypes from 'prop-types';



Die.propTypes = {
    isHeld: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
    holdDice: PropTypes.func.isRequired,
};

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}