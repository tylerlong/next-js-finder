import React from 'react';
import {GetServerSideProps} from 'next';

import {fileNames} from '../src/utils';

type Props = {
  fileNames: string[];
};

class Home extends React.Component<Props> {
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

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      fileNames,
    },
  };
};
