import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { UserContext } from '../context/UserContext';
import { API } from '../services/API';
import Button from '../ui-components/Button';

const ProfileStyled = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3rem;
  gap: 2rem;
  & .profilebutton {
    display: flex;
    gap: 48px;
  }
  & .productdata {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  & .productcard {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    padding: 20px;
    width: 300px;
    height: 400px;
  }

  & .productcard img {
    width: 100%;
    object-fit: contain;
    object-position: center;
    height: 60%;
    margin: 0 auto;
  }

  & .description {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  & .profiledata {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    padding: 20px;
    width: 50%;
    height: 450px;
    display: flex;
    align-items: center;
  }
  & .profiledataimg img {
    height: 80%;
    width: 60%;
    border-radius: 50%;
  }
`;

const Profile = () => {
  const [data, setData] = useState({});
  const { user } = useContext(UserContext);
  const [profile, setProfile] = useState(true);
  const [opinion, setOpinion] = useState(false);
  const [products, setProducts] = useState(false);
  const [editProduct, setEditProduct] = useState(false);
  const getProfile = () => {
    API.get(`/users/${user._id}`).then((res) => {
      setData(res.data);
    });
  };
  console.log(editProduct);
  console.log(data);

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <ProfileStyled>
      <div className="profilebutton">
        <Button
          className={'secondary'}
          bg={'second'}
          color={'second'}
          text={'PROFILE'}
          border={'yes'}
          action={() => setProfile(true) & setOpinion(false) & setProducts(false)}
        />

        <Button
          className={'secondary'}
          bg={'second'}
          color={'second'}
          text={'REVIEW'}
          border={'yes'}
          action={() => setOpinion(true) & setProfile(false) & setProducts(false)}
        />
        <Button
          className={'secondary'}
          bg={'second'}
          color={'second'}
          text={'PRODUCTS'}
          border={'yes'}
          action={() => setProducts(true) & setOpinion(false) & setProfile(false)}
        />
      </div>
      {profile && (
        <div className="profiledata">
          <div className="profiledataimg">
            <img src={data.avatar} alt={data.name} />
          </div>
          <div className="profiledatadetails">
            <h1>{data.name}</h1>
            <h2>{data.lastname}</h2>
            <h2>{data.email}</h2>
            <h2>{data.birthdate}</h2>
            <h2>{data.location}</h2>
          </div>
        </div>
      )}
      {opinion && <div className="opinionsdata">OPINION</div>}
      {products && (
        <div className="productdata">
          {data.products.map((item) => {
            return (
              <div className="productcard" key={item._id}>
                <img src={item.image1} alt={item._id} />
                <div className="description">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <Button text="EDIT" action={() => setEditProduct(true)} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </ProfileStyled>
  );
};

export default Profile;
