import styled from 'styled-components';

const ProductUserCardStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  & .productcard {
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 300px;
    background-color: rgb(248, 248, 248);
  }
  & .container {
    width: 100%;
    height: 50%;
  }

  & .caption {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 50%;
    width: 100%;
    gap: 1rem;
  }
  & .editbtn {
    height: 20%;
    width: 80%;
  }

  @media only screen and (max-width: 750px) {
  }
`;

const UserCardProfile = ({ data }) => {
  return (
    <ProductUserCardStyled>
      {data.products.map((item) => {
        return (
          <article className="productcard" key={item._id}>
            <img className="container" src={item.image1} alt={item._id} />

            <div className="caption">
              <h3>{item.title}</h3>
            </div>
          </article>
        );
      })}
    </ProductUserCardStyled>
  );
};

export default UserCardProfile;
