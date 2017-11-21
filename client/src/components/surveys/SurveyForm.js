import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { reduxForm, Field } from 'redux-form';

import SurveyField from './SurveyField';




const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'emails' }

]
class SurveyForm extends Component {

  renderFields() {

    return FIELDS.map(({ label, name }) => {
      return (
        <Field
          key={name}
          label={label}
          type="text"
          name={name}
          component={SurveyField} />
      )
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text" >Back</Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm)