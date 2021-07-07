import React, { Component } from "react";
import Form from "./components/Form/Form";
import styles from "./components/container.module.css";
// import shortid from "shortid";
import ContactsList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import { Provider } from "react-redux";
import store from "./components/redux/store";

import "./App.css";

class App extends Component {
  // componentDidMount() {
  //   const contacts = localStorage.getItem("contacts");

  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //     // console.log(this.state);
  //   }
  // }
  // componentDidUpdate(prevState) {
  //   const nextContacts = this.state.contacts;
  //   const prevContacts = prevState.contacts;
  //   if (nextContacts !== prevContacts) {
  //     localStorage.setItem("contacts", JSON.stringify(nextContacts));
  //   }
  // }

  // addContact = ({ name, number }) => {
  //   if (this.state.contacts.find((contact) => contact.name === name)) {
  //     alert(`${name}  is alredy in contacts`);
  //     return;
  //   }
  //   this.setState(({ contacts }) => ({
  //     contacts: [contact, ...contacts],
  //   }));
  // };

  render() {
    // const { contacts } = this.state;

    // const visibleContact = this.getVisibleContacts();
    return (
      <Provider store={store}>
        <section className={styles.container}>
          <h1>Phonebook</h1>
          <Form />
          <h2>Contact List</h2>
          <Filter />
          <ContactsList />
        </section>
      </Provider>
    );
  }
}

export default App;
