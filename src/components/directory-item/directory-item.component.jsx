import './directory-item.styles.jsx'
import { useNavigate } from 'react-router-dom';
import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles.jsx';

const DirectoryItem = ({cat}) => {
   const {imageUrl, title, route} = cat;
   const navigate = useNavigate();
   const onNavigateHandler = navigate(route);
   return(
    <DirectoryItemContainer onClick={onNavigateHandler}>
  <BackgroundImage 
  imageUrl = {imageUrl}
  />
        <Body> 
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Body>
      </DirectoryItemContainer>
   )
}

export default DirectoryItem;