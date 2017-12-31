import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import formFields from './formFields';
import * as actions from '../../actions/index';

import {withRouter} from 'react-router-dom';

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  })
  return (
    <div>
      <h5>Review</h5>
      {reviewFields}
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Cancel
      </button>

      <button
        className="green btn-flat right white-text"
        onClick={() => submitSurvey(formValues, history)}>
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );

}

function mapStateToProps(state) {
  const values = state.form.surveyForm.values;
  return {
    formValues: values
  }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));