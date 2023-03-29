import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { UserContext } from '../context/UserContext';
import { API } from '../services/API';
import AverageRating from '../ui-components/AverageRating';
import Button from '../ui-components/Button';
import CommentsAll from '../ui-components/CommentsAll';
import ProductProfile from '../ui-components/ProfileProduct';

const ProfileStyled = styled.main`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 4rem;

  & .profiledata {
    background-color: rgb(248, 248, 248);
    width: 100%;
    height: 185px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .profiledataedit {
    background-color: rgb(248, 248, 248);
    width: 100%;
    height: 185px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  & .profildataleft {
    width: 33%;
    height: 100%;
    display: flex;
    gap: 2rem;
  }
  & .profileimg {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .profileimg > img {
    width: 125px;
    height: 125px;
    border-radius: 50%;
  }
  & .profiledatacenter {
    width: 33%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  & .profiledataright {
    width: 33%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  & .profilerating {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }
  & .profavatar {
    width: 33%;
    height: 100%;
    display: flex;
    gap: 32px;
  }
  & .profavatarimg {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .profavatarimg > img {
    width: 125px;
    height: 125px;
    border-radius: 50%;
  }
  & .profavatar > label {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  & .inputfile {
    display: none;
  }
  & .editleft {
    display: flex;
    flex-direction: column;
    width: 23%;
    height: 100%;
  }
  & .editright {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 23%;
    height: 100%;
  }
  & .editbtn {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    width: 20%;
    height: 100%;
  }
  & .middlebtn {
    display: flex;
    gap: 3rem;
    padding: 2rem;
  }
  & .input {
    font-family: inherit;
    font-size: inherit;
    background-color: #f4f2f2;
    border: none;
    color: #646464;
    border-radius: 30px;
    width: 12em;
    transition: all ease-in-out 0.5s;
    margin-right: -2rem;
  }
  & .ratio {
    display: flex;
    gap: 8px;
  }
`;

const Profile = () => {
  const { register, handleSubmit } = useForm();

  const [data, setData] = useState({});
  const [comments, setComments] = useState({});
  const [loaded, setLoaded] = useState(false);

  const { user, setUser, logout } = useContext(UserContext);

  const [showPassword, setShowPassword] = useState(false);
  const [profile, setProfile] = useState(true);
  const [opinion, setOpinion] = useState(false);
  const [products, setProducts] = useState(false);
  const [showAvatar, setShowAvatar] = useState(user.avatar);
  const [valueAvatar, SetValueAvatar] = useState(user.avatar);

  const onChangeAvatar = (e) => {
    SetValueAvatar(e.target.files[0]);
    setShowAvatar(URL.createObjectURL(e.target.files[0]));
  };
  const getProfile = () => {
    API.get(`/users/${user._id}`).then((res) => {
      setData(res.data);
      setLoaded(true);
      setUser(res.data);
    });
  };
  const getComments = () => {
    API.get(`/user/comments/${user._id}`).then((res) => {
      setComments(res.data);
    });
  };
  console.log(data);

  const formSubmit = (formData) => {
    const updatedata = {
      name: formData.name,
      lastname: formData.lastname,
      gender: formData.gender,
      birthdate: formData.birthdate,
      location: formData.location,
      email: formData.email,
      password: formData.password,
      avatar: valueAvatar,
    };
    API.patch(`/users/${data._id}`, updatedata, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }).then(() => {
      setProfile(true);
      getProfile();
    });
  };
  const deleteUser = (user) => {
    API.delete(`/users/${user._id}`).then(() => {
      logout();
    });
  };

  useEffect(() => {
    getProfile();
    getComments();
  }, [loaded]);

  return (
    <ProfileStyled>
      {loaded & profile ? (
        <div className="profiledata">
          <nav className="profildataleft">
            <nav className="profileimg">
              <img src={data.avatar} alt={data.name} />
            </nav>
            <nav className="profilerating">
              <h2>
                {data.name} {data.lastname}
              </h2>
              <nav className="ratio">
                <AverageRating ratings={data.rating} />
                <p>{data.comments.length}</p>
              </nav>
            </nav>
          </nav>
          <nav className="profiledatacenter">
            <p>{data.email}</p>
            <p>{data.location.toUpperCase()}</p>
            <p>{new Date(data.birthdate).toLocaleDateString('es-ES')}</p>
          </nav>

          <nav className="profiledataright">
            <Button
              className={'principal'}
              text="EDIT"
              action={() => setProfile(false)}
            />
            <Button
              className={'principal'}
              text="DELETE"
              action={() => {
                deleteUser(data);
              }}
            />
          </nav>
        </div>
      ) : (
        <form className="profiledataedit" onSubmit={handleSubmit(formSubmit)}>
          <div className="profavatar">
            <nav className="profavatarimg">
              <img src={showAvatar} alt="" />
            </nav>
            <label htmlFor="avatar">
              <nav className="buttonfile">Choose an avatar</nav>
            </label>
            <input
              type="file"
              className="inputfile"
              id="avatar"
              placeholder="avatar"
              {...register(`avatar`)}
              onChange={onChangeAvatar}
            />
          </div>
          <nav className="editleft">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="input"
              id="name"
              placeholder="name"
              {...register(`name`)}
              defaultValue={data.name}
            />
            <label htmlFor="lastname">Last name</label>
            <input
              type="text"
              className="input"
              id="lastname"
              placeholder="lastname"
              {...register(`lastname`)}
              defaultValue={data.lastname}
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="input"
              id="email"
              placeholder="email"
              {...register(`email`)}
              defaultValue={data.email}
            />
            <label htmlFor="birthdate">Birthdate</label>
            <input
              type="date"
              className="input"
              id="birthdate"
              placeholder="birthdate"
              {...register(`birthdate`)}
              defaultValue={new Date(data.birthdate).toLocaleDateString('es-ES')}
            />
          </nav>
          <nav className="editright">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              className="input"
              id="location"
              placeholder="location"
              {...register(`location`)}
              defaultValue={data.location}
            />
            <Button
              text="Change Password"
              type="button"
              action={() => setShowPassword(!showPassword)}
            />
            {showPassword && (
              <>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="input"
                  id="password"
                  placeholder="password"
                  {...register(`password`)}
                />
              </>
            )}
          </nav>
          <nav className="editbtn">
            <Button type="submit" className={'principal'} text={'UPDATE'} />
            <Button
              type="button"
              className={'principal'}
              text={'BACK'}
              action={() => setProfile(true)}
            />
          </nav>
        </form>
      )}
      <div className="middlebtn">
        <Button
          className={'secondary'}
          bg={'second'}
          color={'second'}
          text={'PRODUCTS'}
          border={'yes'}
          action={() => setOpinion(false) & setProducts(true)}
        />
        <Button
          className={'secondary'}
          bg={'second'}
          color={'second'}
          text={'REVIEWS'}
          border={'yes'}
          action={() => setOpinion(true) & setProducts(false)}
        />
      </div>
      {opinion &&
        (comments.length ? <CommentsAll comment={comments} /> : <h1>no reviews</h1>)}
      {products && <ProductProfile data={data} />}
    </ProfileStyled>
  );
};

export default Profile;
