import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../common/input';
import styles from './registration.styles.pcss';

export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            country: '',
            city: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const { name } = event.target;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        const {
            name, surname, email, country, city,
        } = this.state;
        console.log(`${name} ${surname} ${email} ${country} ${city}`);
        event.preventDefault();
    }

    render() {
        const {
            name, surname, email, country, city,
        } = this.state;
        return (
            <div className={styles.registration_wrapper}>
                <form className={styles.form_wrapper} onSubmit={this.handleSubmit}>
                    <Input id="name" type="text" name="name" value={name} placeholder="Name" onChange={this.handleChange} />
                    <Input id="surname" type="text" name="surname" value={surname} placeholder="Surname" onChange={this.handleChange} />
                    <Input id="email" type="text" name="email" value={email} placeholder="Email" onChange={this.handleChange} />
                    <Input id="country" type="text" name="country" value={country} placeholder="Country" onChange={this.handleChange} />
                    <Input id="city" type="text" name="city" value={city} placeholder="City" onChange={this.handleChange} />
                    <div>
                        {/* <input className={styles.button_submit} type="submit" value="Log In" /> */}
                        <Link to="/page" className={styles.button_submit}>Log In</Link>
                    </div>
                </form>
                <div className={styles.center}>
                    <Link to="/" className={styles.link_style}>Back</Link>
                </div>
            </div>
        );
    }
}
