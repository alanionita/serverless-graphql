import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import User from './User';

export const UserQuery = gql`
  query UserQuery(
    $handle: String!
    $consumer_key: String!
    $consumer_secret: String!
  ) {
    getUserInfo(
      handle: $handle
      consumer_key: $consumer_key
      consumer_secret: $consumer_secret
    ) {
      name
      location
      handle
      favourites_count
      description
      followers_count
      friends_count
      tweets(limit: 100) {
        items {
          tweet
        }
      }
    }
  }
`;

const UserList = () => {
  const { loading, error, data } = useQuery(UserQuery, {
    variables: {
      handle: process.env.REACT_APP_HANDLE,
      consumer_key: process.env.REACT_APP_CONSUMER_KEY,
      consumer_secret: process.env.REACT_APP_SECRET_KEY,
    },
    pollInterval: 10000,
  });
  if (loading) return <p>Loading ...</p>;
  if (error) return alert(error);
  return (
    <div>
      <User key={data.getUserInfo.name} user={data.getUserInfo} />
    </div>
  );
};

UserList.propTypes = {
  data: PropTypes.any, // eslint-disable-line
};

export default UserList;
