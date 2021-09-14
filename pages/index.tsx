import React from 'react';
import {fileNames} from '../src/utils';

class Home extends React.Component<{fileNames: string[]}> {
  render() {
    const {fileNames} = this.props;
    return (
      <ul>
        {fileNames.map(fn => (
          <li key="fn">{fn}</li>
        ))}
      </ul>
    );
  }
}

export default Home;

export const getServerSideProps = () => {
  return {
    props: {
      fileNames,
    },
  };
};
