import React, { useState } from 'react';
import { Form, Container, Label, Button, Input } from './FormAddContact.styled';

export const FormAddContact = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeContact = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>
          Contact Name:
          <Input
            type="text"
            name="name"
            required
            value={name}
            onChange={handleChangeContact}
          />
        </Label>
        <Label>
          Phone number:
          <Input
            type="tel"
            name="number"
            required
            value={number}
            onChange={handleChangeContact}
          />
        </Label>
        <Button type="submit">Додати контакт</Button>
      </Form>
    </Container>
  );
};
