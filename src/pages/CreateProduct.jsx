import { useContext /* , useState  */ } from 'react';
import { useForm } from 'react-hook-form';

/* import { useNavigate } from 'react-router-dom'; */
import { UserContext } from '../context/UserContext';
import { API } from '../services/API';
import Button from '../ui-components/Button';
import DivFlex from '../ui-components/DivFlex';
const CreateProduct = () => {
  const { register, handleSubmit } = useForm();
  /*  let navigate = useNavigate();
  const [productPoster, setProductPoster] = useState(null); */
  const { user } = useContext(UserContext);
  const formSubmit = (formData) => {
    const data = {
      title: formData.title,
      owner: formData.owner,
      image1: formData.image1[0],
      image2: formData.image2[0],
      image3: formData.image3[0],
      description: formData.description,
      location: formData.location,
      category: formData.category,
      condition: formData.condition,
      status: formData.status,
    };
    API.post('/products', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }).then((/* res */) => {
      console.log(data);
    });
  };
  return (
    <main>
      <DivFlex padding={'20px'} margin={'20px'} gap={'2rem'} direction={'column'}>
        <form className="form" onSubmit={handleSubmit(formSubmit)}>
          <label id="owner" name="owner" {...register('{user._id}')}>
            {user.name} wants to create a product
          </label>
          <label htmlFor="title">Name of the product </label>
          <input
            className="input"
            type="text"
            id="title"
            name="title"
            {...register('title')}
            required
          />
          <input
            type="file"
            className="inputfile"
            id="image1"
            placeholder="image1"
            {...register(`image1`)}
          />
          <label htmlFor="image1">
            <span className="filename">No file seleted</span>
            <span className="filebutton">Choose an avatar</span>
          </label>
          <input
            type="file"
            className="inputfile"
            id="image2"
            placeholder="image2"
            {...register(`image2`)}
          />
          <label htmlFor="image2">
            <span className="filename">No file seleted</span>
            <span className="filebutton">Choose an avatar</span>
          </label>
          <input
            type="file"
            className="inputfile"
            id="image3"
            placeholder="image3"
            {...register(`image3`)}
          />
          <label htmlFor="image3">
            <span className="filename">No file seleted</span>
            <span className="filebutton">Choose an avatar</span>
          </label>
          <label htmlFor="description">Description</label>
          <input
            className="input"
            type="text"
            id="description"
            name="description"
            {...register('description')}
            required
          />
          <label htmlFor="location">Location</label>
          <select name="location" id="location" {...register('location')}>
            <option value="madrid">Madrid</option>
            <option value="barcelona">Barcelona</option>
          </select>
          <select name="category" id="category" {...register('category')}>
            <option value="movies, books & music">Movies, Books & Music</option>
            <option value="videogames">Videogames</option>
            <option value="appliances">Appliances</option>
            <option value="electronic">Electronic</option>
            <option value="sports & leisure">Sports & Leisure</option>
            <option value="home">Home</option>
            <option value="other">Other</option>
          </select>
          <select name="condition" id="condition" {...register('condition')}>
            <option value="new">New</option>
            <option value="as good as new">As good as new</option>
            <option value="good condition">Good condition</option>
            <option value="fair condition">Fair condition</option>
            <option value="heas given it all">Heas given it all</option>
          </select>
          <select name="status" id="status" {...register('status')}>
            <option value="available">Available</option>
            <option value="reserved">Reserved</option>
            <option value="not available">Not available</option>
          </select>
          <Button type="submit" text={'Create a Product'} />
        </form>
      </DivFlex>
    </main>
  );
};

export default CreateProduct;
