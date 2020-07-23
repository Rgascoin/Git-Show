import React, { useEffect, Fragment, useContext } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { user, loading, getUser, getUserRepos, repos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    login,
    avatar_url,
    location,
    bio,
    blog,
    html_url,
    followers,
    following,
    compagny,
    public_repos,
    public_gist,
    hireable,
  } = user;

  if (loading) return <Spinner />;

  return (
    <div>
      <Link to='/' className='btn btn-light'>
        Back to search
      </Link>
      Hireable ={' '}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            alt='avatar'
            className='round-img'
            style={{ width: '150px' }}
          />
          <h1>{name ? name : login}</h1>
          <p>{location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h2>Bio</h2>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            Visit Github Profil
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  Username : <strong>{login}</strong>
                </Fragment>
              )}
            </li>
            <li>
              {compagny && (
                <Fragment>
                  Compagny : <strong>{compagny}</strong>
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  Blog : <strong>{blog}</strong>
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers : {followers}</div>
        <div className='badge badge-success'>Following : {following}</div>
        <div className='badge badge-ligth'>Public Repos : {public_repos}</div>
        <div className='badge badge-dark'>Public Gist : {public_gist}</div>
      </div>
      <Repos repos={repos} />
    </div>
  );
};

export default User;
