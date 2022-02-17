import React, {useState} from 'react'
import styled from 'styled-components'
import { BiChevronDown } from 'react-icons/bi'

const DropDownContainer = styled("div")`
  width: 200px;
  margin: 0 auto;
`;
const DropDownHeader = styled("div")`
  display:flex;
  justify-content: space-between; 
  align-item:center;
  margin-bottom: 4px;
  line-height: 20px;
  padding: 18px 18px 18px 24px;
  font-weight: 400;
  font-size: 14px;
  color: #111517;
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  cursor: pointer; 
`;
const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  position: absolute;
  z-index:500;
  width: 200px;
  padding: 0;
  margin: 0;
  padding-left: 24px;
  padding-top: 16px;
  padding-bottom:16px; 
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 8px;
  cursor: pointer; 
   &:first-child {
    margin-top: 0;
  }
`;

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const options = ["Mangoes", "Apples", "Oranges"];

    const onOptionClicked = (value: any) => () => {
        
      setSelectedOption(value);
      setIsOpen(false);
      console.log(selectedOption);

    };

    //add click for toggling the boolean to either true or false as shown below.
    const toggling = () => setIsOpen(!isOpen);

    return (
        <div>
        <DropDownContainer>
            <DropDownHeader onClick={toggling} > { selectedOption ||'Filter by Region'}  <BiChevronDown /> </DropDownHeader>
            {isOpen && 
                <DropDownListContainer>
                    <DropDownList>
                       {options.map(option => (
                            <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                                {option}
                            </ListItem>
                        ))}
                    </DropDownList>
                </DropDownListContainer>
            }
            
        </DropDownContainer>
            
        </div>
    )
}

export default Dropdown
