import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FormForContact, AddButton, Span, Input } from './ContactForm.styled';


export class ContactForm extends Component {

    static propTypes = {
        addContact: PropTypes.func.isRequired,
        contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
      };

  state = {
    name: '',
    number: '',
  };

  onInputName = event => {
    this.setState({ name: event.currentTarget.value });
  };
  onInputNumber = event => {
    this.setState({ number: event.currentTarget.value });
  };

  onSubmitForm = e => {
    const state = this.state;

    e.preventDefault();
    const contact = {
      id: nanoid(5),
      name: state.name,
      number: state.number,
    };

    if (this.props.contacts.find((i) => i.name === state.name)) {
        alert(`${state.name} is already in contacts`);
        this.setState({
            name: '',
            number: '',
        });
        return;
    }

    this.props.addContact(contact);
    this.setState({
        name: '',
        number: '',
    });
  };

  render() {
    const state = this.state;
    return (
      <FormForContact onSubmit={this.onSubmitForm} action="">
        <label>
          <Span>Name</Span>
          <Input
            value={state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.onInputName}
          />
        </label>
        <label>
          <Span>Number</Span>
          <Input
            value={state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.onInputNumber}
          />
        </label>
        <AddButton type="submit">Add contact</AddButton>
      </FormForContact>
    );
  }
}
