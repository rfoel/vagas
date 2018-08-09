import React, { Component } from 'react';

import { getJobs } from '../../client';

class Jobs extends Component {
  componentDidMount() {
    getJobs();
  }

  render() {
    return <div>Jobs</div>;
  }
}

export default Jobs;
