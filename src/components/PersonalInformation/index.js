import React, { Component } from 'react';
import PropTypes from 'prop-types';


import PersonalHeader from './PersonalHeader';
import PersonalBody from './PersonalBody';

import transformPersonalData from '../../services/transformPersonalData';
import './styles.scss';
import Loading from '../Loading';

class PersonalInformation extends Component {

  constructor() {
    super();
    this.state = {}
  }

  renderBody() {
    const {
      name,
      occupation,
      email,
      degree,
      extract,
      picture,
    } = transformPersonalData(this.props.data, this.props.language);
    
    return (
      <div className="personal-block">
        <div className="card profile-card">
          <PersonalHeader
            name={name}
            occupation={occupation}
            picture={picture}>
          </PersonalHeader>
          <div className="extract">
            {extract}
          </div>
          <PersonalBody
            degree={degree}
            email={email}>
          </PersonalBody>
        </div>
      </div>
    )
  }

  render() {
    return (
      this.props.data
        ? this.renderBody()
        : <Loading></Loading>
    );
  }
}

PersonalInformation.propTypes = {
  language: PropTypes.string.isRequired,
  data:PropTypes.object
};
export default PersonalInformation;