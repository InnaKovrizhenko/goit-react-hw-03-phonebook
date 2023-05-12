import PropTypes from 'prop-types';
import { Deletebutton, Span, ListContacts } from './ContactList.styled';

export const ContactList = ({ visibleListContacts, deleteContact }) => {
    return (
      <ul>
        {visibleListContacts.map(({ id, number, name }) => {
          return (
            <ListContacts key={id}>
              <Span>
                {name}: {number}
              </Span>
              <Deletebutton type="button" onClick={() => deleteContact(id)}>
                Delete
              </Deletebutton>
            </ListContacts>
          );
        })}
      </ul>
    );
  };

  ContactList.propTypes = {
    visibleListContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteContact: PropTypes.func.isRequired,
  };