import React from "react";
import styles from "./message.module.scss";
import PropTypes from "prop-types";

const Message = ({type, message }) => {
   let messageClass = '';

    switch (type) {
        case 'error':
            messageClass = styles.error;
            break;
        case 'info':
            messageClass = styles.info;
            break;
        default:
            messageClass = styles.default;
            break;
    }

	return <div className={messageClass}>{message}</div>;
}

Message.propTypes = {
    type: PropTypes.oneOf(['error','info']).isRequired,
    message: PropTypes.string.isRequired,
}

export default Message;