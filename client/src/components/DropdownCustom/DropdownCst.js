import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import ListItemText from '@material-ui/core/ListItemText';
import './DropdownCst.css';

const items = [
    { name: 'Math', label: "Math" },
    { name: "Computer Science", label: "Computer Science" },
    { name: 'History', label: "History" },
    { name: 'English', label: "English" },
    { name: 'Spanish', label: "Spanish" },
    { name: 'Geography', label: "Geography" },
];

function DropdownCst() {
    return (
        <Dropdown style={{fontSize: "400px;"}}>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-basic" style={{fontSize: "400px;"}}>
                Subject
            </Dropdown.Toggle>

            <Dropdown.Menu disablePadding dense id={"createSubject"}>
                {items.map(({ label, name, ...rest }) => (
                    <Dropdown.Item key={name} button {...rest}>
                        <ListItemText>{label}</ListItemText>
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )
};

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a href="" ref={ref} onClick={(e) => { e.preventDefault(); onClick(e); }}>
        {children} &#x25bc;
    </a>
));

export default DropdownCst;