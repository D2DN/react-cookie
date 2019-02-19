import React , { Component } from 'react';
import { instanceOf } from 'prop-types';
import './App.css';

// import react-cookie
import { Cookies , withCookies } from 'react-cookie';

class App extends Component {
	static propTypes = {
		cookies: instanceOf(Cookies).isRequired
	};

	handleChange (event) {
		console.log(event.target.value);
		const { cookies } = this.props;
		if ( event.target.value === 'ADD COOKIE' ) {
			console.debug('click on ADD COOKIE');
				cookies.set('locale' , 'fr' , { path: '/' })
		}
		else {
			console.debug('click on REMOVE COOKIE');
			cookies.remove('locale')
		}
	}

	render () {
		return (
			<div className="App">
				<button onClick={ this.handleChange.bind(this) } value='ADD COOKIE'>ADD COOKIE</button>
				<button onClick={ this.handleChange.bind(this) } value='REMOVE COOKIE'>REMOVE COOKIE</button>
			</div>
		);
	}
}

export default withCookies(App);
