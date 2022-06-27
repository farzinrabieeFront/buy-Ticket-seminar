import React, { useEffect, useRef, useState } from 'react'
import { MdContentCopy } from 'react-icons/md'
import { IoCheckboxOutline } from 'react-icons/io5'
import Styles from "./CopyToClipboard.module.scss"

const CopyToClipboard = ({ data, children, size, className }) => {
    let ref = useRef(null)
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setCopied(false);
        }
    };


    const copyToClipboard = (text) => {
        const textField = document.createElement("textarea");
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand("copy");
        textField.remove();
    };

    return (
        <span
            ref={ref}
            className={`${className || ''} pointer text-gray-4 en d-flex align-items-center justify-content-end ltr`}
            onClick={() => {
                copyToClipboard(data)
                setCopied(true);
            }}
        >

            {children ?
                <span className='mx-2'>{children}</span>
                : null
            }
            {copied ? (
                <IoCheckboxOutline
                    size={16}
                    className={`${copied ? Styles.copied : ""} text-blue  pointer`}
                />
            ) : (
                <MdContentCopy
                    size={size || 16}
                    className={`${copied ? Styles.copied : ""} text-gray-3  pointer`}
                />
            )}
            {/* <MdContentCopy
                size={16}
                className="text-gray-3 en  pointer"
            /> */}

        </span>
    )
}

export default CopyToClipboard