// import { useContext } from 'react';
// import { useNavigate } from 'react-router';
// import styled from 'styled-components';

// import { ProductContext } from '../context/ProductContext';
// import Button from './Button';

// const ProductsProfileStyled = styled.div`
// display: grid;
// grid-template-columns: repeat(4, 1fr);
// gap: 1rem;
//  & .productcard
//   background-color: white;
//   border-radius: 5px;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
//   padding: 20px;
//   width: 300px;
//   height: 400px;
//     & .productcard img {
//     width: 100%;
//     object-fit: contain;
//     object-position: center;
//     height: 60%;
//     margin: 0 auto;
//   }

//   & .description {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//   }
// `;

// const ProductsProfile = ({ user }) => {
//   let navigate = useNavigate();
//   const { setEditProduct } = useContext(ProductContext);

//   return (
//     <ProductsProfileStyled>
//       {user.map((item) => {
//         return (
//           <article className="productcard" key={item._id}>
//             <img src={item.image1} alt={item._id} />
//             <div className="description">
//               <h2>{item.title}</h2>
//               <p>{item.description}</p>
//               <Button
//                 text="EDIT"
//                 action={() => {
//                   navigate('/editproduct');
//                   setEditProduct(item);
//                 }}
//               />
//             </div>
//           </article>
//         );
//       })}
//     </ProductsProfileStyled>
//   );
// };

// export default ProductsProfile;
