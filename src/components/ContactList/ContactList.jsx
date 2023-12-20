import React from 'react';
import { nanoid } from 'nanoid';
import { List, ListItem, Span } from './ContactList.styled';

export const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(el => (
        <ListItem key={nanoid()}>
          {el.name}: <Span>{el.number}</Span>
          <button type="button" onClick={() => deleteContact(el.id)}>
            X
          </button>
        </ListItem>
      ))}
    </List>
  );
};

// export class ContactsList extends Component {
//   render() {
//     const { contacts } = this.props;
//     return (
//       <List>
//         {contacts.map(
//           el => (
//             <ListItem key={nanoid()}>
//               {el.name}: <Span>{el.number}</Span>
//               <button type="button" onClick={() => this.props.delete(el.id)}>
//                 X
//               </button>
//             </ListItem>
//           )
//         )}
//       </List>
//     );
//   }
// }
