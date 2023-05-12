import styled from 'styled-components'

export const FormForContact = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
padding: 10px;
`;

export const Input = styled.input`

border-radius: 10px;
padding: 5px 10px;
width: 200px;
margin-bottom: 20px;
font-size: 20px;
`

export const Span = styled.span`
font-weight: 600;
font-size: 20px;
line-height: 1.62;
margin-right: 10px;
`

export const AddButton = styled.button`
margin: 0 auto;
display: block;

color: #000000;
background-color: #FFEBCD;
font-weight: 500;
font-size: 20px;
line-height: 1.62;
cursor: pointer;

border: 1px solid transparent;
border-radius: 20px;
padding: 6px 15px;
width: 150px;
text-align: center;
transition: font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1),
            background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover,
&:focus {
    font-weight: 700;
    background-color: #D2B48C;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12),
                0px 1px 2px rgba(0, 0, 0, 0.08),
                0px 3px 1px rgba(0, 0, 0, 0.1);
`;